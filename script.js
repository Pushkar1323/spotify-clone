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

    // Play background music
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
      "Sorry from my heart 🥺",
      "😭😭 I’m so sorry 🥺"
    ];

    function createMsg() {
      const el = document.createElement("div");
      el.classList.add("msg");
      el.textContent = msgs[Math.floor(Math.random() * msgs.length)];
      // Randomize position across full width and height
      el.style.left = Math.random() * 95 + "%";
      el.style.animationDuration = 3 + Math.random() * 3 + "s";
      el.style.fontSize = 14 + Math.random() * 10 + "px";
      el.style.transform = `translateX(${Math.random() * 50 - 25}px)`;
      floatingMsgs.appendChild(el);
      setTimeout(() => el.remove(), 7000);
    }

    setInterval(createMsg, 300);
  } else {
    alert("Wrong code 😅");
  }
});
