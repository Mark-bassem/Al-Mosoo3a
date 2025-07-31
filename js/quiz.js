let currentIndex = 0;
let questions = [];
let score = 0;
let total = 0;

const questionBox = document.getElementById("question-box");
const resultBox = document.getElementById("result-box");

function showQuestion() {
  if (currentIndex < questions.length) {
    const q = questions[currentIndex];
    total = q.total || 1;

    // عرض السؤال فقط داخل questionBox
    questionBox.innerHTML = `
      <div class="card">
        <h3>${q.question}</h3>
      </div>
    `;

    // عرض الاختيارات فقط داخل choices
    choices.innerHTML = q.options.map((opt, i) => `
      <button onclick="checkAnswer(${i})">${opt}</button>
    `).join("");

  } else {
    saveScore();
    questionBox.innerHTML = "";
    choices.innerHTML = "";
    resultBox.innerHTML = `<div class="card">لقد أنهيت الاختبار! نتيجتك: ${score} / ${questions.length}</div>`;
  }
}


function checkAnswer(index) {
  const correct = questions[currentIndex].answer;
  if (index === correct) score++;
  currentIndex++;
  showQuestion();
}

function saveScore() {
  const user = auth.currentUser;
  if (user) {
    db.ref("leaderboard").push({
      name: user.email.split("@")[0],
      score,
      total: questions.length,
      date: new Date().toLocaleDateString()
    });
  }
}

db.ref("riddles").once("value", (snap) => {
  const data = snap.val();
  questions = Object.values(data || {});
  questions = questions.sort(() => 0.5 - Math.random());
  showQuestion();
});