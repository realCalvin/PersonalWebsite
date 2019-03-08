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
          $("#navbar").show(800);   
       }else{
          $("#navbar").hide(800);
       }
        
       // ABOUT PAGE
        if(scrollPos > 500){
            $("#about-hide").show();
            $("#my-img").animate({left: "+0px"}, 600);
            $("#about-header").animate({left: "+0px"}, 1000);
            $("#about-bar").animate({left: "+0px"}, 1000);
            $("#about-text").animate({top: "+0px",opacity: 1}, 900);
        }
        // SKILLS PAGE
        if(scrollPos > 2100){
            $("#skills-hide").show();  
            $("#skills-header").animate({left: "+0px"}, 1000);
            $("#skills-p").animate({top: "+0px"}, 1000);
            $("#skills-bar").animate({left: "+0px"}, 1000);
            $("#my-languages").animate({top: "+0px"}, 1000);
            $("#soft-skills").animate({left: "+0px"}, 1500);
        }
        // EXPERIENCE PAGE
        if(scrollPos > 3150){
            $("#experience-hide").show();
            $("#experience-header").animate({left: "+0px"}, 1000);
            $("#experience-bar").animate({right: "+0px"}, 1000);
            $("#first-job").animate({top: "+0px"}, 1000);
            $("#first-company").animate({right: "+0px"}, 1000);
            $("#first-period").animate({left: "+0px"}, 1000);
        }
        // PROJECT PAGE
        if(scrollPos > 4450){
            $("#project-hide").show();
            $("#projects-header").animate({right: "+0px"}, 1000);
            $("#project-bar").animate({left: "+0px"}, 1000);
            $("#project1").animate({top: "+0px"}, 1000);
            $("#project2").animate({bottom: "+0px"}, 1000);
            $("#project3").animate({top: "+0px"}, 1000);
            $("#project4").animate({bottom: "+0px"}, 1000);
        }
        // CONTACT PAGE
        if(scrollPos > 5850){
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