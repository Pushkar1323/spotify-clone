document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("joinBtn");
  const input = document.getElementById("roomCode");
  const apology = document.getElementById("apologyScreen");
  const floatingContainer = document.getElementById("floatingContainer");
  const bgm = document.getElementById("bgm");

  joinBtn.addEventListener("click", () => {
    if (input.value.trim() === "142") {
      showApology();
    } else {
      alert("Room code invalid 😅");
    }
  });

  function showApology() {
    document.body.innerHTML = ""; // clear old content
    document.body.appendChild(apology);
    apology.classList.remove("hidden");
    bgm.play();

    createFloating(50);
  }

  function createFloating(count) {
    const texts = ["sorry", "mai maafi maangta hu", "😭", "🥺", "forgive me"];
    for (let i = 0; i < count; i++) {
      const span = document.createElement("span");
      span.classList.add("floating");
      span.textContent = texts[Math.floor(Math.random() * texts.length)];
      span.style.left = Math.random() * 100 + "vw";
      span.style.fontSize = 14 + Math.random() * 24 + "px";
      span.style.animationDuration = 5 + Math.random() * 7 + "s";
      floatingContainer.appendChild(span);

      setTimeout(() => span.remove(), 12000);
    }

    setInterval(() => createFloating(10), 3000);
  }
});