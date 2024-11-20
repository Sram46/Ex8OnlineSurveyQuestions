// Sample question collection
const questions = [
    "What is your favorite color?",
    "How many hours do you work each week?",
    "Do you prefer working from home or office?",
    "What's your favorite hobby?",
    "Which city do you live in?",
    "How many hours of sleep do you get daily?",
    "What is your favorite cuisine?",
    "Do you exercise regularly?",
    "How do you prefer to communicate: calls or messages?",
    "What’s your ideal vacation spot?"
  ];
  
  // Function to select 5 random questions
  function getRandomQuestions() {
    let selectedQuestions = [];
    while (selectedQuestions.length < 5) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      if (!selectedQuestions.includes(questions[randomIndex])) {
        selectedQuestions.push(questions[randomIndex]);
      }
    }
    return selectedQuestions;
  }
  
  // Render questions on the page
  function renderQuestions() {
    const questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = ""; // Clear any previous questions
    const selectedQuestions = getRandomQuestions();
  
    selectedQuestions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
  
      const label = document.createElement("label");
      label.textContent = question;
      label.htmlFor = `question-${index}`;
  
      const input = document.createElement("input");
      input.type = "text";
      input.id = `question-${index}`;
      input.name = `question-${index}`;
  
      questionDiv.appendChild(label);
      questionDiv.appendChild(input);
      questionContainer.appendChild(questionDiv);
    });
  }
  
  // Handle form submission
  document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const responses = Array.from(document.querySelectorAll("input")).map(input => input.value);
    document.getElementById("result").textContent = "Survey submitted successfully!";
    console.log("User Responses:", responses); // Log responses to console
  });
  
  // Initial load
  renderQuestions();
  