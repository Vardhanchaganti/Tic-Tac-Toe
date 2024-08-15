let buttons= document.querySelectorAll(".v_btn");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".new");
let vturn=true;
let wpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;
let msg=document.querySelector("#winner");
let msgcontainer=document.querySelector(".msg");

const disable=()=>{
    buttons.forEach(
        (button)=>{
            button.disabled=true;
        }
    )
}


const newgames=()=>{
    msgcontainer.classList.add('hide');
    vturn=true;
    count=0;
    for(let button of buttons){ 
        button.disabled=false;
        button.innerText="";
        button.style.backgroundColor="peachpuff";
    }
}

const showwinner =(winner)=>{
    // var additionalString = "Congratulations the winner is ";
    // msg.innerText=additionalString+winner+"👑"+`$`;
    msg.innerText=`Congarts The winner is ${winner} 👑`;
    msgcontainer.classList.remove("hide");
    for(let button in buttons){
        button.disabled=true;
    }
}

const check =()=>{
    for( let pattern of wpatterns){
        let value1 = buttons[pattern[0]].innerText;
        let value2 = buttons[pattern[1]].innerText;
        let value3 = buttons[pattern[2]].innerText;
        if(value1!=""&&value2!=""&&value3!=""){
            if(value1===value2&&value2===value3){
                console.log("Winner is "+value1);
                console.log(buttons[pattern[0]]);
                console.log(buttons[pattern[1]]);
                buttons[pattern[0]].style.backgroundColor="green ";
                buttons[pattern[1]].style.backgroundColor="green ";
                buttons[pattern[2]].style.backgroundColor="green ";
                disable();
                showwinner(value1);
                return true;
            }
        }
    }
}

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(vturn){
            // console.log("box was clicked");
            button.innerText="V";
            button.disabled=true;
            button.backgroundColor="black";
            vturn=false;
            count++;
            //console.log(count);
        }
        else{
            button.innerText="I";
            button.disabled=true;
            vturn=true;
            count++;
            //console.log(count);
        }
        let winner=check();
        if(count==9 && !winner){
                gamedraw();
            }
        }
    )
}
)

let gamedraw=()=>{
    msg.innerText="Match drawn 🤝 Please Play A New Game or Reset Game ";
    msgcontainer.classList.remove("hide");
    for(button in buttons){
        button.disabled=true;
    }
}

newgame.addEventListener("click",newgames);
reset.addEventListener("click",newgames);