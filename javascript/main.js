$("#p-btn").click(function () {
    document.querySelector('.alert-text').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.alert-text').style.display = 'none';
    }, 3000);
})

$(document).ready(function () {
    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 5,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": "#000000"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 2
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 15,
                        "size_min": 0.7,
                        "sync": true
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "top-right",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 200,
                        "size": 15,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 2
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }
    );
    console.log("Particles loaded")
    onChange();
});

function onChange() {

}


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