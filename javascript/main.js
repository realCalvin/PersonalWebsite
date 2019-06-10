$("#p-btn").click(function () {
    document.querySelector('.alert-text').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.alert-text').style.display = 'none';
    }, 3000);
})


// FIREBASE CONTACT FORM

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA-39LficIEFQytASzHIw_N1ICZMx8k_Is",
    authDomain: "contactform-63fc1.firebaseapp.com",
    databaseURL: "https://contactform-63fc1.firebaseio.com",
    projectId: "contactform-63fc1",
    storageBucket: "contactform-63fc1.appspot.com",
    messagingSenderId: "593590891219"
};
firebase.initializeApp(config);

// reference messages collection
var messagesRef = firebase.database().ref('messages');

// listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// submit form
function submitForm(e) {
    e.preventDefault();
    var name = getContactVal('contact-name');
    var email = getContactVal('contact-email');
    var message = getContactVal('contact-message');

    console.log("HERE");
    // saves message
    saveMessage(name, email, message);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);

    // clears contact form
    document.getElementById('contact-form').reset();
}

// function to get contact form values
function getContactVal(id) {
    return document.getElementById(id).value;
}
// save message to firebase
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}