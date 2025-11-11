const enterBtn = document.getElementById("enterBtn");
const roomInput = document.getElementById("roomCode");
const bgAudio = document.getElementById("bgAudio");

enterBtn.addEventListener("click", enterRoom);
roomInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") enterRoom();
});

function enterRoom() {
  const code = roomInput.value.trim();
  if (code === "143") showSorryScreen();
  else alert("Wrong code! Try again 😅");
}

function showSorryScreen() {
  document.body.innerHTML = `
    <div class="sorry-screen">
      <div class="sorry-card">
        <div class="emoji">🥺😭😭</div>
        <h1>I'm So Sorry</h1>
        <p>I really didn’t mean to hurt you 💔</p>
        <p>Please forgive me 🙏</p>
      </div>
    </div>`;

  if (bgAudio) bgAudio.play().catch(() => {});

  const messages = [
    "I'm sorry 🥺", "Please forgive me 😭", "It won’t happen again 💔",
    "You mean a lot to me 😔", "I miss you 🥺", "Mujhe maaf kardo 😭",
    "I promise to do better 💖", "Please talk to me 🥹", "I'm really sorry 😭😭",
  ];

  function createFloatMsg() {
    const msg = document.createElement("div");
    msg.className = "float-msg";
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];
    msg.style.left = Math.random() * window.innerWidth + "px";
    msg.style.top = window.innerHeight + "px";
    msg.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 6000);
  }

  setInterval(createFloatMsg, 400);
}
