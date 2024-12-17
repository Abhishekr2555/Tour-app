require('dotenv').config();

const ADMIN_CREDENTIALS = {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD
};

const authenticateAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Admin Area"');
        return res.status(401).send('Authorization required');
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');

    if (
        username === ADMIN_CREDENTIALS.username &&
        password === ADMIN_CREDENTIALS.password
    ) {
        return next();
    } else {
        return res.status(403).send('Forbidden: Incorrect credentials');
    }
};

module.exports = authenticateAdmin;
