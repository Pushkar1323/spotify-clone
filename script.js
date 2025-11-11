const btn = document.getElementById("enterBtn");
const input = document.getElementById("roomCode");
const audio = document.getElementById("bgAudio");

btn.addEventListener("click", enterRoom);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") enterRoom();
});

function enterRoom() {
  const code = input.value.trim();
  if (code === "143") {
    showSorryScreen();
  } else {
    alert("Wrong code! Try again 😅");
  }
}

function showSorryScreen() {
  document.body.innerHTML = `
    <div class="sorry-screen">
      <div class="sorry-card">
        <div class="emoji">🥺😭😭</div>
        <h1>I'm So Sorry</h1>
        <p>I didn’t mean to hurt you 💔<br>Please forgive me 🙏</p>
      </div>
    </div>
  `;

  // Play music after user interaction
  audio.play().catch(() => {
    console.log("Autoplay blocked, needs interaction");
  });

  const messages = [
    "I'm sorry 🥺", "Please forgive me 😭", "Mujhe maaf kardo 💔",
    "I promise to do better 💖", "I miss you 🥺",
    "It won’t happen again 😭", "You mean a lot to me 💞"
  ];

  setInterval(() => {
    const msg = document.createElement("div");
    msg.className = "float-msg";
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];
    msg.style.left = Math.random() * window.innerWidth + "px";
    msg.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.body.appendChild(msg);
    msg.addEventListener("animationend", () => msg.remove());
  }, 600);

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";
    heart.style.fontSize = 1 + Math.random() * 2 + "rem";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }, 400);
  }
