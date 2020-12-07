
// WARNING: The following is intentionally bad code, being used as part of a technical test. DO NOT USE!!

'use strict';

const DB_CONNECTION_STRING = 'postgresql://db_username:Hd6njP2DKWjG4SSfGWfE@example.com:5432/our_db';
const TOKEN_LIFETIME_IN_SECS = 604800;  // one week
const TOKEN_SECRET = 'cvAD7JuNU2JEhL9vmYvB';

// generateToken generates a JSON Web Token that can be used as a session token:
const generateToken = require('./tokens.js');
// dbApi is some ORM for interacting with a postgres DB:
const dbApi = require('./db.js');

const express = require('express');
const router = express.Router();
let dbConnection = null;

async function userLogin(req, res, next) {

    if (!dbConnection) {
        dbConnection = await dbApi.connect(DB_CONNECTION_STRING);
    }

    const { email, password } = req.body;

    const user = await dbConnection.rawQuery('SELECT * FROM users WHERE email = \'' + email + '\';');

    if (!user) {
        return res.send({ msg: 'Unable to find user.' });
    }

    if (password !== user.password) {
        return res.send({ msg: 'The incorrect password was given.' });
    }

    const userToken = await generateToken({ userId: user.id }, TOKEN_LIFETIME_IN_SECS, TOKEN_SECRET);

    res.send({
        userToken,
        user
    });

}

router.get('/login', express.json(), async (req, res, next) => {

    try {
        await userLogin(req, res, next);
    } catch (err) {
        next(err);
    }

});

module.exports = router;
