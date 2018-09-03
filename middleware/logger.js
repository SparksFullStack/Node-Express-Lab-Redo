// here we create a logging middleware that just logs the data from the request and response objects
const logger = (req, res, next) => {
    console.log(`Body: ${req.body}`);
    console.log(`Parameters: ${req.params}`);
    console.log(`Queries: ${req.query}`);

    next();
}

exports.logger = logger;