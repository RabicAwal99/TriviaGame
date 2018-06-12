var questionPos = 0;
var timeRemaining = 55;
var correct = 0;
var incorrect = 0;
var userChoice;
var incorrectAnswers = 0;
var correctAnswers = 0;
var choiceA;
var choiceB;
var choiceC;
var choiceD;

var questionArray = [{
    question: "which NFL QB has the most passing yards in the NFL history?",
    options: ["Peyton Manning", "Tom Brady", "Dan Marino", "Eli Manning"],
    answer: "A"
}, {
    question: "Which NFL WR has scored the most TDS in one season?",
    options: ["Jerry Rice", "Randy Moss", "T.O", "Calvin Johnson"],
    answer: "B"
}, {
    question: "Who won superbowl 50?",
    options: ["Patriots", "Broncos", "Vikings", "Cowboys"],
    answer: "B"
}, {
    question: "which NFL player is nick named super-freak?",
    options: ["Randy Moss", "Adrian Peterson", "Tom Brady", "Dez Bryant"],
    answer: "A"
}, {
    question: "Which NFL QB has thrown the most TDs in a single season?",
    options: ["Mike Vick", "Troy Aikman", "Teddy Bradshow", "Peyton Manning"],
    answer: "D"
}, {
    question: "Which NFL RB rushed the most TDs in a single seaon?",
    options: ["Shaun Alexandra", "Emmit Smith", "Adrian Peterson", "LT"],
    answer: "D"
}, {
    question: "which NFL defense team are nicked named legion of boom?",
    options: ["Raiders", "Stealers", "Vikings", "Seahawks"],
    answer: "D"
}, {
    question: "What NFL player was send to prison for dog fighting?",
    options: ["TO", "Ray Lewis", "Mike Vick", "Lary Fitzgerald"],
    answer: "C"
}
];

$(document).ready(function () {

    $("#start").on("click", function () {
        $(this).hide();
        timer();
        counter = setInterval(timer, 1000);
        displayTrivia();
        checkAnswer();
        reset();
    });

    function displayTrivia() {
        if (questionPos === questionArray.length) {
            $(".time").hide();
            $("#q1").hide();
            $("#q2").hide();
            $("#q3").hide();
            $("#q4").hide();
            $("#submit").hide();
            $(".questions").hide();
            $("#correct").html("Correct Answers: " + correctAnswers);
            $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
            $("#startOver").html("<input type='submit'>")

        }
        for (let i = 0; i < questionArray.length; i++) {
            console.log(questionArray[questionPos].question);
            questionQuestion = questionArray[questionPos].question.toString();
            questionAnswer = questionArray[questionPos].options;
            answerAnswer = questionArray[questionPos].answer;

            choiceA = questionAnswer[0];
            choiceB = questionAnswer[1];
            choiceC = questionAnswer[2];
            choiceD = questionAnswer[3];

            $(".questions").html("<h3>" + questionQuestion + "</h3>")
            $("#q1").html("<input type='radio' name = 'choices' value='A'> " + choiceA + "<br>");
            $("#q2").html("<input type='radio' name = 'choices' value='B'> " + choiceB + "<br>");
            $("#q3").html("<input type='radio' name = 'choices' value='C'> " + choiceC + "<br>");
            $("#q4").html("<input type='radio' name = 'choices' value='D'> " + choiceD + "<br>");
            $("#submit").html("<input type='submit'>")
        }
    };

    function checkAnswer() {
        $("#submit").on("click", function () {
            choices = document.getElementsByName("choices");
            for (j = 0; j < choices.length; j++)
                if (choices[j].checked) {
                    choice = choices[j].value;
                }
            console.log(choice);
            if (choice === answerAnswer) {

                correctAnswers++;
                questionPos++;
                displayTrivia();
                console.log("Correct Answers: " + correctAnswers);

            } else {

                incorrectAnswers++;
                questionPos++;
                displayTrivia();
                console.log("Incorrect Answers: " + incorrectAnswers);

            }
        });
    }

    function timer() {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            $(".time").hide();
            $("#q1").hide();
            $("#q2").hide();
            $("#q3").hide();
            $("#q4").hide();
            $("#submit").hide();
            $(".questions").hide();
            $("#correct").html("Correct Answers: " + correctAnswers);
            $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
            $("#startOver").html("Start Over")

            return;
        }
        $(".time").text("Time Remaining: " + timeRemaining + " secs");
    };

    function reset() {

        $("#startOver").on("click", function () {

            timeRemaining =55;
            questionPos = 0;
            correctAnswers = 0;
            incorrectAnswers = 0;
            displayTrivia();
            checkAnswer();
            timer();
        });

    }

});
