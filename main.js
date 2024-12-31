const countdownElement = document.getElementById("countdown");
const countdownTitle = document.getElementById("countdown-title");
const formSection = document.getElementById("form-section");
const messageSection = document.getElementById("message-section");
const userNameInput = document.getElementById("user-name");
const userDreamInput = document.getElementById("user-dream");
const submitButton = document.getElementById("submit-form");
const userDisplayName = document.getElementById("user-display-name");
const messageDeseo = document.getElementById("message-deseo");
const messageText = document.getElementById("message-text");
const predictionText = document.getElementById("prediction-text");
const adviceList = document.getElementById("advice-list");
const videoLink = document.getElementById("video-link");
const dedicatoria1 = document.getElementById("dedicatoria1");
const dedicatoria2 = document.getElementById("dedicatoria2");
const dedicatoria3 = document.getElementById("dedicatoria3");
const dedicatoria4 = document.getElementById("dedicatoria4");
const dedicatoria5 = document.getElementById("dedicatoria5");
const dedicatoria6 = document.getElementById("dedicatoria6");
const dedicatoria7 = document.getElementById("dedicatoria7");
const dedicatoria8 = document.getElementById("dedicatoria8");
const dedicatoria9 = document.getElementById("dedicatoria9");
const dedicatoria10 = document.getElementById("dedicatoria10");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
const backgroundMusic = document.getElementById("background-music");
const celebrationMusic = document.getElementById("celebration-music");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let fireworks = [];

let currentIndex = 0;
let audioPlayer = new Audio();



// Lista de canciones
const musicList = [
  "./BANNERS - Someone To You.mp3", // Reemplaza con las rutas reales
  "./Christian French - head first.mp3",
  "./Ed Sheeran - Bad Habits (BD12 Remix) (320 kbps).mp3",
  "./Cody Simpson - La Da Dee (Official Music Video).mp3",
  "./Good To Be.mp3",
  "./X2Download.app - K'NAAN - Bang Bang ft. Adam Levine (128 kbps).mp3",
  "./XDinero;; Ella besa así [Letra].mp3",
  "./KAROL G - Si Antes Te Hubiera Conocido  Coke Studio.mp3",
  "./QUEVEDO  BZRP Music Sessions #52.mp3"
];

// Función para barajar la lista de canciones
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Función para reproducir la siguiente canción
function playNextSong() {
  if (currentIndex >= musicList.length) {
    currentIndex = 0; // Reinicia la lista si llega al final
    shuffle(musicList); // Baraja la lista
  }

  audioPlayer.src = musicList[currentIndex];
  audioPlayer.play().catch(error => console.log('Error al reproducir la canción:', error));
  currentIndex++;
}

// Configurar el evento para pasar automáticamente a la siguiente canción
audioPlayer.addEventListener("ended", playNextSong);

// Iniciar la música aleatoria al hacer clic en la página
document.body.addEventListener("click", function startMusic() {
  shuffle(musicList); // Baraja las canciones al inicio
  playNextSong(); // Reproduce la primera canción
  document.body.removeEventListener("click", startMusic); // Asegura que solo se active una vez
});

// Contador
function updateCountdown() {
  const now = new Date();
  const target = new Date("2025-01-01T00:00:00");//"2025-01-01T00:00:00" - Date.now()
  const timeDiff = target - now;

  if (timeDiff <= 0) {
    clearInterval(countdownInterval);
    countdownTitle.classList.add("hidden");
    countdownElement.classList.add("hidden");
    formSection.classList.remove("hidden");

    startFireworks();
  } else {
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// Mensajes de broma y predicción
const sarcasticResponses = [
    "¡Vaya! Otro deseo sobre lo mismo, qué sorpresa... 😏",
    "Oh, claro, porque el universo no tenía ya suficiente de eso. 🙄",
    "Sí, seguro. Ese deseo es tan único como el resto. 😜",
    "¡Oh, qué nuevo! ¿Acaso lo leíste en un libro de deseos para principiantes? 😂",
    "¿De verdad? ¿En serio? Eso es lo más original que he escuchado... No. 😆",
    "Ajá, claro, porque el universo estaba esperando ese deseo justo ahora. 😅",
    "¡Wow! Un deseo tan inédito como una película de superhéroes... 🙄",
    "¿Es ese tu deseo? Porque suena como uno que ya has pedido en años anteriores. 😏",
    "¡Ah! Claro, ese deseo va a cambiar el mundo, ¿verdad? 😜",
    "Otro deseo tan esperado como una lluvia en el desierto... 😂",
    "¿No hay algo más original que desear? 😆",
    "Vaya, un deseo tan único como el 99% de los otros deseos. 😅",
    "¿En serio? Este año parece que estás pidiendo todo por segunda vez... 🙄",
];

const funnyMessages = [
    "¡Feliz 2025! ¿Quién diría que sobrevivimos al 2024? 🎉",
    "¡Bienvenido 2025! Si llegaste tarde, no pasa nada, ¡el año aún tiene 365 días! 😜",
    "¡Ya es 2025! A ver si este año cumplimos al menos uno de nuestros propósitos… 😅",
    "¡Que comience la fiesta! El 2025 está aquí, ¡y las excusas también! 🕺🎶",
    "¿Ya estamos en 2025? ¡Qué rápido pasó el tiempo! El año nuevo empieza… con una siesta. 😴",
    "¡Hola 2025! Vamos a hacerlo mejor que el 2024… o al menos, intentarlo. 😆",
    "¡Ya es 2025! Este es el año de las oportunidades… o al menos eso dicen. 🤔✨",
    "¡Feliz 2025! ¡El futuro es ahora, y la procrastinación también! 😂",
    "¡Salud por el 2025! Este año promete… o al menos lo intentaremos. 🥂🍾",
    "¡Que empiece el 2025! Ya podemos empezar a ignorar nuestros propósitos de Año Nuevo. 😜",
    "¡2025! Un año nuevo, el mismo estrés… pero con más memes. 🤪",
    "¡Año nuevo, pero las mismas excusas! ¡Vamos por otro año de risas y caos! 😂🎉",
    "Ya estamos en el 2025… y aún no sé qué hacer con todos esos deseos no cumplidos del 2024. 🙄",
    "¡Feliz 2025! Este es el año en el que finalmente aprenderé a cocinar… o al menos pediré más comida para llevar. 🍕🥡",
    "Bienvenido, 2025. El año nuevo está aquí, y las resoluciones… también se van. 😆",
];

const positivePredictions = [
    "Bueno veamos como te ira este año... Este 2025 será un año lleno de oportunidades para crecer y aprender. ¡Estás listo para todo lo que viene! 🌱✨",
    "Bueno veamos como te ira este año... Este será tu mejor año, ¡prepárate para alcanzar todo lo que te propongas! 🚀💫",
    "Bueno veamos como te ira este año... El 2025 estará lleno de momentos felices, nuevos comienzos y éxitos. ¡Aprovecha cada oportunidad! 🌟",
    "Bueno veamos como te ira este año... Este será el año en que tus sueños dejarán de ser solo sueños, ¡serán tu realidad! 😍💭",
    "Bueno veamos como te ira este año... ¡La buena suerte está de tu lado! Este 2025 será un año brillante, lleno de alegría y éxitos. 🌈🎯",
    "Bueno veamos como te ira este año... ¡Este es tu año para brillar! Cada día te traerá algo mejor que el anterior. 💫🌟",
    "Bueno veamos como te ira este año... El 2025 será el año de tus grandes logros personales, ¡y serás imparable! 💪🚀",
    "Bueno veamos como te ira este año... Este año será tan sorprendente que te sentirás como si estuvieras viviendo en un sueño. ¡Sigue creyendo! 💭✨",
    "Bueno veamos como te ira este año... ¡El 2025 te traerá tantas razones para sonreír que no sabrás por dónde empezar! 😁🎉",
    "Bueno veamos como te ira este año... ¡El 2025 está aquí y contigo viene un montón de bendiciones y alegría! Prepárate para lo mejor. 🙌🌟",
    "Bueno veamos como te ira este año... Este será un año de crecimiento, paz y muchas risas. ¡No dejes que nada te detenga! ✨😄",
    "Bueno veamos como te ira este año... ¡Este 2025 te traerá nuevas aventuras y momentos memorables! Estás listo para lo que viene. 🎒🌟",
    "Bueno veamos como te ira este año... El 2025 será el año de tus logros más grandes. ¡Este es tu momento! 💪🎯",
];

const dedicatorias = [

];

submitButton.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  const userDream = userDreamInput.value.trim();

  if (userName && userDream) {
    userDisplayName.textContent = userName;
    messageDeseo.textContent = sarcasticResponses[Math.floor(Math.random() * sarcasticResponses.length)];
    messageText.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    predictionText.textContent = positivePredictions[Math.floor(Math.random() * positivePredictions.length)];

    formSection.classList.add("hidden");
    messageSection.classList.remove("hidden");

    // Mostrar los mensajes uno a uno
    showMessageWithDelay(messageDeseo, 0);
    showMessageWithDelay(messageText, 1500);
    showMessageWithDelay(predictionText, 3000);
    showMessageWithDelay(adviceList, 4500);
    showMessageWithDelay(videoLink, 6000);
    showMessageWithDelay(dedicatoria1, 7000);
    showMessageWithDelay(dedicatoria2, 8000);
    showMessageWithDelay(dedicatoria3, 9000);
    showMessageWithDelay(dedicatoria4, 10000);
    showMessageWithDelay(dedicatoria5, 11000);
    showMessageWithDelay(dedicatoria6, 12000);
    showMessageWithDelay(dedicatoria7, 13000);
    showMessageWithDelay(dedicatoria8, 14000);
    showMessageWithDelay(dedicatoria9, 15000);
    showMessageWithDelay(dedicatoria10, 16000);
  } else {
    alert("¡Ups! No escribiste nada. ¿Te vas a quedar sin deseo? 😜");
  }
});

// Función para mostrar un mensaje con retraso
function showMessageWithDelay(element, delay) {
  setTimeout(() => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = element.innerHTML;
    messageSection.appendChild(card);

    setTimeout(() => {
      card.classList.add("show");
    }, 100);

  }, delay);
}

// Fuegos artificiales
function startFireworks() {
  function Firework(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = 2;
    this.alpha = 1;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
    };

    this.update = function () {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.alpha -= 0.02;
    };

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    };
  }

  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      fireworks.push(
        new Firework(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          `${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}`
        )
      );
    }
  }, 100);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks = fireworks.filter((f) => f.alpha > 0);
    fireworks.forEach((f) => {
      f.update();
      f.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}
