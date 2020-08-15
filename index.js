const admin = require("firebase-admin");
const serviceAccount =require("JXqcs2syEPMNdAfb6Q87sZ8v4A0r/HFZl059XX15bTSw6D68Ct4i6icXs.json"); 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://auditnp-4dee7.firebaseio.com"
});
