'use strict';
let gread=0;
let myname = prompt('What do you expect my Name  to be? is ayah! yes or no');
if(myname.toLowerCase() === 'yes')
{
  alert('yes you are right');
  console.log('yes my name is ayah');

  gread=gread+1;
}else
{
  alert('you are wrong');
}
let myAge=prompt('Do you think that I am over 50? yes or no');
if(myAge.toLowerCase() === 'no')
{
  alert('yes you are right');
  console.log('yas my age is 26');
  gread=gread+1;
}else
{
  alert('noooooooooo you are wrong');

}
let from=prompt('Where do you think I am from?maybe from Jordan n ,y');
if(from.toUpperCase() === 'Y')
{
  alert('yes that right');
  console.log('yes i am from jordan');
  gread=gread+1;
}else
{
  alert('you are wrong');
}
let major=prompt('Do you think that my major is Communications Engineering? yes ,no');
if(major.toUpperCase()=== 'YES')
{
  alert( major+' ,Wow you are good');
  console.log('yes I am communicatin engineer');
  gread=gread+1;
}else
{
  alert('you do not gat the right answer');
}
let time=prompt('Do you think that my graduated yere is 2017? y ,n');
if(time.toLowerCase() === 'y')
{
  alert( time +' yes you are corrict');
  console.log('yes I am graduated in 2017');
  gread=gread+1;
}else
{
  alert('no you are wrong');
}
let userName=prompt('you know about me this time I would know about you , First of all what your name?');
alert('Hi '+ userName);
alert(' wlecoam '+userName +' Thank you for using my web site');
alert('There is an additional question, prepare for it');
let guess=prompt('Choose a number between 1 - 100');
const ans = '50' ;
let a=1;
alert('remabre you have 4 efforts to guess true number this is : ' + a);
for (let i=1;i<5;i++)
{


  if (guess === ans)
  {
    alert('good ,50 is the righ ansawer');
    gread=gread+1;
    break ;
  }
  else if(guess > ans)
  {
    a=a+1;
    alert('too higt,Try again');
    alert(' this your effot have num ' + a);
    guess=prompt('Choose  agian number between 1 - 100 ');
    console.log(guess);


  }
  else{
    a=a+1;
    alert('too low,Try again');
    alert(' this your effot have num ' + a);
    let guess=prompt('Choose  agian number between 1 - 100 ' );
    console.log(guess);


  }
}

let color = prompt('We have another question, what do you think is my favorite color?');
alert('dont forget ,you have 6 time to choise corrict answer');

{ for (let i=2;i <= 7;i++)
  if(color !== 'red' && color !== 'green' && color !=='blue')
  {


    alert('try again , this affort have num: ' + i);
    color = prompt(' what do you think is my favorite color?');

  }else
  {
    alert('good ,the right answer');
    gread=gread+1;
    break;
  }
}
console.log(gread);
alert('your gread in this game is : '+ gread);
alert('Thank you for taking part in this game.');




















