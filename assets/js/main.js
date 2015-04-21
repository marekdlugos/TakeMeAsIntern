var clock = document.getElementById("countdown-holder")
    , targetDate = new Date(2015, 05, 01); // June 1, 2015;
 
  clock.innerHTML = countdown(targetDate).toString();
  setInterval(function(){
    clock.innerHTML = countdown(targetDate).toString();
  }, 1000);