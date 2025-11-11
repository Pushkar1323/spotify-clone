const enterBtn = document.getElementById("enterBtn");
const codeInput = document.getElementById("roomCode");
const landing = document.getElementById("landing");
const sorryScreen = document.getElementById("sorryScreen");
const bgMusic = document.getElementById("bgMusic");
const floatingMsgs = document.getElementById("floatingMsgs");
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

enterBtn.addEventListener("click", () => {
  const code = codeInput.value.trim();
  if (code === "143") {
    landing.classList.add("hidden");
    sorryScreen.classList.remove("hidden");

    bgMusic.play().catch(() => {
      alert("Tap anywhere to enable music 🎵");
    });

    const msgs = [
      "I'm really sorry 🥺",
      "Please forgive me 😭",
      "I didn’t mean to hurt you 💔",
      "I miss you so much 😢",
      "Please talk to me again 🥺",
      "Forgive me please 💖",
      "Main sach me sorry hu 😭",
      "Sorry from my heart 💔🥺",
      "😭😭 I’m so sorry 🥺",
    ];

    function createMsg() {
      const el = document.createElement("div");
      el.classList.add("msg");
      const content =
        Math.random() > 0.3
          ? msgs[Math.floor(Math.random() * msgs.length)]
          : "💖";
      el.textContent = content;
      el.style.left = Math.random() * 90 + "%";
      el.style.animationDuration = 5 + Math.random() * 4 + "s";
      el.style.fontSize = 18 + Math.random() * 12 + "px";
      floatingMsgs.appendChild(el);
      setTimeout(() => el.remove(), 8000);
    }

    setInterval(createMsg, 600);

    // Particle hearts floating softly in background
    const hearts = [];
    for (let i = 0; i < 25; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.3,
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 100, 120, 0.6)";
        ctx.fill();
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  } else {
    alert("Wrong code 😅");
  }
});
