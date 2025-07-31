db.ref("leaderboard").once("value", (snapshot) => {
  const data = snapshot.val();
  const sorted = Object.values(data || {}).sort((a, b) => b.score - a.score);
  const list = document.getElementById("leaderboard-list");

  sorted.forEach((entry, index) => {
    const li = document.createElement("li");
    let medal = "";
    if (index === 0) medal = "🥇 ";
    else if (index === 1) medal = "🥈 ";
    else if (index === 2) medal = "🥉 ";
    li.innerText = `${medal}${index + 1}- ${entry.name} - ${entry.score}/${entry.total} - ${entry.date}`;
    list.appendChild(li);
  });
});