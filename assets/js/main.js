function stopwatch() {
  function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  //console.log(getTimeFromSeconds(10))

  const stopwatch = document.querySelector(".stopwatch");
  //const start = document.querySelector(".start");
  //const pause = document.querySelector(".pause");
  //const restart = document.querySelector(".restart");
  let seconds = 0;
  let timer;

  function startStopwatch() {
    timer = setInterval(function () {
      seconds++;
      stopwatch.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const element = e.target;
    //console.log(element); //show elements on click

    if (element.classList.contains("restart")) {
      clearInterval(timer);
      stopwatch.innerHTML = "00:00:00";
      stopwatch.classList.remove("stop");
      seconds = 0;
    }

    if (element.classList.contains("start")) {
      stopwatch.classList.remove("stop");
      clearInterval(timer);
      startStopwatch();
    }

    if (element.classList.contains("pause")) {
      clearInterval(timer);
      stopwatch.classList.add("stop");
    }
  });

  /*
  
  start.addEventListener("click", function (event) {
    stopwatch.classList.remove("stop");
    clearInterval(timer);
    startStopwatch();
  }); 
  
  not performatic way to code
  
  */

  /*
  
  pause.addEventListener("click", function (event) {
    clearInterval(timer);
    stopwatch.classList.add("stop");
  }); 
  
  not performatic way to code
  
  */

  /*
  
  restart.addEventListener("click", function (event) {
    clearInterval(timer);
    stopwatch.innerHTML = "00:00:00";
    seconds = 0;
  });  
  
  not performatic way to code
  
  */
}

stopwatch();
