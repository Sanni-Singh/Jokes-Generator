let textFeild = document.querySelector('.text')
let nextJoke = document.querySelector('.next')
let chngeMode = document.querySelector('.mode')
async function apiHolder() {
    textFeild.innerText="Loading...";
    let data = await fetch('https://v2.jokeapi.dev/joke/Dark');
    let res = await data.json();
    console.log(res);
    
    textFeild.innerText="";
    textFeild.innerText=res.setup;
    console.log();
}

window.addEventListener('load',apiHolder);
nextJoke.addEventListener('click',apiHolder)