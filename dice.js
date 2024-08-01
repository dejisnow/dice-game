window.onload=()=>{
    
  let dicePointer = document.querySelector(".dicePointer")  
  let range = document.querySelector(".range")
    let fig = document.querySelector(".fig")
 let rollBtn = document.querySelector(".roll")
    
    let rvalue = document.querySelector(".rvalue")
    
            rollBtn.addEventListener("click",()=>{
         
    let randomNum = Math.floor(Math.random() * 100) 
    fig.innerHTML = randomNum 
    dicePointer.style.left = `${randomNum}%`
    
    rvalue.innerHTML = range.value
    if(range.value < randomNum){
        console.log("you win")
    }else{
        console.log("you lose")
    }
    })
  
    
    
}
