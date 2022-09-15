/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

let output = document.getElementById("output");
window.addEventListener("mousemove", (e) => {
  let xPos = e.clientX;
  let yPos = e.clientY;
  var coordinates = "X: " + xPos + " " + "Y: " + yPos;
  output.innerHTML = coordinates;
});

var elementList = document.querySelectorAll("div");
console.log(`${elementList.length} div elements making self portrait`);
