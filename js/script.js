var countsNo = 0;
var timerFunc;

function finalMessage(){
    document.getElementById("reply").innerHTML = "Responde no Instagram, não tenho retorno das respostas desse site &#128517;";
}

function checkCount(){
    countsNo++;
    if(countsNo <= 3){
        window.document.getElementById("emoji" + countsNo).style.display = 'inline-block';
        document.getElementById("reply").innerHTML = " ";
    }else{
        document.getElementById("reply").innerHTML = "Tudo bem :)";
    }
    window.document.getElementById("heart").style.display = 'none';
    clearTimeout(timerFunc);
}

function replyYes(){
    countsNo = 0;
    for(let i=1; i <= 3; i++){
        window.document.getElementById("emoji" + i).style.display = 'none';
    }
    window.document.getElementById("heart").style.display = 'inline-block';
    document.getElementById("reply").innerHTML = "Serio? <3";
    timerFunc = setTimeout(finalMessage, 5000);
}