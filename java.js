document.addEventListener("DOMContentLoaded", function () {
    const quizData = [
        { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
        { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
        { question: "What is the color of the sky?", options: ["Green", "Blue", "Red", "Yellow"], answer: "Blue" }
        // { question: "What is my name?", options: ["Abhi", "Abhishek", "Dishu", "Disha"], answer: "Dishu"}
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");
    const resultEl = document.getElementById("result");

    function loadQuestion() {
        resetState();
        const currentQuestion = quizData[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsEl.appendChild(button);
        });
    }

    function resetState() {
        optionsEl.innerHTML = "";
        resultEl.textContent = "";
        nextBtn.style.display = "none";
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = quizData[currentQuestionIndex].answer;
        if (selectedOption === correctAnswer) {
            score++;
        }
        resultEl.textContent = `Correct Answer: ${correctAnswer}`;
        nextBtn.style.display = "block";
    }

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            displayScore();
        }
    });

    function displayScore() {
        questionEl.textContent = `Quiz Completed!`;
        optionsEl.innerHTML = `Your score: ${score} / ${quizData.length}`;
        nextBtn.style.display = "none";
    }

    loadQuestion();
});
