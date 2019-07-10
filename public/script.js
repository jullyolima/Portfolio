$(document).ready(function () {


//hides all popups on load up  
hideHouses();

//button to close boxes
$( ".close" ).click(function() {
  $('#welcomeBox').hide();
  hideHouses(); 
});

})
//function that closes any and all "house" boxes
function hideHouses () {
$('#resumeBox').hide();
$('#projectsBox').hide();  
$('#aboutMeBox').hide();  
$('#contactBox').hide(); 
}

// Function that detects collision
function collision(obj1, obj2) {
  let x1 = obj1.offset().left;
  let y1 = obj1.offset().top;
  let h1 = obj1.outerHeight(true);
  let w1 = obj1.outerWidth(true);
  let b1 = y1 + h1;
  let r1 = x1 + w1;
  let x2 = obj2.offset().left;
  let y2 = obj2.offset().top;
  let h2 = obj2.outerHeight(true);
  let w2 = obj2.outerWidth(true);
  let b2 = y2 + h2;
  let r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}

let colliding = false;
//All of the player movements
$(document).keydown(function (e) {
  let player = $(".player");
  let resumeHouse = $(".resume");
  let projectsHouse = $(".projects");
  let contactHouse = $(".contact");
  let aboutmeHouse = $(".aboutMe");

  var tID; //we will use this variable to clear the setInterval()
function stopAnimate() {
clearInterval(tID);
}
 //end of stopAnimate()
function animateScript() {
var    position = 50; //start position for the image slicer
const  interval = 100; //100 ms of interval for the setInterval()
const  diff = 50;     //diff as a variable for position offset
tID = setInterval ( () => {
$('.player').css('background-position', `-${position}px 0px`);
//we use the ES6 template literal to insert the variable "position"
if (position < 1601)
{ position = position + 
diff;}
//we increment the position by 50 each time
else
{ position = 50; }
//reset the position to 50px, once position exceeds 1536px
}
, interval ); //end of setInterval
} //end of animateScript()

  let checkCollisions = function() {
    if (collision(resumeHouse, player)) {
      console.log("Touching Resume Building")
      $('#resumeBox').show();
      colliding = true;
      setTimeout(function(){ colliding = false }, 500);
    }
    if (collision(projectsHouse, player)) {
      console.log("Touching Projects Building")
      $('#projectsBox').show(); 
      colliding = true;
      setTimeout(function(){ colliding = false }, 500);
    }
    if (collision(contactHouse, player)) {
      console.log("Touching Contact Info Building")
      $('#contactBox').show();  
      colliding = true;
      setTimeout(function(){ colliding = false }, 500);
    }
    if (collision(aboutmeHouse, player)) {
      console.log("Touching About Me Info Building")
      $('#aboutMeBox').show();
      colliding = true;
      setTimeout(function(){ colliding = false }, 500); 
    }
  }

    switch (e.which) {

      case 38: //up
        console.log("Up")
        $(".player").finish().animate({
            top: "-=10"
        }, 100);

        animateScript();
        checkCollisions();

        //if collision is detected, bounce back
        if (colliding) {
        $(".player").finish().animate({
            top: "+=20"
        }, 100);
        }

        break;


      case 37: //left
        console.log("Left")
        $(".player").finish().animate({
            left: "-=10"
        }, 100);

        checkCollisions();

        //if collision is detected, bounce back
        if (colliding) {
        $(".player").finish().animate({
            left: "+=20"
        }, 100);
        }

        break;


      case 39: //right
        console.log("Right")
        $(".player").finish().animate({
            left: "+=10"
        }, 100);

        checkCollisions();

        //if collision is detected, bounce back
        if (colliding) {
        $(".player").finish().animate({
            left: "-=20"
        }, 100);  
        }

        break;


      case 40: //down
        console.log("Down")
        $(".player").finish().animate({
            top: "+=10"
        }, 100); 

        checkCollisions();

        //if collision is detected, bounce back
        if (colliding) {
        $(".player").finish().animate({
            top: "-=20"
        }, 100);   
        }
    }
  });


  //in collision function
  // if collision true set collion to true and check for that function in movement to set back equal movement axies