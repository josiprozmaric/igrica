// var loop = document.getElementsByTagName('button')[0]

// loop.addEventListener('click',info)

// function info(e){
// e.preventDefault() //ukinuti default ponasanje
// console.log(e)

// }

// var links = document.getElementsByTagName('a')
// for(var i =0; i<links.length; i++){
// links[0].addEventListener('click',stoplinks)
// }

// function stoplinks(e){

// 	e.preventDefault()
// }


// var box = document.getElementsByClassName('box')[0]
// box.addEventListener('click',colorme)

// function colorme(e){
// console.log(e)
// 	// box.style.background ='tomato'

// 	if(e.altKey == true){
// 	box.style.background ='yellow'
// 	}else{

// 			box.style.background ='tomato'
// 	}
// }


var box = document.getElementById('player1');
var box2 = document.getElementById('player2');
var box3 = document.getElementById('ukupni rezultat');
var box6 = document.getElementById('runda') ;
var box5 = document.getElementById('pobjednik je');

var bacanje1 = 0;
var bacanje2 = 0;



 box.addEventListener('click',player1game)



function player1game(){


 var kockica1 = Math.ceil(Math.random()*6)
bacanje1 = bacanje1 + kockica1



 

box6.innerText = 'igrac 1 je bacio kocku' 


box.innerHTML = bacanje1

 box3.innerHTML = bacanje1 + ' : ' + bacanje2 + ' je rezultat'

if(box.innerHTML = bacanje1){
box.style.background = 'red'

box6.style.background = 'red'
}


box.removeEventListener('click',player1game)
}



window.addEventListener('keyup',player2game)

function player2game(){

 var kockica2 = Math.ceil(Math.random()*6)
 bacanje2 = bacanje2 + kockica2
 box6.innerText = 'drugi igrac je bacio kocku' 
box2.innerHTML = bacanje2;
box3.innerHTML = bacanje1 + ' : ' + bacanje2 + ' je zavrsilo'

if(box2.innerHTML = bacanje2){

	box2.style.background = 'orange'
	box3.style.background = 'green'
	box6.style.background = 'orange'

}
if(box.innerHTML > box2.innerHTML){

box5.innerText = 'igrac 1 je pobijedio'
box5.style.background = 'red'
}
if(box.innerHTML < box2.innerHTML){

box5.innerText = 'igrac 2 je pobijedio'
box5.style.background = 'orange'
}

if(box.innerHTML == box2.innerHTML){

box5.innerText = 'nerijeseno'
box5.style.background = 'green'
}
 window.removeEventListener('keyup',player2game)
		


}





