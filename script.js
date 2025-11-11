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

    // Play background music after click (GitHub autoplay fix)
    bgMusic.play().catch(() => {
      alert("Tap anywhere to enable music 🎵");
    });

    const msgs = [
      "I'm really sorry 🥺",
      "Please forgive me 😭",
      "I didn’t mean to hurt you 💔",
      "I miss you 😢",
      "Forgive me please 🥺",
      "Main sach me sorry hu 😭",
      "Please talk to me again 💖",
      "Sorry from my heart 🥺💔",
      "😭😭 I’m so sorry 🥺"
    ];

    function createMsg() {
      const el = document.createElement("div");
      el.classList.add("msg");
      el.textContent = msgs[Math.floor(Math.random() * msgs.length)];
      el.style.left = Math.random() * 95 + "%"; // random horizontal position
      el.style.animationDuration = 3 + Math.random() * 2 + "s"; // faster float
      el.style.fontSize = 16 + Math.random() * 8 + "px";
      floatingMsgs.appendChild(el);
      setTimeout(() => el.remove(), 5000);
    }

    // Start faster
    setInterval(createMsg, 250);
  } else {
    alert("Wrong code 😅");
  }
});
