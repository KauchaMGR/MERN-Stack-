//call back function

function eat(){
    console.log("what to eat");
}

function go(callback){
    console.log("where to go?");
    callback();// at first this get executed

}

go(eat);
