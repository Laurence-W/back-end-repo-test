// Import libraries
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

// ----- encryption and decryption -------

let encAlgorithm = 'aes-256-cbc';
let encPrivateKey = crypto.scryptSync(process.env.ENV_KEY, "SpecialSalt", 32);
let encIV = crypto.scryptSync(process.env.ENC_IV, "SpecialSalt", 16);
let cipher = crypto.createCipheriv(encAlgorithm, encPrivateKey, encIV);
let decipher = crypto.createDecipheriv(encAlgorithm, encPrivateKey, encIV);

// Convert string into encrypted string
function encryptString(data) {
    cipher = crypto.createCipheriv(encAlgorithm, encPrivateKey, encIV);
    return cipher.update(data, "utf8", "hex") + cipher.final("hex");
}

// Return encrypted data to plaintext string
function decryptString(data){
    decipher = crypto.createDecipheriv(encAlgorithm, encPrivateKey, encIV);
    return decipher.update(data, "hex", "utf8") + decipher.final("utf8");
}

// Decrypt encrypted Object returning to a regular javascript object
function decryptObject(data){
    return JSON.parse(decryptString(data));
}

