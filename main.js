function onload () {
    let button = document.getElementById("myButton")
    function onclick() {
     button.innerHTML = "Hi!"   
    }

    button.addEventListener('Hi', onclick)
}

window.onload(onload)

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
}

let btn = document.querySelector('#btn');

  btn.onclick = (event) => {
      console.log('clicked');
  };

