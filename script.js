// challenge 1

function ageInDays() {
    var birthYear=prompt('Which year were you born..?');
    var ageToDays=(2020-birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswer =document.createTextNode('You are '+ageToDays+' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').append(h1);

}
function reset() {
    document.getElementById('ageInDays').remove();
}
// challenge 2: cat generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="data:image/jpeg;base64,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";
    div.appendChild(image);
}


// challenge 3


function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice =yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice:', botChoice);

    results =decideWinner(humanChoice, botChoice);
    console.log(results);

    message =finalMessage(results);
    console.log(message)
    rpsfrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number) {
    return ['rock', 'paper','scissors'][number]
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase={
        'rock':{'scissors': 1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    };
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}
function finalMessage([yourScore ,computerScore]) {
    if (yourScore===0){
        return {'message': 'You lost!', 'color':'red'};
    }else if (yourScore === 0.5){
        return {'message': 'You tied!', 'color':'yellow'};
    }else{
        return {'message': 'You won!', 'color':'green'};
    }
}
function rpsfrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    // lets remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice] +"'height='150' width='150' style='box-shadow:0px 10px 50px rgba(37,50,233,1);' >"
    messageDiv.innerHTML="<h1 style='color: "+ finalMessage['color'] +"; font-size: 60px; padding: 30px;'>"+ finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='"+imagesDatabase[botImageChoice] +"'height='150' width='150' style='box-shadow:0px 10px 50px rgba(243,38,24,1);' >"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

//Challenge 4:Change the color of all Buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons=[];
for(let i=0;i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if (buttonThingy.value==='red'){
        buttonRed();
    }else if (buttonThingy.value==='green'){
        buttonGreen();
    }else if (buttonThingy.value==='reset'){
        buttonColorReset();
    }if (buttonThingy.value==='random'){
        buttonColors();
    }
}

function buttonRed(){
   for(let i=0; i<all_buttons.length; i++){
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add('btn-danger');
   }
}
function buttonGreen(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
 }

 function buttonColorReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
 }
}
function randomColors(){
    var choices = ['btn-primary', 'btn-danger','btn-success','btn-warning']
    for(let i=0; i<all_buttons.length; i++){
       var randonNumber=Math.floor(Math.random()*4)
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add(choices[randonNumber]);
    }
}