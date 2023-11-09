'use strict';
/*console.log(document.querySelector('.message').textContent); //Displays the content of the class message
document.querySelector('.message').textContent='Correct Number';
console.log(document.querySelector('.message').textContent); 
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);*/
let score=20;
let num= Math.trunc(Math.random()*20)+1;
// console.log(num);
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess);
    if(!guess) //initially guess empty hunxa tyo vaneko falsy value ho teslai true banauna ! use gareko
{
 document.querySelector('.message').textContent='No Number❌';
 
}
//WHEN PLAYER WINS
else if(guess===num)
{
    document.querySelector('.message').textContent='Correct Number🎉';
    document.querySelector('body').style.backgroundColor= 'green';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=num;
    if(score>highscore)
    {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }

}
//WHEN GUESS IS HIGH
else if(guess>num)
{
    if(score>0)
    {document.querySelector('.message').textContent='Number is high!';
    score--;
    document.querySelector('.score').textContent=score;}
 else
 {(document.querySelector('.message').textContent=`You've lost`);}

}
//WHEN GUESS IS LOW
else if(guess<num)
{
    if(score>0)

    {document.querySelector('.message').textContent='Number is Low!';
    score--;
    document.querySelector('.score').textContent=score;}
    else
    {(document.querySelector('.message').textContent=`You've lost`);}

    

    
}
})
document.querySelector('.again').addEventListener('click',function()
{
     score=20;
     num= Math.trunc(Math.random()*20)+1;
     document.querySelector('.number').style.width='15rem';
     document.querySelector('body').style.backgroundColor= '#222';
     document.querySelector('.number').textContent='?';
     document.querySelector('.guess').value=' ';
     document.querySelector('.message').textContent='Start guessing...';
     document.querySelector('.score').textContent=score;






})
