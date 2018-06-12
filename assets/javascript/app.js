$(document).ready(function () {

    var myQuestions = [
        {
            question: "What makes time-travel possible in the movie Back to the Future?",
            answers: {
                a: "Faux Capacitor",
                b: "Flux Capacitor",
                c: "Phlem Capacitor",
                d: "Full Capacitor"
            },
            correctAnswer: "c"
        },
        {
            question: "Who is the blonde hero who will &#34;save everyone of us&#34;",
            answers: {
                a: "Hash Smokem",
                b: "Mash Floorman",
                c: "Flash Gordon",
                d: "Dash Gordmans"
            },
            correctAnswer: "c"
        },
        {
            question: "In Star Wars lore, what powers a lightsaber and gives it a distintive color?",
            answers: {
                a: "D Battery",
                b: "Bug Zapper",
                c: "Red Bull",
                d: "Kyber Crystal"
            },
            correctAnswer: "d"
        },
        {
            question: "What was the name of the character played by John Candy in Spaceballs?",
            answers: {
                a: "Darth",
                b: "Barf",
                c: "Dark Helmet",
                d: "Sloth"
            },
            correctAnswer: "b"
        },
        {
            question: "Doctor Who travels in a blue police box called a TARDIS which stands for what?",
            answers: {
                a: "Torrid Andromeda Romulan Ducati Integer Specific",
                b: "Tracking Around Regions Declared In Space",
                c: "Tacos Are Really Dumb I Say",
                d: "Time And Relative Dimensions In Space"
            },
            correctAnswer: "d"
        },
        {
            question: "Cylons are the bad guys in what television series?",
            answers: {
                a: "The Million Dollar Man",
                b: "Battlestar Galactica",
                c: "Mork and Mindy",
                d: "Battleship Uranus"
            },
            correctAnswer: "b"
        },
        {
            question: "In Ray Bradburys classic novel, paper bursts into flames at what&#34;Fahrenheit ________&#34; temperature?",
            answers: {
                a: "451&#186;",
                b: "215&#186;",
                c: "100&#186;",
                d: "1000&#186;"
            },
            correctAnswer: "a"
        },
        {
            question: "In which 1990 sci-fi movie did we see Kevin Bacon being terrorized by gigantic, hungry worms?",
            answers: {
                a: "Slither",
                b: "Feast",
                c: "What Waits Below",
                d: "Tremors"
            },
            correctAnswer: "d"
        },
        {
            question: "In the classic sci-fi film &#34;2001-A Space Odyssey,&#34; what did the computer HAL find out was to happen by reading Bowman and Pool&#39s lips?",
            answers: {
                a: "The were abandoning the ship",
                b: "He was being disconnected",
                c: "They were returning to Earth",
                d: "Ship was going to explode"
            },
            correctAnswer: "b"
        },
        {
            question: "Ellen Ripley had to fight off what terrifying creature in the &#34;Alien&#34; movie films?",
            answers: {
                a: "X-men",
                b: "Tribble",
                c: "Xenomorph",
                d: "Jack Russell Terrier"
            },
            correctAnswer: "c"
        },
    ];
    function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

        function showQuestions(questions, quizContainer) {
            // we'll need a place to store the output and the answer choices
            var output = [];
            var answers;

            // for each question...
            for (var i = 0; i < questions.length; i++) {

                // first reset the list of answers
                answers = [];

                // for each available answer to this question...
                for (letter in questions[i].answers) {

                    // ...add an html radio button
                    answers.push(
                        '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                        + letter + ': '
                        + questions[i].answers[letter]
                        + '</label>'
                    );
                }

                // add this question and its answers to the output
                output.push(
                    '<div class="question">' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
                );
            }

            // finally combine our output list into one string of html and put it on the page
            quizContainer.innerHTML = output.join('');
        }
        showQuestions(questions, quizContainer);

        function showResults(questions, quizContainer, resultsContainer) {

            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');

            // keep track of user's answers
            var userAnswer = '';
            var numCorrect = 0;

            // for each question...
            for (var i = 0; i < questions.length; i++) {

                // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

                // if answer is correct
                if (userAnswer === questions[i].correctAnswer) {
                    // add to the number of correct answers
                    numCorrect++;

                    // color the answers green
                    answerContainers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else {
                    // color the answers red
                    answerContainers[i].style.color = 'red';
                }
            }

            // show number of correct answers out of total
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }
        // on submit, show results
        submitButton.onclick = function () {
            showResults(questions, quizContainer, resultsContainer);
        }

    }


    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);










});
