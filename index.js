

let countEl 
let count=0

countEl = document.getElementById("count_el") 

// increment()
function increment() {
    count += 1
    countEl.innerText = count
}



 let saveEL = document.getElementById("save_El")


function save(){
    let countStr = count + " - "
    saveEL.textContent += countStr
    console.log(countStr)
    count=0
    countEl.innerText = count
    
}

