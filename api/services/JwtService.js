
const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey =fs.readFileSync(sails.config.jwtSecret.privateKeyPath);
const publicKey = fs.readFileSync(sails.config.jwtSecret.publicKeyPath);
module.exports = {
  issue: (payload, expiresIn) => {
    return jwt.sign({payload}, privateKey , {expiresIn, algorithm: 'RS256'});
  },
  verify: (token) => {
    return jwt.verify(token, publicKey,  {algorithm: 'RS256'});
  }
};
