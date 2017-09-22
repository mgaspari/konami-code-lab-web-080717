const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let userIn = []
let c = 0
function init() {
  // Write your JavaScript code inside the init() function
const body = document.querySelector("body")

body.addEventListener('keydown', function(e){
  userIn.push(e.which)

  if (code[c] !== userIn[c]){
    c = 0
    userIn = []
  }
  else{
    c += 1
  }
  if (userIn.length === code.length){
    alert("Congrats")
    c = 0
    userIn = []
  }
})

}
