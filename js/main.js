//make an array of objects that have questions and the correct answers
var questions = [
	{
		question:"What is the name of the Governor's daughter",
		answer:"penny"
	},
	{
		question:"What did Andrea and Merele have in common at Woodbury",
		answer:"they were both abandoned by rick's group"
	},
	{
		question:"How long had the group gone without an accident in the Season 4 premiere",
		answer:"30 days"
	},
	{
		question:"What does hallucination Lori like to wear",
		answer:"a white dress"
	},
	{
		question:"Who claims he's worked on the Human Genome Project",
		answer:"eugene"
	},
	{
		question:"Who gives Carol a cherokee rose",
		answer:"daryll"
	},
	{
		question:"Where does Hershel go after the barn massacre",
		answer:"a bar"
	}
]

//check each object in the array(var questions) and change the question object to question1-7:
for (i = 0; i < questions.length; i++) {
	//go down the question list and add the number value that matches the questio list in the html
	qNum = questions[i].question
	//get the text content for each question 1-7:
	document.getElementById('question' + [i]).textContent = qNum
}

//write a function that returns the correct answers and changes the property of the questions
function seeResults() {
	//set the values of correct and wrong to 0
	var correct = 0;
	var wrong = 0;
	//write a for loop that increments up from question0 and count how many answers in the questions object array were correct or wrong
	for(i = 0; i < questions.length; i++) {	
		//state the answer in the list as a variable and go down the list
		var answer = questions[i].answer
		//retrieve the value of the user's input
		var userGuess = document.getElementById('answer' + [i]).value.toLowerCase()
		//check to see if the answer matches the question
		var questionColor = document.getElementById('question' + [i])
		//if the answer matches the userGuess and goes with the corresponding question, mark as correct and change the color to green
		if(answer == userGuess) {
			//add the class of wwrong that changes the questions that were right to green
			questionColor.className += 'correct'
			//move cown the list to add any other correct userGuess(s)
			correct++
		//otherwise if the answer doesnt match the userGuess, mark as wrong and change the question to red
		} else {
			//add the class of wwrong that changes the questions that were wrong to red
			questionColor.className += 'wrong'
			//move down the list and count how many wrong answers there were
			wrong++
		}
	}

	//add the number value of the correct answers to the result-output div
	document.getElementById('correct').textContent =  "Correct: " + correct
	document.getElementById('wrong').textContent =  "Wrong: " + wrong
}
