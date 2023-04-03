
const firebaseConfig = {
    apiKey: "AIzaSyAbkVf_giVOWjhnh-Qv08lHODbYyLG91EA",
    authDomain: "architektura-oprogram.firebaseapp.com",
    databaseURL: "https://architektura-oprogram-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "architektura-oprogram",
    storageBucket: "architektura-oprogram.appspot.com",
    messagingSenderId: "917436385204",
    appId: "1:917436385204:web:a7272a19df7ff76fc954e1",
    measurementId: "G-YYJYDDYZSQ"
  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('orderForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var type = getInputVal('type');
  var quantity = getInputVal('quantity');

  // Save message
  saveMessage(name, type, quantity);





  // Clear form
  document.getElementById('orderForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, type, quantity){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    type: type,
    quantity: quantity
  });
}


