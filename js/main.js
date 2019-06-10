// LOADING SCREEN
$(document).ready(function() {
    setTimeout(function(){
        $("#loading").fadeToggle(1000, function(){
            $("#loading").css("display","none");
            $("#main").css("display","inline");
            particlesJS('particles-js',
              {
                "particles": {
                  "number": {
                    "value": 50,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#ffffff"
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
                      "particles_nb": 50
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }

            );
        });
    }, 2000);
});

// JQUERY
$(function(){
    $("#navbar").hide();
    $("#about-hide").hide();
    $("#skills-hide").hide();
    $("#experience-hide").hide();
    $("#project-hide").hide();
    $("#contact-hide").hide();
    $("#my-email").hide();
    $("#my-phone").hide();
    $(".alert").hide();

    $(window).scroll(function() {
        
       // READS SCROLL POSITION
       var scrollPos = $(document).scrollTop();
        
       // NAVBAR
        if(scrollPos > 700){
          $("#hide-nav").css("visibility", "visible"); 
          $("#navbar").show(600);
       }
       else{
          $("#navbar").hide();
       }
       // ABOUT PAGE
        if(scrollPos > $("#about-me").offset().top-350){
            $("#about-hide").show();
            $("#my-img").animate({left: "+0px"}, 600);
            $("#about-header").animate({left: "+0px"}, 1000);
            $("#about-bar").animate({left: "+0px"}, 1000);
            $("#about-text").animate({top: "+0px",opacity: 1}, 900);
        }
        // SKILLS PAGE
        if(scrollPos > $("#skills").offset().top-350){
            $("#skills-hide").show();  
            $("#skills-header").animate({left: "+0px"}, 1000);
            $("#skills-p").animate({top: "+0px"}, 1000);
            $("#skills-bar").animate({left: "+0px"}, 1000);
            $("#my-languages").animate({top: "+0px"}, 1000);
            $("#soft-skills").animate({left: "+0px"}, 1500);
        }
        // EXPERIENCE PAGE
        if(scrollPos > $("#experience").offset().top-350){
            $("#experience-hide").show();
            $("#experience-header").animate({left: "+0px"}, 1000);
            $("#experience-bar").animate({right: "+0px"}, 1000);
            $("#first-job").animate({top: "+0px"}, 1000);
            $("#first-company").animate({right: "+0px"}, 1000);
            $("#first-period").animate({left: "+0px"}, 1000);
        }
        // PROJECT PAGE
        if(scrollPos > $("#projects").offset().top-350){
            $("#project-hide").show();
            $("#projects-header").animate({right: "+0px"}, 1000);
            $("#project-bar").animate({left: "+0px"}, 1000);
            $("#project1").animate({left: "+0px"}, 1000);
            $("#project2").animate({top: "+0px"}, 1000);
            $("#project3").animate({top: "+0px"}, 1000);
            $("#project4").animate({right: "+0px"}, 1000);
        }
        // CONTACT PAGE
        if(scrollPos > $("#contact").offset().top-350){
            $("#contact-hide").show();
            $("#contact-header").animate({left: "+0px"}, 1000);
            $("#contact-bar").animate({left: "+0px"}, 1000);
            $("#contact-question").animate({bottom: "+0px"}, 1000);
            $("#contact-question").animate({bottom: "+0px"}, 1000);
            $("#main-contact").animate({bottom: "+0px"}, 1300);
        }
    });
    $("#mail-icon").mouseover(function(){
        $("#my-email").show(600);
    });
    $("#phone-icon").mouseover(function(){
        $("#my-phone").show(600);
    });
    
});

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
    function submitForm(e){
        e.preventDefault();
        var name = getContactVal('my-name');
        var email = getContactVal('email');
        var message = getContactVal('message');
        
        // saves message
        saveMessage(name, email, message);
        
        // show alert
        document.querySelector('.alert').style.display = 'block';
        
        // hide alert after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
        }, 5000);
        
        // clears contact form
        document.getElementById('contact-form').reset();
    }

    // function to get contact form values
    function getContactVal(id){
        return document.getElementById(id).value;
    }
    // save message to firebase
    function saveMessage(name, email, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            message: message
        });
    }