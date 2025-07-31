const addForm = document.getElementById("add-form");

if (addForm) {
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const question = document.getElementById("question").value.trim();
    const options = [
      document.getElementById("opt1").value.trim(),
      document.getElementById("opt2").value.trim(),
      document.getElementById("opt3").value.trim(),
      document.getElementById("opt4").value.trim()
    ];
    const answer = parseInt(document.getElementById("answer").value);

    if (!question || options.some(opt => !opt) || isNaN(answer) || answer < 0 || answer > 3) {
      alert("تأكد من ملء جميع الحقول بشكل صحيح!");
      return;
    }

    db.ref("riddles").push({ question, options, answer })
      .then(() => {
        addForm.reset();
        document.getElementById("status-msg").innerText = "✅ تم إضافة اللغز بنجاح!";
      })
      .catch((error) => {
        alert("❌ حدث خطأ أثناء الإضافة: " + error.message);
      });
  });
}