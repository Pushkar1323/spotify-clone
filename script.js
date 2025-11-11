const enterBtn = document.getElementById("enterBtn");
const codeInput = document.getElementById("roomCode");
const landing = document.getElementById("landing");
const sorryScreen = document.getElementById("sorryScreen");
const bgMusic = document.getElementById("bgMusic");
const floatingMsgs = document.getElementById("floatingMsgs");

enterBtn.addEventListener("click", () => {
  const code = codeInput.value.trim();
  if (code === "143") {
    landing.classList.add("hidden");
    sorryScreen.classList.remove("hidden");

    // Play background music after click (works on GitHub)
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
      "Sorry from my heart 💔🥺"
    ];

    // Floating messages + hearts
    function createMsg() {
      const el = document.createElement("div");
      el.classList.add("msg");

      // Randomly mix hearts + sorry texts
      const content = Math.random() > 0.5 ? 
        msgs[Math.floor(Math.random() * msgs.length)] : "💖";
      el.textContent = content;

      el.style.left = Math.random() * 90 + "%";
      el.style.animationDuration = 5 + Math.random() * 4 + "s";
      el.style.fontSize = 18 + Math.random() * 14 + "px";
      floatingMsgs.appendChild(el);

      setTimeout(() => el.remove(), 8000);
    }

    setInterval(createMsg, 500);
  } else {
    alert("Wrong code 😅");
  }
});
