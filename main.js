let state = false

function ligarLampada(){
  let lampada = document.getElementById(`lampada`)
  
  if(state == false){
    lampada.src = "assets/on.jpg"
    state = true
  } else if (state == true){
    lampada.src = "assets/off.jpg"
    state = false
  }
  
  
}