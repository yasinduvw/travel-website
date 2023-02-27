document.getElementById("student1").addEventListener("mouseover",function(){
	document.getElementById("details").innerHTML="Dimuth Karunarathna, Student 1";	//displaying details
});
document.getElementById("student1").addEventListener("mouseleave",function(){
	document.getElementById("details").innerHTML="";	//removing the details dispalyed
});

document.getElementById("student2").addEventListener("mouseover",function(){
	document.getElementById("details").innerHTML="Nipun Chamika, Student 2";
});
document.getElementById("student2").addEventListener("mouseleave",function(){
	document.getElementById("details").innerHTML="";
});

document.getElementById("student3").addEventListener("mouseover",function(){
	document.getElementById("details").innerHTML="Yasindu Weerathunga, Student 3";
});
document.getElementById("student3").addEventListener("mouseleave",function(){
	document.getElementById("details").innerHTML="";
});

document.getElementById("student4").addEventListener("mouseover",function(){
	document.getElementById("details").innerHTML="Sanuri Perera, Student 4";
});
document.getElementById("student4").addEventListener("mouseleave",function(){
	document.getElementById("details").innerHTML="";
});