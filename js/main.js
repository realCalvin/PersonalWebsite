$(function(){
    $("#navbar").hide();
    $("#about-hide").hide();
    $("#skills-hide").hide();
    $("#experience-hide").hide();
    $("#project-hide").hide();
    $("#contact-hide").hide();
    $(window).scroll(function() {
        
       // READS SCROLL POSITION
       var scrollPos = $(document).scrollTop();
       console.log(scrollPos);
        
       // NAVBAR
       if(scrollPos > 700){
          $("#navbar").show(800);   
       }else{
          $("#navbar").hide(800);
       }
        
       // ABOUT PAGE
        if(scrollPos > 300){
            $("#about-hide").show();
            $("#my-img").animate({left: "+0px"}, 600);
            $("#about-header").animate({left: "+0px"}, 1000);
            $("#about-bar").animate({left: "+0px"}, 1000);
            $("#about-text").animate({top: "+0px",opacity: 1}, 900);
        }
        // SKILLS PAGE
        if(scrollPos > 1350){
            $("#skills-hide").show();  
            $("#skills-header").animate({left: "+0px"}, 1000);
            $("#skills-p").animate({top: "+0px"}, 1000);
            $("#skills-bar").animate({left: "+0px"}, 1000);
            $("#my-languages").animate({top: "+0px"}, 1000);
            $("#soft-skills").animate({left: "+0px"}, 1500);
        }
        // EXPERIENCE PAGE
        if(scrollPos > 2400){
            $("#experience-hide").show();
            $("#experience-header").animate({left: "+0px"}, 1000);
            $("#experience-bar").animate({right: "+0px"}, 1000);
            $("#first-job").animate({top: "+0px"}, 1000);
            $("#first-company").animate({right: "+0px"}, 1000);
            $("#first-period").animate({left: "+0px"}, 1000);
        }
        // PROJECT PAGE
        if(scrollPos > 3400){
            $("#project-hide").show();
            $("#projects-header").animate({right: "+0px"}, 1000);
            $("#project-bar").animate({left: "+0px"}, 1000);
            $("#project1").animate({top: "+0px"}, 1000);
            $("#project2").animate({bottom: "+0px"}, 1000);
            $("#project3").animate({top: "+0px"}, 1000);
            $("#project4").animate({bottom: "+0px"}, 1000);
        }
        // CONTACT PAGE
        if(scrollPos > 4400){
            $("#contact-hide").show();
            $("#contact-header").animate({left: "+0px"}, 1000);
            $("#contact-bar").animate({left: "+0px"}, 1000);
            $("#contact-question").animate({bottom: "+0px"}, 1000);
            $("#contact-question").animate({bottom: "+0px"}, 1000);
            $("#main-contact").animate({bottom: "+0px"}, 1300);
        }
    });
});