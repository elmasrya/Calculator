var calBtn = document.getElementById('calculateBtn');
var addBtn = document.getElementById('button1');
var subBtn = document.getElementById('button2');
var mltBtn = document.getElementById('button3');
var divBtn = document.getElementById('button4');
var num1 = document.getElementById('num_one');
var num2 = document.getElementById('num_two');
var ans = document.getElementById('answer');
var operation=document.getElementById('sign');
var solution;

addBtn.onclick = function() {
  operation.innerHTML="+";
};



subBtn.onclick = function() {
  operation.innerHTML="-";
};

mltBtn.onclick = function() {
  operation.innerHTML="*";
};

divBtn.onclick = function() {
  operation.innerHTML="/";
};



calBtn.onclick = function() {
  if(operation.innerHTML==="+"){
  solution = parseInt(num1.value) + parseInt(num2.value);
  ans.innerHTML = solution;
  }

  if(operation.innerHTML==="-"){
  solution = parseInt(num1.value) - parseInt(num2.value);
  ans.innerHTML = solution;
  }

  if(operation.innerHTML==="*"){
  solution = parseInt(num1.value) * parseInt(num2.value);
  ans.innerHTML = solution;
  }

  if(operation.innerHTML==="/"){
  solution = parseInt(num1.value) / parseInt(num2.value);
  ans.innerHTML = solution;
  }

};
