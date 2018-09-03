/* DB methods:
* find: no params; returns all entries
* findById: single ID as param; returns only that entry
* insert post object as param; returns post's ID
* update: ID and object with changes as params; returns the # of records updated (1 === successful)
* remove: ID as param; returns # of records deleted
*/

// setting up the router function: takes in the server and the database as parameters so it can access their methods
const router = (server, db) => {
    // get to '/api/posts'
    server.get('/api/posts', (req, res) => {
        db.find()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json({ error: "The posts could not be retrieved from the database." }));
    })

    // get to '/api/posts/:id'
    server.get('/api/posts/:id', (req, res) => {
        const { id } = req.params;

        db.findById(id)
            .then(response => response[0] ? res.status(200).json(response[0]) : res.status(404).json({ error: "A post with that ID does not exist" }))
            .catch(err => res.status(500).json({ error: 'The post could not be retrieved.' }));
    })

    // post to '/api/posts'
    server.post('/api/posts', (req, res) => {
        const { title, contents} = req.body;
        if (!title || !contents) return res.status(400).json({ error: 'Please provide both the title and contents for the post.' });

        db.insert({ title, contents })
            .then(response => {
                db.findById(response.id)
                    .then(response2 => res.status(200).json(response2[0]));
            })
            .catch(err => res.status(500).json({ err: "There was an error saving the post to the database." }));
    })

    // delete to '/api/posts/:id'
    // put to '/api/posts/:id'
}

// exporting the router
exports.router = router;

// *NOTE: If you add the router to the exports object with '.', you must import it with destructuring...
// ...otherwise, if you set 'module.exports' equal to the router, it's like 'export default' in React.