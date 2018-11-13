var divContainer = window.document.querySelector('.container');
var textCalcP = divContainer.querySelector('.textCalcP');
var butC = divContainer.querySelector('.butC');
var butAdd = divContainer.querySelector('.butAdd');
var butSub = divContainer.querySelector('.butSub');
var butDiv = divContainer.querySelector('.butDiv');
var butMul = divContainer.querySelector('.butMul');
var butDot = divContainer.querySelector('.butDot');
var butRaw = divContainer.querySelector('.butRaw');
var but1 = divContainer.querySelector('.but1');
var but2 = divContainer.querySelector('.but2');
var but3 = divContainer.querySelector('.but3');
var but4 = divContainer.querySelector('.but4');
var but5 = divContainer.querySelector('.but5');
var but6 = divContainer.querySelector('.but6');
var but7 = divContainer.querySelector('.but7');
var but8 = divContainer.querySelector('.but8');
var but9 = divContainer.querySelector('.but9');
var but0 = divContainer.querySelector('.but0');
var textJournal = divContainer.querySelector('.bodyJournal');

var funcC = function() {  
    if ( textCalcP.textContent !== '0'){
        textCalcP.textContent = '0';
    };
};

var funcButtonsNumber = function(){ 
    if (textCalcP.textContent !== "0"){
        textCalcP.textContent += this.textContent.trim();
    } else{
        textCalcP.textContent = this.textContent.trim();
    }
};

var funcButtons = function(){ 
    textCalcP.textContent += this.textContent;   
};

var funcRaw = function(){
    var str = textCalcP.textContent;
    textCalcP.textContent = "0";
    var newTextJournal = document.createElement('div');
    textJournal.appendChild(newTextJournal);
    newTextJournal.appendChild(document.createTextNode(str + " = " + eval(str)));
    /*textCalcP.textContent=newTextJournal.appendChild(document.createTextNode(eval(str))); */      // [ObjectText]
};

but1.addEventListener('click', funcButtonsNumber);
but2.addEventListener('click', funcButtonsNumber);
but3.addEventListener('click', funcButtonsNumber);
but4.addEventListener('click', funcButtonsNumber);
but5.addEventListener('click', funcButtonsNumber);
but6.addEventListener('click', funcButtonsNumber);
but7.addEventListener('click', funcButtonsNumber);
but8.addEventListener('click', funcButtonsNumber);
but9.addEventListener('click', funcButtonsNumber);
but0.addEventListener('click', funcButtonsNumber);
butAdd.addEventListener('click', funcButtons);
butSub.addEventListener('click', funcButtons);
butDiv.addEventListener('click', funcButtons);
butMul.addEventListener('click', funcButtons);
butC.addEventListener('click', funcC);
butDot.addEventListener('click', funcButtonsNumber);
butRaw.addEventListener('click', funcRaw);
