let userscore=0;
let compscore=0;
const choices =document.querySelectorAll(".choice"
)
const msg = document.querySelector("#msg")
const userscorepa = document.querySelector("#you")
const compscorepa = document.querySelector("#comp")
const gencomchoice=()=>{
    const options = ["rock","paper","scissor"]
    const randix=Math.floor(Math.random()*3);
    return options[randix]
}
const drawgame=()=>{
     console.log("game was draw")
     msg.innerText="game was draw"
     msg.style.backgroundColor="green"
}
const showwinner=(userwin,choiceid,compchoice)=>{
    if(userwin){
        userscore++
        userscorepa.innerText=userscore
        console.log("you won")
        userscorepa
        msg.innerText=`you win!,your ${choiceid} beats ${compchoice}`
        msg.style.backgroundColor ="yellow"
        msg.style.color = "black"


    }else{
        console.log("you loose")

        compscore++
        compscorepa.innerText=compscore
        msg.innerText=`Computer win!,${compchoice} beats your ${choiceid}`
        msg.style.backgroundColor ="red"
    }
}
const playgame=(choiceid)=>{
    console.log("user choice=",choiceid);
    //generate computers choice
    const compchoice=gencomchoice()
    console.log("comp choice=",compchoice)
    if(choiceid===compchoice){
        drawgame();

    }
    else{
        let userwin=true;
        if(choiceid==="rock"){
            userwin = compchoice==="paper"? false: true;
            
        }
        else if(choiceid==="paper") {
            userwin = compchoice==="scissor"?false:true;

        }
        else{
            userwin= compchoice==="rock"?false:true;
        }
        showwinner(userwin,choiceid,compchoice)
    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceid =choice.getAttribute("id")
        // console.log("choice was clicked",choiceid)
        playgame(choiceid)
    })
})
