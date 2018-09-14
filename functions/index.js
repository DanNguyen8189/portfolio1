const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage2 = functions.database.ref('/messages/{pushKey}')
  .onCreate((snapshot, context) => {
/*// Only send email for new messages.
  if (snapshot.previous.val() || !snapshot.val().name) {
    return;
  }*/
  
  const original = snapshot.val();
  
  const mailOptions = {
    to: 'dannguyen8189@gmail.com',
    /*subject: `Information Request from ${val.author} at ${val.title}`,
    text: val.url,*/
    subject: 'New contact page submission from personal website!',
    //javascript string interpolation: remember to use the backticks ``
    text: `New message! From ${original.name} at ${original.email}: ${original.text}`,
    html: original.html
  };
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('Mail sent')
  });
});
