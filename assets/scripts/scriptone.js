function numpress(character){
	firstcheck()
	var a=document.getElementById("txtbox").value
	a+=character
	document.getElementById("txtbox").value=a
}

function backspace(){
	firstcheck()
	var a=document.getElementById("txtbox").value
	a=a.slice(0,a.length-1)
	document.getElementById("txtbox").value=a
}

function find(){
	firstcheck()
	var a=document.getElementById("txtbox").value
	try{
		a=eval(a)
	}
	catch(SyntaxError){
		alert("Calculator wants to see your face")
	}
	document.getElementById("txtbox").value=a

}

function firstcheck(){
	var a=document.getElementById("txtbox").value
	if(a=="Made By Dhanush :)"){
		document.getElementById("txtbox").value="0"
	}
	
	console.log("runned")
}