const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.myFunction = functions.firestore
  .document('chat/{message}')
  .onWrite((change, context) => {
      console.log(snapshot.data());
  });

