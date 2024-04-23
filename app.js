const btn = document.querySelector(".button") ;
const textNode = document.querySelector(".advice-text").firstElementChild.firstElementChild
const titleNode = document.querySelector(".adviceId")

textNode.innerHTML = `Click on the button`

btn.addEventListener("click",()=>{


const url = "https://api.adviceslip.com/advice"
    fetch(url)
    .then((res)=>res.json()) 
    .then((res)=> {
        textNode.innerHTML = res.slip.advice ;
        titleNode.innerHTML = String(res.slip.id) ;
    })
    

})





//     const getTodo = ()=>{
//     const https = new XMLHttpRequest() ;
//     https.open("Get",url,true)
//     https.send()

//     https.onreadystatechange = (e)=> {

//         if(e.target.status === 200  && e.target.readyState === 4)
//         {
//         const obj = JSON.parse((e.target.response)) ; 
//         textNode.innerHTML = obj.slip.advice ;
       
//         titleNode.innerHTML = String(obj.slip.id) ;
//         }
       
//     }
// }

// getTodo()













