/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

 import inquirer from 'inquirer';
 import fs from "fs";
 import qr from 'qr-image';

 inquirer.prompt([{
    type: 'input',
    name : 'url',
    message: 'Enter the message here:'
 }]).then(answers => {
    var url = answers.url;
    var qr_image = qr.image(url, {type: 'png',})
    qr_image.pipe(fs.createWriteStream('YourQRCode.png'));

    fs.writeFile("UserURL.txt",url, (err) =>{
        if (err) throw err;
        console.log("This file has been saved succesfully!");
    
     })
 });
