window.onload=()=>{
    
  let dicePointer = document.querySelector(".dicePointer")  
  let range = document.querySelector(".range")
    let fig = document.querySelector(".fig")
 let rollBtn = document.querySelector(".roll")
 let amount = document.querySelector(".amount")
    
    let rvalue = document.querySelector(".rvalue")
    let val = 100
    
    
    function checkAmt(){
        if( val > input.value){
            amount.innerHTML = val-= input.value
        }
        
    }
    
    function loadAmnt(){
       return amount.innerHTML = 100
        
    }
    loadAmnt()
    
            rollBtn.addEventListener("click",()=>{
         checkAmt()
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
