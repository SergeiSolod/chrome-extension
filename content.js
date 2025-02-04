let interval; // Переменная для хранения интервала

// Функция для симуляции нажатия клавиши
function simulateKeyPress(key, code, keyCode) {
  const keydownEvent = new KeyboardEvent("keydown", {
    key: key,
    code: code,
    keyCode: keyCode,
    which: keyCode,
    bubbles: true,
    cancelable: true
  });

  const keyupEvent = new KeyboardEvent("keyup", {
    key: key,
    code: code,
    keyCode: keyCode,
    which: keyCode,
    bubbles: true,
    cancelable: true
  });

  // Генерируем события нажатия на документе
  document.dispatchEvent(keydownEvent);
  document.dispatchEvent(keyupEvent);
}

// Функция для последовательного нажатия клавиш
function startKeySequence() {
  if (interval) {
    clearInterval(interval); // Останавливаем предыдущий интервал, если он запущен
  }

  const keySequence = [
    { key: "q", code: "KeyQ", keyCode: 81 },
    { key: "1", code: "Digit1", keyCode: 49 },
    { key: "2", code: "Digit2", keyCode: 50 },
    { key: "3", code: "Digit3", keyCode: 51 },
    { key: "4", code: "Digit4", keyCode: 52 },
    { key: "4", code: "Digit5", keyCode: 53 },
    { key: "4", code: "Digit6", keyCode: 54 },
    { key: "4", code: "Digit7", keyCode: 55 },
    { key: "4", code: "Digit8", keyCode: 56 }
  ];

  let currentIndex = 0;

  interval = setInterval(() => {
    const { key, code, keyCode } = keySequence[currentIndex];
    simulateKeyPress(key, code, keyCode);
    currentIndex = (currentIndex + 1) % keySequence.length; // Сбрасываем индекс после последнего элемента
  }, 197); // Интервал 197 мс
}

// Запускаем последовательное нажатие клавиш
startKeySequence();

// Чтобы остановить выполнение, выполните: clearInterval(interval);
