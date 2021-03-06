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
            correctAnswer: "b"
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
            question: "In Star Wars lore, what powers a lightsaber and gives it it's distintive color?",
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

    function initializeScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Click Button to Start Quiz</a></p>";
        $("#quiz").html(startScreen);
        $("#submit").hide();
    }

    initializeScreen();


    $("body").on("click", ".start-button", function (event) {
        generateQuiz(myQuestions, quizContainer, resultsContainer);
        timerRun();
        $("#submit").show();
    });

    function generateQuiz(questions, quizContainer, resultsContainer) {

        function showQuestions(questions, quizContainer) {

            var output = [];
            var answers;

            for (var i = 0; i < questions.length; i++) {

                answers = [];

                for (letter in questions[i].answers) {

                    //radio buttons
                    answers.push(
                        '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                        + letter + ': '
                        + questions[i].answers[letter]
                        + '</label>'
                    );
                }

                output.push(
                    '<div class="question">' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
                );
            }

            quizContainer.innerHTML = output.join('');
        }
        showQuestions(questions, quizContainer);


        function showResults(questions, quizContainer, resultsContainer) {

            var answerContainers = quizContainer.querySelectorAll('.answers');
            var userAnswer = '';
            var numCorrect = 0;

            for (var i = 0; i < questions.length; i++) {

                userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

                if (userAnswer === questions[i].correctAnswer) {

                    numCorrect++;
                }

            }

            resultsContainer.innerHTML = 'You got ' + numCorrect + ' out of ' + questions.length + ' correct answers!';

            function resultScreen() {
                resultsScreen = resultsContainer
                $("#quiz").html(resultsScreen);
                $("#results").addClass("blue")
            }

            resultScreen();
            $("#submit").hide();


        }

        $("#submit").on("click", function () {
            showResults(questions, quizContainer, resultsContainer);
            $("#timer").hide();
        })



    }



    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');





});

function timerRun() {
    var number = 60;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        number--;

        $("#timer").html("<h2>" + number + "</h2>");

        if (number === 0) {
            stop();
            
        }
        
        
    }
    
    function stop() {

        clearInterval(intervalId);
    }
    run();

    $("#submit").on("click", stop);
};

//Did not get code written to go to results screen when timer hits 0.
