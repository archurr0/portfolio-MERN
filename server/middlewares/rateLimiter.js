const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
    windowMs: 60*60*1000,
    max: 1000,
    message: {
        message: "Too many feedbacks from this IP, please try again in 1 hour.",
    },
    handler: (req, res, next, options)=>{
        res.status(options.statusCode).send(options.message);
    },
    standardHeaders: true,
    legacyHeaders: false,
});
module.exports = rateLimiter;