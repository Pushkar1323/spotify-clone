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

    // Play music (GitHub Pages fix)
    bgMusic.play().then(() => {
      console.log("Music started");
    }).catch(() => {
      alert("Tap screen once to enable music 🎵");
    });

    const msgs = [
      "I'm really sorry 🥺",
      "Please forgive me 😭",
      "I didn’t mean to hurt you 💔",
      "I miss you so much 😢",
      "Please talk to me again 🥺",
      "Forgive me please 💖",
      "Main sach me sorry hu 😭",
      "🥺😭😭 Sorry from my heart 💔"
    ];

    function createMsg() {
      const el = document.createElement("div");
      el.classList.add("msg");
      el.textContent = msgs[Math.floor(Math.random() * msgs.length)];
      el.style.left = Math.random() * 90 + "%";
      el.style.animationDuration = 5 + Math.random() * 3 + "s";
      el.style.fontSize = 16 + Math.random() * 10 + "px";
      floatingMsgs.appendChild(el);
      setTimeout(() => el.remove(), 7000);
    }

    setInterval(createMsg, 600);
  } else {
    alert("Wrong code 😅");
  }
});
