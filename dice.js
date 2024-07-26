window.onload=()=>{
    
  let dicePointer = document.querySelector(".dicePointer")  
    
 let rollBtn = document.querySelector(".roll")
    
    rollBtn.addEventListener("click",()=>{
        
        
    let randomNum = Math.floor(Math.random() * 100) 
    if(randomNum > 50){
    dicePointer.style.left = `${randomNum}%`
    }else {
    dicePointer.style.right = `${randomNum}%`
    }
    
    console.log(randomNum )
        
    })
    
    
    
}
