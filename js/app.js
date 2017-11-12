
td1 = document.getElementById("td1");
td2 = document.getElementById("td2");
td3 = document.getElementById("td3");
td4 = document.getElementById("td4");
td5 = document.getElementById("td5");
td6 = document.getElementById("td6");
td7 = document.getElementById("td7");
td8 = document.getElementById("td8");
td9 = document.getElementById("td9");

window.onload = function() {
  var board = document.querySelector('.board-js');

  board.addEventListener('click',addX);
};
var centinel = true;

function addX(event) {
  if(event.target.matches('td') && event.target.textContent === ''){
    if (centinel)
      event.target.textContent = 'X';
    else
      event.target.textContent = 'O';
    centinel = !centinel;
  }
}

function winer(event){
  if(td1 ==='X'&& td2 ==='X' && td3 === 'X'){
     var result = document.getElementTagName('td').innerHTML = 'Ganador: X ';
     alert ('gol');
  }
}
/*  else {

  }
}*/

//*console.log(winer());*/

  /*else {
    alert('JUEGA OTRA VEZ');
    setTimeout("location.href = location.href", 2000);
  };
}*/
