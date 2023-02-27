let timeSecond = 60;

document.getElementById("attempt").addEventListener("click",startAttempt);

function startAttempt() {
	document.getElementById("time").style.position = "fixed";
	document.getElementById("time").style.margin = "10px 0px 0px 80px";
	document.getElementById("time").style.color = "blue";
	document.getElementById("container").style.display = "block";
	document.getElementById("attempt").style.display = "none";
	const countdown = setInterval (()=>{
		timeSecond--;
		document.getElementById("timer").innerHTML = timeSecond + " seconds";
		if (timeSecond == 0) {
			document.getElementById("submit").click();
		}
		if (timeSecond == 10) {
			document.getElementById("time").style.color = "red";
		}
	},1000)
}

function getRadioValue(radioArray) {
	for (let i = 0; i < radioArray.length; i++) {
		if (radioArray[i].checked) {
			return radioArray[i].value;
		}
	}
}

function submitAnswers(formRef) {

	document.getElementById("time").style.display = "none";		
	document.getElementById("submit").style.display = "none";	
	//getting the entered values
	const givenAns = [getRadioValue(formRef.q1answers), getRadioValue(formRef.q2answers), getRadioValue(formRef.q3answers), getRadioValue(formRef.q4answers), getRadioValue(formRef.q5answers), getRadioValue(formRef.q6answers), getRadioValue(formRef.q7answers), getRadioValue(formRef.q8answers), getRadioValue(formRef.q9answers), getRadioValue(formRef.q10answers)];

	//four arrays : for entered values, correct values, feedback and correct answers
	const correctAns = ["masks","galle","devon","gal-viharaya","minneriya","33","horton-plains","1,236","rajasinha","esala-perahera"];

	const correctAnswers = ["Masks","Galle","Devon","Gal-Viharaya Buddha Statue","Minneriya National Park","33","Horton-Plains Nuwara Eliya","1,236 Steps","King Sri Wickrama Rajasinha","Kandy Esala Perahara"];

	const feedbacks = ["feedback1","feedback2","feedback3","feedback4","feedback5","feedback6","feedback7","feedback8","feedback9","feedback10"];

	let count = 0;
	let marks = 0;

	for (let i = 0; i < correctAns.length; i++) {
		console.log("Given answer is " + givenAns[i] + " Correct Answer is " + correctAns[i]);
		if (givenAns[i] == correctAns[i]) {
			document.getElementById(feedbacks[i]).innerHTML =  "Question " + (i+1) +": Correct";
			console.log("correct");
			count++;
			marks+=2;
		} else {
			document.getElementById(feedbacks[i]).innerHTML =  "Question " + (i+1) +": Incorrect. Correct Answer: " + correctAnswers[i];
			marks-=1;
		}
	}

	if (count < 5) {
		document.body.style.backgroundColor = "#FF7979";
	} else if (count == 10) {
		document.body.style.backgroundColor = "#BB33FF";
	} else {
		document.body.style.backgroundColor = "#80EAFF";
	}

	let timeTaken = 60 - timeSecond;
	document.getElementById("results").style.display = "block";
	
	document.getElementById("summary").innerHTML = "<b>Summary</b>" +
	"<br>Marks: " + marks + 
	"<br>No. of correct answers: " + count + "/10" +
	"<br>Time Taken: " + (60 - timeSecond) + " seconds<br>";

	document.getElementById("attempt").removeEventListener("click",startAttempt);	
	document.getElementById("submit").removeEventListener("click",respondSubmit);
}

document.getElementById("submit").addEventListener("click", respondSubmit);

function respondSubmit(){
	submitAnswers(this.form);
}