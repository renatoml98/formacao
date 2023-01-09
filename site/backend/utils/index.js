const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');

const dbAuth = require('../db/auth.js');

async function validateToken(access_token, refresh_token){
    return new Promise((resolve, reject) => {
        jwt.verify(access_token, process.env.ACCESS_SECRET, (error, user) => {
            if(error){
                console.log(error);
                reject();
            } else {
                refreshToken({id: user.id, username: user.username}, refresh_token).then(value => resolve({user: {id: user.id, username: user.username}, access_token: value}))
                .catch(error => {
                    console.log(error);
                    resolve({user: {id: user.id, username: user.username}});
                });
            }
        });
    });
}

async function refreshToken(user, refresh_token){

    return new Promise((resolve, reject) => {
        dbAuth.checkToken(crypto.SHA256(refresh_token, process.env.CRYPTO_KEY).toString()).then(value => {
            if(value == 0) {
                reject({code: 401, message: "Token inválido."});
            } else {
                let access_token = jwt.sign(user, process.env.ACCESS_SECRET, {expiresIn: '30m'});

                resolve(access_token);
            }
        })
        .catch(error => {
            console.log(error);
            reject({code: 400, message: "Algo correu mal com a query."});
        });
    });
}

module.exports = {
    validateToken: validateToken,
    refreshToken: refreshToken
}