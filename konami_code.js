const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

/*function keymap(key){
  switch (key) {
  case "ArrowUp": return 38
  case "ArrowDoen": return 40
  case "ArrowRight":return 39
  case "ArrowLeft": return 37
  default: return 0
  }
}*/

let keyseq=0
function init() {// your code here
  document.body.addEvenListener('keydown',konami)
}

 function konami(e){
   if (e.key === codes[keyseq]){
     alert(e.key)
     keyseq++
     if (keyseq === codes.length){
       alert("congratulations!")
       keyseq=0
      }
     } else keyseq=0
   }
