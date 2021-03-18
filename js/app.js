'use strict';
let gread=0;

function coderName(){
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
}
coderName();
function coderAge(){
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
}
coderAge();
function coderCountry(){
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
}
coderCountry();

function coderField(){
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
}
coderField();
function coderYearGraduate(){
  let time=prompt('Do you think that my graduated yere is 2017? y ,n');
  if(time.toLowerCase() === 'y')
  {
    alert( time +' yes you are correct');
    console.log('yes I am graduated in 2017');
    gread=gread+1;
  }else
  {
    alert('no you are wrong');
  }
}
coderYearGraduate();

function quizGame(){

  let num=50;
  let a=1;
  for (let i=1;i<5;i++)
  {let guess=Number( prompt('Choose a number between 1 - 100'));

    if (guess < num)
    {a=a+1;
      alert('too low, Try again');
      alert(' this your effot have num ' + a);

      console.log(guess);

    }else if ( guess > 50){


      a=a+1;
      alert('too hight,Try again');
      alert(' this your effot have num ' + a);

      console.log(guess);
    }
    else{
      alert('good ,50 is the right answer');
      gread=gread+1;
      break ;

    }
  }
  alert('the correct answer to this question is 50 ,thank you for all .');
}
quizGame();
function colorGame(){

  let favcolor=['red','green','blue'];
  let ans=false;
  for(let i =1;i<=6;i++){
    let color = prompt(' what do you think is my favorite color?');
    alert('dont forget ,you have 6 time to choise corrict answer'+ i);
    { for (let i=0;i <favcolor.length;i++)
      if(favcolor===color[i])
      { alert('good ,the right answer');
        ans=true;
        gread=gread+1;

        break;
      }
    }

    if (ans===true)
    {
      break;
    }
  }









  console.log(gread);
  alert('your gread in this game is : '+ gread);
  alert('Thank you for taking part in this game.');
}

colorGame();































