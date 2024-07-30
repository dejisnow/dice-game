window.onload=()=>{
    
  let dicePointer = document.querySelector(".dicePointer")  
  let range = document.querySelector(".range")
    let fig = document.querySelector(".fig")
 let rollBtn = document.querySelector(".roll")
    
    
    
            rollBtn.addEventListener("click",()=>{
         
    let randomNum = Math.floor(Math.random() * 100) 
    fig.innerHTML = randomNum 
    dicePointer.style.left = `${randomNum}%`
    
    if(range.value < randomNum){
        console.log("you lose")
    }else{
        console.log("you win")
    }
    })
  
    
    
}
