/*
const sayHello = () =>{
    console.log('Hello, World!');
}
    document.getElementById("btn-click").onclick=sayHello;

*/
document.getElementById("btn-click-me").onclick = (event)=> {
    document.getElementById("p-welcome").innerHTML = "Hello, World!";
    //document.getElementById("btn-click-me").classList.add("clicked");
    event.currentTarget.classList.add("clicked"); //currrent target is the button clicked 
}

document.getElementById("btn-happy").onclick = () => {
    const pFeeling = document.getElementById("p-welcome");
    pFeeling.innerHTML = "I am happy!";
    pFeeling.classList.remove("sad");
    pFeeling.classList.add("happy");
}

document.getElementById("btn-sad").onclick = () => {
    const pFeeling = document.getElementById("p-welcome");
    pFeeling.innerHTML = "I am sad!";
    pFeeling.classList.remove("sad");
    pFeeling.classList.add("happy");
}

document.getElementById("txt-emotion").onekeyup=(event)=>{
    const userInput= event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML=`you are feeling ${userInput}.`
    document.getElementById("img-emotion").classList.remove("hide");
}

/*counter*/ 
let counter=0;
