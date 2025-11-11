* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #000;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.landing {
  display: flex;
  width: 90%;
  max-width: 1000px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);
  background: linear-gradient(135deg, #111, #181818);
  animation: fadeIn 1.5s ease-in-out;
}

.left, .right {
  flex: 1;
  padding: 40px;
}

.left {
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.logo {
  color: #1db954;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  background: #333;
  color: #fff;
}

button {
  margin-top: 15px;
  padding: 12px 20px;
  background-color: #1db954;
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #1ed760;
}

.right {
  background: url('https://i.imgur.com/zAqLk4z.jpeg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: brightness(0.7);
}

.right h1 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.right p {
  font-size: 1.1rem;
  line-height: 1.5;
}

.hint {
  margin-top: 20px;
  font-style: italic;
  color: #ccc;
}

.sorry {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle, #222, #000);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.sorry-text {
  font-size: 2rem;
  color: #ff6b6b;
  text-shadow: 0 0 15px #ff6b6b, 0 0 30px #ff4757;
  animation: glow 2s infinite alternate;
  z-index: 10;
}

#floatingMsgs {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0; left: 0;
}

.msg {
  position: absolute;
  color: #ff9090;
  text-shadow: 0 0 10px #ff5c5c;
  font-size: 1.1rem;
  animation: floatUp 6s linear forwards;
  opacity: 0.8;
}

.hidden {
  display: none;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes glow {
  from { text-shadow: 0 0 10px #ff6b6b; }
  to { text-shadow: 0 0 30px #ff4757; }
}

@keyframes floatUp {
  0% { transform: translateY(100vh); opacity: 1; }
  100% { transform: translateY(-10vh); opacity: 0; }
}
