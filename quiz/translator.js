(() => {
  const exactReplacements = new Map([
    ["Да", "Ha"],
    ["НЕТ", "YO'Q"],
    ["Нет", "Yo'q"],
    ["ДА", "HA"],
    ["ОК", "OK"],
    ["Русский", "O'zbekcha"],
  ]);

  const phraseReplacements = [
    ["Created with iSpring", ""],
    ["Создано с помощью демо-версии", ""],
    ["Продолжить тест с вопроса, на котором вы остановились?", "To'xtagan savoldan testni davom ettirasizmi?"],
    ["Не удалось отправить результаты на email. Попробовать еще раз?", "Natijalarni emailga yuborib bo'lmadi. Yana urinib ko'rasizmi?"],
    ["Не удалось отправить результаты на сервер. Попробовать еще раз?", "Natijalarni serverga yuborib bo'lmadi. Yana urinib ko'rasizmi?"],
    ["Остались вопросы, на которые вы не ответили. Завершить тест с незавершенными вопросами?", "Javobsiz savollar qoldi. Testni shunday yakunlaysizmi?"],
    ["Остались вопросы, на которые вы не ответили. Ответьте на них для завершения теста.", "Javobsiz savollar qoldi. Testni yakunlash uchun ularga javob bering."],
    ["Вы дошли до конца теста, но остались вопросы, на которые вы не ответили. Ответьте на них для завершения теста.", "Test oxiriga yetdingiz, ammo javobsiz savollar bor. Yakunlash uchun ularga javob bering."],
    ["Вы дошли до конца теста, но остались вопросы на которые вы не ответили. Выберите действие.", "Test oxiriga yetdingiz, ammo javobsiz savollar bor. Amalni tanlang."],
    ["Вы ответили на все вопросы. Завершить тест?", "Barcha savollarga javob berdingiz. Testni yakunlaysizmi?"],
    ["Подтвердить все ответы и завершить тест?", "Barcha javoblarni tasdiqlab, testni yakunlaysizmi?"],
    ["Время, отведенное на прохождение теста, истекло.", "Test uchun ajratilgan vaqt tugadi."],
    ["Время на ответ истекло.", "Javob berish vaqti tugadi."],
    ["Ваш ответ не был верным. Повторите попытку.", "Javobingiz noto'g'ri. Qayta urinib ko'ring."],
    ["Вы ответили не совсем верно.", "Siz qisman to'g'ri javob berdingiz."],
    ["Вы ответили неверно.", "Siz noto'g'ri javob berdingiz."],
    ["Вы ответили верно.", "Siz to'g'ri javob berdingiz."],
    ["Благодарим за участие в опросе.", "So'rovda qatnashganingiz uchun rahmat."],
    ["Благодарим за ответ!", "Javob uchun rahmat!"],
    ["Поздравляем, вы прошли тест!", "Tabriklaymiz, siz testdan o'tdingiz!"],
    ["Вы не прошли тест.", "Siz testdan o'tmadingiz."],
    ["Результаты теста:", "Test natijalari:"],
    ["Результаты теста", "Test natijalari"],
    ["Результаты опроса", "So'rov natijalari"],
    ["Результат", "Natija"],
    ["Ознакомьтесь с результатами теста", "Test natijalari bilan tanishing"],
    ["ПЕЧАТЬ РЕЗУЛЬТАТОВ", "NATIJALARNI CHOP ETISH"],
    ["ПОДРОБНЫЙ ОТЧЕТ", "BATAFSIL HISOBOT"],
    ["Подробный отчет", "Batafsil hisobot"],
    ["СМОТРЕТЬ РЕЗУЛЬТАТЫ", "NATIJALARNI KO'RISH"],
    ["ПРОСМОТРЕТЬ ТЕСТ", "TESTNI KO'RISH"],
    ["ПРОСМОТРЕТЬ ОПРОС", "SO'ROVNI KO'RISH"],
    ["Просмотр теста", "Testni ko'rish"],
    ["Просмотр ответов", "Javoblarni ko'rish"],
    ["НАЧАТЬ ТЕСТ", "TESTNI BOSHLASH"],
    ["НАЧАТЬ ОПРОС", "SO'ROVNI BOSHLASH"],
    ["ПРОДОЛЖИТЬ", "DAVOM ETISH"],
    ["ДАЛЕЕ", "KEYINGI"],
    ["НАЗАД", "ORQAGA"],
    ["ОТВЕТИТЬ", "JAVOB BERISH"],
    ["ГОТОВО", "TAYYOR"],
    ["ЗАВЕРШИТЬ", "YAKUNLASH"],
    ["ПРОПУСТИТЬ", "O'TKAZIB YUBORISH"],
    ["ЗАКРЫТЬ", "YOPISH"],
    ["ОТМЕНА", "BEKOR QILISH"],
    ["ПОВТОРИТЬ ТЕСТ", "TESTNI QAYTA BOSHLASH"],
    ["К РЕЗУЛЬТАТАМ", "NATIJALARGA"],
    ["ВЕРНУТЬСЯ К ТЕСТУ", "TESTGA QAYTISH"],
    ["СБРОСИТЬ", "TOZALASH"],
    ["ЕЩЁ РАЗ", "YANA BIR BOR"],
    ["Информационный слайд", "Ma'lumot slaydi"],
    ["Тест", "Test"],
    ["Анкета", "So'rovnoma"],
    ["Здравствуйте!", "Salom!"],
    ["Список вопросов", "Savollar ro'yxati"],
    ["Разделы теста", "Test bo'limlari"],
    ["Вопросы теста", "Test savollari"],
    ["Вопросов отвечено:", "Javob berilgan savollar:"],
    ["Вопросы", "Savollar"],
    ["Вопрос %", "Savol %"],
    ["Вопрос", "Savol"],
    ["Правильные ответы", "To'g'ri javoblar"],
    ["Правильный ответ:", "To'g'ri javob:"],
    ["Правильный ответ", "To'g'ri javob"],
    ["Ваш ответ:", "Sizning javobingiz:"],
    ["Ваш ответ", "Sizning javobingiz"],
    ["Ответ пользователя", "Foydalanuvchi javobi"],
    ["Ответ:", "Javob:"],
    ["Ответ", "Javob"],
    ["Ответьте на вопрос, чтобы продолжить.", "Davom etish uchun savolga javob bering."],
    ["Нажмите для ответа на вопрос", "Savolga javob berish uchun bosing"],
    ["Область ответа", "Javob maydoni"],
    ["Обязательное поле", "Majburiy maydon"],
    ["Выберите ответ", "Javobni tanlang"],
    ["Введите ответ", "Javobni kiriting"],
    ["Выбрать -", "Tanlash -"],
    ["Отменить выбор -", "Tanlovni bekor qilish -"],
    ["Вариант %", "Variant %"],
    ["Не отвечен", "Javob berilmagan"],
    ["Отвечен", "Javob berilgan"],
    ["Неправильно", "Noto'g'ri"],
    ["Неверно", "Noto'g'ri"],
    ["Правильно", "To'g'ri"],
    ["Верно", "To'g'ri"],
    ["Частично верно", "Qisman to'g'ri"],
    ["Затрачено времени:", "Sarflangan vaqt:"],
    ["Время:", "Vaqt:"],
    ["Дата", "Sana"],
    ["Попытки", "Urinishlar"],
    ["Осталось попыток: %", "Qolgan urinishlar: %"],
    ["Набрано баллов: %", "To'plangan ball: %"],
    ["Набрано баллов:", "To'plangan ball:"],
    ["Набрано: %", "To'plangan: %"],
    ["Набрано", "To'plangan"],
    ["Вы набрали:", "Siz to'pladingiz:"],
    ["Проходной балл:", "O'tish bali:"],
    ["Баллы", "Ballar"],
    ["баллов)", "ball)"],
    ["Пройден", "O'tdi"],
    ["Не пройден", "O'tmadi"],
    ["Отправка результатов", "Natijalarni yuborish"],
    ["Результаты будут отправлены на указанный", "Natijalar ko'rsatilgan manzilga yuboriladi"],
    ["Укажите правильный адрес электронной почты", "Elektron pochta manzilini to'g'ri kiriting"],
    ["Не удалось отправить результаты на", "Natijalarni yuborib bo'lmadi:"],
    ["Обратная связь", "Fikr-mulohaza"],
    ["Спасибо", "Rahmat"],
    ["Возможно", "Ehtimol"],
    ["Вероятно", "Ehtimol"],
    ["Не вероятно", "Ehtimoli past"],
    ["Очень вероятно", "Juda ehtimol"],
    ["Совсем не вероятно", "Umuman ehtimol emas"],
    ["Однозначно", "Aniq"],
    ["Согласен", "Roziman"],
    ["Полностью согласен", "To'liq roziman"],
    ["Скорее согласен", "Ko'proq roziman"],
    ["Не согласен", "Rozi emasman"],
    ["Скорее несогласен", "Ko'proq rozi emasman"],
    ["Совершенно несогласен", "Umuman rozi emasman"],
    ["Очень удовлетворен", "Juda mamnun"],
    ["Удовлетворен", "Mamnun"],
    ["Не удовлетворен", "Mamnun emas"],
    ["Очень не удовлетворен", "Juda mamnun emas"],
    ["Нейтрально", "Neytral"],
    ["Нейтральный", "Neytral"],
    ["Очень счастлив", "Juda xursand"],
    ["Счастлив", "Xursand"],
    ["Несчастлив", "Xafa"],
    ["Очень несчастлив", "Juda xafa"],
    ["Легкий", "Oson"],
    ["Очень легкий", "Juda oson"],
    ["Трудный", "Qiyin"],
    ["Очень трудный", "Juda qiyin"],
    ["Средне", "O'rtacha"],
    ["Ниже среднего", "O'rtachadan past"],
    ["Выше среднего", "O'rtachadan yuqori"],
    ["Отлично", "A'lo"],
    ["Плохо", "Yomon"],
    ["Не знаю", "Bilmayman"],
    ["Не ограничено", "Cheklanmagan"],
    ["Перейти в режим полного плеера", "To'liq pleyer rejimiga o'tish"],
    ["Перейти в режим для слабовидящих", "Ko'rish qiyin bo'lganlar rejimiga o'tish"],
    ["Стягивайте и растягивайте экран двумя пальцами, чтобы изменить масштаб.", "Masshtabni o'zgartirish uchun ekranni ikki barmoq bilan yaqinlashtiring yoki uzoqlashtiring."],
    ["Страница %", "Sahifa %"],
    ["По умолчанию", "Standart"],
    ["Светло-синий", "Och ko'k"],
    ["на ответ", "javob uchun"],
    ["на тест", "test uchun"],
    ["для ответа на следующий вопрос.", "keyingi savolga javob berish uchun."],
    ["для завершения теста.", "testni yakunlash uchun."],
    ["мин", "daq"],
    ["сек", "son"],
  ].sort((a, b) => b[0].length - a[0].length);

  const attrNames = ["value", "placeholder", "title", "aria-label", "alt"];
  const seenPayload = new Set();

  function applyExactReplacement(input) {
    const trimmed = input.trim();
    const replacement = exactReplacements.get(trimmed);
    if (!replacement) return input;
    if (trimmed === input) return replacement;
    return input.replace(trimmed, replacement);
  }

  function translateText(input) {
    if (!input || typeof input !== "string") return input;

    let out = applyExactReplacement(input);
    for (const [from, to] of phraseReplacements) {
      if (out.includes(from)) out = out.split(from).join(to);
    }
    return out;
  }

  function translateElementAttrs(el) {
    for (const attr of attrNames) {
      if (!el.hasAttribute(attr)) continue;
      const current = el.getAttribute(attr);
      const next = translateText(current);
      if (next !== current) el.setAttribute(attr, next);
    }
  }

  function translateNode(node) {
    if (!node) return;

    if (node.nodeType === Node.TEXT_NODE) {
      const current = node.nodeValue;
      const next = translateText(current);
      if (next !== current) node.nodeValue = next;
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node;

    translateElementAttrs(el);

    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    for (const textNode of textNodes) {
      const current = textNode.nodeValue;
      const next = translateText(current);
      if (next !== current) textNode.nodeValue = next;
    }
  }

  function hideWatermark() {
    const likelyWatermarkNodes = document.querySelectorAll(
      'a[href*="remove-watermark"], [href*="ispringsolutions.com/go/remove-watermark"], [class*="trial"], [id*="trial"]',
    );
    for (const node of likelyWatermarkNodes) {
      if (node instanceof HTMLElement) node.style.display = "none";
    }
  }

  function decodeBase64Utf8(base64Text) {
    const binary = atob(base64Text);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder("utf-8").decode(bytes);
  }

  function encodeBase64Utf8(text) {
    const bytes = new TextEncoder().encode(text);
    const chunkSize = 0x8000;
    let binary = "";
    for (let i = 0; i < bytes.length; i += chunkSize) {
      const chunk = bytes.subarray(i, i + chunkSize);
      binary += String.fromCharCode(...chunk);
    }
    return btoa(binary);
  }

  function translateQuizPayload(base64Text) {
    if (!base64Text || typeof base64Text !== "string") return base64Text;
    if (seenPayload.has(base64Text)) return base64Text;

    try {
      const decoded = decodeBase64Utf8(base64Text);
      const translated = translateText(decoded);
      if (translated === decoded) {
        seenPayload.add(base64Text);
        return base64Text;
      }
      const encoded = encodeBase64Utf8(translated);
      seenPayload.add(encoded);
      return encoded;
    } catch {
      seenPayload.add(base64Text);
      return base64Text;
    }
  }

  function patchQuizPlayerStart() {
    if (!window.QuizPlayer || typeof window.QuizPlayer.start !== "function") return;
    if (window.QuizPlayer.__uzPatched) return;

    const originalStart = window.QuizPlayer.start.bind(window.QuizPlayer);
    window.QuizPlayer.start = (...args) => {
      if (typeof args[2] === "string") args[2] = translateQuizPayload(args[2]);
      return originalStart(...args);
    };
    window.QuizPlayer.__uzPatched = true;
  }

  function translateWindowData() {
    if (typeof window.data === "string") {
      window.data = translateQuizPayload(window.data);
    }
  }

  function translateDocument() {
    const root = document.body || document.documentElement;
    if (root) translateNode(root);
    if (typeof document.title === "string") document.title = translateText(document.title);
    hideWatermark();
  }

  function observeChanges() {
    const target = document.documentElement || document.body;
    if (!target) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          translateNode(mutation.target);
          continue;
        }
        for (const node of mutation.addedNodes) translateNode(node);
      }
      hideWatermark();
    });

    observer.observe(target, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }

  function start() {
    translateWindowData();
    patchQuizPlayerStart();
    translateDocument();
    observeChanges();

    setInterval(() => {
      patchQuizPlayerStart();
      translateWindowData();
      translateDocument();
    }, 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
