function display(val){
	document.getElementById('result').value += val;
}

function result(){
	var inputValue = document.getElementById('result').value;
	var finalResult = eval(inputValue);
	var output = document.getElementById('result').value = finalResult;
}

function erase(){
	var output = document.getElementById('result').value = '';
}

function sqrt(){
	var inputValue = document.getElementById('result').value;
	var finalResult = Math.sqrt(inputValue);
	var output = document.getElementById('result').value = finalResult;
}
