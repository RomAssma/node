const generatePassword = require('generate-password');


function generateRandomPassword() {

    const password = generatePassword.generate({
        
    length:12,
    numbers: true,
    symbol:true,
    uppercase: true,
    excludeSimilarCharacters: true,


    });

    console.log ("generate password :", password);
}
 generateRandomPassword();
