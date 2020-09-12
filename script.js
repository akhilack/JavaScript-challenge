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
