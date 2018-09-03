// setting up the router function: takes in the server and the database as parameters so it can access their methods
const router = (server, db) => {
    server.get('/', (req, res) => {
        res.send('dickcheese');
    })
}

// exporting the router
exports.router = router;

// *NOTE: If you add the router to the exports object with '.', you must import it with destructuring...
// ...otherwise, if you set 'module.exports' equal to the router, it's like 'export default' in React.