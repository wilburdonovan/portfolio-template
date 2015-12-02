function afterLoad () {

  //--- SAVE ALL DIVS AND BUTTONS NEEDED ---
  var appify = document.getElementById("appify");
  var sunflower = document.getElementById("sunflower");
  var bokeh = document.getElementById("bokeh");
  var appify2 = document.getElementById("appify2");
  var sunflower2 = document.getElementById("sunflower2");
  var bokeh2 = document.getElementById("bokeh2");
  var backButtons = document.getElementsByTagName('button');
  
 /*
  * Hides all main divs
  */
  function hideOther2 () {
    appify.style.display='none';
    sunflower.style.display='none';
    bokeh.style.display='none';
  };
  
 /*
  * When each app is clicked:
  * - All main apps are hidden
  * - The app that is clicked is re-displayed
  * - The complementary div for
  *   the clicked app is displayed
  */
  appify.onclick=function(){
    hideOther2();
    appify.style.display='block';
    appify2.style.display="block";
  };
  
 sunflower.onclick=function(){
    hideOther2();
    sunflower.style.display='block';
    sunflower2.style.display='block';
  };
  
  bokeh.onclick=function(){
    hideOther2();
    bokeh.style.display='block';
    bokeh2.style.display='block';
  };
  
 /* 
  * When any back button in the
  * information divs are clicked,
  * all information divs are hidden
  * and main divs are displayed.
  */
  for (var i = 0; i < backButtons.length; i++) {
    backButtons[i].onclick = function () {
      appify2.style.display='none';
      sunflower2.style.display='none';
      bokeh2.style.display='none';
      appify.style.display='block';
      sunflower.style.display='block';
      bokeh.style.display='block';
    };
  }
  
}

//--- RUNS JS CODE AFTER THE WINDOW IS LOADED ---
window.onload=afterLoad;