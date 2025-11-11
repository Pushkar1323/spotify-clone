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

    // Play music
    bgMusic.play().catch(() => alert("Tap anywhere to enable music 🎵"));

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
      el.style.left = Math.random() * 90 + "%";
      el.style.top = Math.random() * 80 + "%";
      el.style.animationDuration = 4 + Math.random() * 4 + "s";
      el.style.fontSize = 18 + Math.random() * 10 + "px";
      floatingMsgs.appendChild(el);
    }

    for (let i = 0; i < 30; i++) {
      createMsg();
    }
  } else {
    alert("Wrong code 😅");
  }
});
