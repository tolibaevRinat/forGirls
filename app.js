const sections = [
  { id: "mechanic", title: "Mexanika", icon: "⚙️", prefix: "mechanic" },
  { id: "molecular", title: "Molekulyar fizika", icon: "🔬", prefix: "mol" },
  { id: "electric", title: "Elektr va magnetizm", icon: "⚡", prefix: "mag" },
  { id: "optics", title: "Optika", icon: "🔎", prefix: "op" },
  { id: "atom", title: "Atom va yadro fizikasi", icon: "⚛️", prefix: "atom" },
  { id: "agro", title: "Agrometeorologiya", icon: "🚜", prefix: "agro" },
  {
    id: "virtual-labs",
    title: "Virtual laboratoriyalar",
    icon: "▶️",
    emptyText: "Bu bo'lim uchun materiallar hozircha qo'shilmagan.",
  },
  {
    id: "tasks",
    title: "Topshiriqlar",
    icon: "📋",
    quizCount: 24,
    emptyText: "Bu bo'lim uchun materiallar hozircha qo'shilmagan.",
  },
];

const imageFiles = [
  "agro-01-lab-01.webp",
  "agro-02-lab-02.webp",
  "agro-03-lab-03.webp",
  "agro-04-lab-04.webp",
  "agro-05-lab-05.webp",
  "agro-06-lab-06.webp",
  "agro-07-lab-07.webp",
  "agro-08-lab-08.webp",
  "agro-09-lab-09.webp",
  "atom-01-lab-16.webp",
  "atom-teriflar.webp",
  "mag-01-lab-08.webp",
  "mag-02-lab-09.webp",
  "mag-03-lab-10.webp",
  "mag-04-lab-11.webp",
  "mag-teriflar.webp",
  "mechanic-01-lab-01.webp",
  "mechanic-02-lab-02.webp",
  "mechanic-03-lab-03.webp",
  "mechanic-04-lab-04.webp",
  "mechanic-05-lab-05.webp",
  "mechanic-teriflar.webp",
  "mol-01-lab-06.webp",
  "mol-02-lab-07.webp",
  "mol-tariflar.webp",
  "op-01-lab-12.webp",
  "op-02-lab-13.webp",
  "op-03-lab-14.webp",
  "op-04-lab-15.webp",
  "op-teriflar.webp",
];

const sidebar = document.getElementById("sidebar");
const contentArea = document.getElementById("contentArea");
const taskQuizItems = buildTaskQuizItems(24);
const virtualLabItems = [
  {
    key: "virtual-lab-01",
    label: "Gigrograf yordamida havo namligini o'lchash",
    simulationSrc:
      "https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_uz.html",
    docSrc: "./docs/Gigrograf yordamida havo namligini o'lchash.docx",
  },
  {
    key: "virtual-lab-02",
    label: "Aneroid barmeter va barografning qurish va ishlash principi",
    simulationSrc:
      "https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_uz.html",
    docSrc:
      "./docs/Aneroid barmeter va barografning qurish va ishlash principi. Atmosfera Bosimini PhET Yerdamida Ulchash.docx",
  },
  {
    key: "virtual-lab-03",
    label: "Lyuksmetr yordamida yoritilganlikni o‘lchash",
    simulationSrc:
      "https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_uz.html",
    docSrc: "./docs/Lyuksmetr yordamida yoritilganlikni o‘lchash.docx",
  },
  {
    key: "virtual-lab-04",
    label: "Qattiq jismning solishtirma issiqlik sig'imini aniqlash",
    simulationSrc:
      "https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_uz.html",
    docSrc:
      "./docs/Qattiq jismning solishtirma issiqlik sig'imini aniqlash.docx",
  },
  {
    key: "virtual-lab-05",
    label: "Termometrlar va ularning ishlash printsipi bilan tanishish",
    simulationSrc:
      "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_uz.html",
    docSrc:
      "./docs/Termometrlar va ularning ishlash printsipi bilan tanishish.docx",
  },
  {
    key: "virtual-lab-06",
    label: "Urugʻlarning zichligini piknometr yordamida aniqlash",
    simulationSrc:
      "https://phet.colorado.edu/sims/html/density/latest/density_all.html?locale=uz",
    docSrc: "./docs/Urugʻlarning zichligini piknometr yordamida aniqlash.docx",
  },
];
const backButtonLabel = `
  <span class="back-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
      <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </span>
  <span>Orqaga</span>
`;

function renderMainScreen() {
  renderSectionButtons();
  contentArea.innerHTML = `
    <section class="home-view">
      <div class="content-title">Xush kelibsiz!</div>
      <div class="content-img">
        <img src="./img/hero.webp" alt="Bosh sahifa" />
      </div>
    </section>
  `;
}

function renderSectionButtons() {
  sidebar.innerHTML = "";
  sections.forEach((section) => {
    const button = createButton("menu-item", section.icon, section.title);
    button.addEventListener("click", () => openSection(section.id));
    sidebar.append(button);
  });
}

function openSection(sectionId) {
  const section = sections.find((item) => item.id === sectionId);
  if (!section) return;

  if (section.id === "virtual-labs") {
    if (!virtualLabItems.length) {
      renderEmptySection(section);
      return;
    }

    renderVirtualLabsSidebar(section, virtualLabItems);
    openVirtualLabItem(section, virtualLabItems[0]);
    return;
  }

  if (section.id === "tasks") {
    if (!taskQuizItems.length) {
      renderEmptySection({
        ...section,
        emptyText: "Topshiriqlar uchun quiz fayllari topilmadi.",
      });
      return;
    }

    renderQuizSidebar(section, taskQuizItems);
    openQuizItem(section, taskQuizItems[0]);
    return;
  }

  if (!section.prefix) {
    renderEmptySection(section);
    return;
  }

  const sectionItems = getSectionItems(section.prefix);
  if (!sectionItems.length) {
    renderEmptySection({
      ...section,
      emptyText: "Bu bo'lim uchun rasmlar topilmadi.",
    });
    return;
  }

  renderLabsSidebar(section, sectionItems);
  openItem(section, sectionItems[0]);
}

function renderSectionSidebar(section) {
  sidebar.innerHTML = `
    <div class="sidebar-head">
      <div class="sidebar-title">${section.title}</div>
      <button class="back-button sidebar-back" type="button" id="sidebarBackButton">${backButtonLabel}</button>
    </div>
  `;
  document
    .getElementById("sidebarBackButton")
    ?.addEventListener("click", renderMainScreen);
}

function renderLabsSidebar(section, sectionItems) {
  sidebar.innerHTML = `
    <div class="sidebar-head">
      <div class="sidebar-title">${section.title}</div>
      <button class="back-button sidebar-back" type="button" id="sidebarBackButton">${backButtonLabel}</button>
    </div>
    <div class="labs-scroll" id="labsScroll"></div>
  `;
  const labsScroll = document.getElementById("labsScroll");
  document
    .getElementById("sidebarBackButton")
    ?.addEventListener("click", renderMainScreen);

  sectionItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lab-item";
    button.dataset.key = item.key;
    button.textContent = item.label;
    button.addEventListener("click", () => openItem(section, item));
    labsScroll?.append(button);
  });
}

function renderQuizSidebar(section, quizItems) {
  sidebar.innerHTML = `
    <div class="sidebar-head">
      <div class="sidebar-title">${section.title}</div>
      <button class="back-button sidebar-back" type="button" id="sidebarBackButton">${backButtonLabel}</button>
    </div>
    <div class="labs-scroll" id="labsScroll"></div>
  `;
  const labsScroll = document.getElementById("labsScroll");
  document
    .getElementById("sidebarBackButton")
    ?.addEventListener("click", renderMainScreen);

  quizItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lab-item";
    button.dataset.key = item.key;
    button.textContent = item.label;
    button.addEventListener("click", () => openQuizItem(section, item));
    labsScroll?.append(button);
  });
}

function renderVirtualLabsSidebar(section, items) {
  sidebar.innerHTML = `
    <div class="sidebar-head">
      <div class="sidebar-title">${section.title}</div>
      <button class="back-button sidebar-back" type="button" id="sidebarBackButton">${backButtonLabel}</button>
    </div>
    <div class="labs-scroll" id="labsScroll"></div>
  `;
  const labsScroll = document.getElementById("labsScroll");
  document
    .getElementById("sidebarBackButton")
    ?.addEventListener("click", renderMainScreen);

  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lab-item";
    button.dataset.key = item.key;
    button.textContent = item.label;
    button.addEventListener("click", () => openVirtualLabItem(section, item));
    labsScroll?.append(button);
  });
}

function openItem(section, item) {
  setActiveLabButton(item.key);

  contentArea.innerHTML = `
    <section class="section-view">
      <h2 class="section-title section-title-centered">${section.title}</h2>
      <div class="lab-preview-wrap">
        <div class="lab-preview">
          <img id="labImage" src="${item.src}" alt="${item.label}" />
        </div>
        <div class="lab-caption">${item.label}</div>
      </div>
    </section>
  `;

  const labImage = document.getElementById("labImage");
  labImage?.addEventListener("error", () => {
    contentArea
      .querySelector(".lab-preview")
      ?.replaceChildren(buildImageFallback(item.label));
  });
}

function renderEmptySection(section) {
  renderSectionSidebar(section);

  contentArea.innerHTML = `
    <section class="empty-view">
      <h2 class="section-title section-title-centered">${section.title}</h2>
      <div class="empty-card">${section.emptyText}</div>
    </section>
  `;
}

function openQuizItem(section, item) {
  setActiveLabButton(item.key);
  const quizSrc = encodeURI(item.src);

  contentArea.innerHTML = `
    <section class="section-view">
      <h2 class="section-title section-title-centered">${section.title}</h2>
      <div class="lab-preview-wrap">
        <div class="lab-preview">
          <iframe
            class="quiz-frame"
            src="${quizSrc}"
            title="${item.label}"
            loading="eager"
            allowfullscreen
          ></iframe>
        </div>
        <div class="lab-caption">${item.label}</div>
      </div>
    </section>
  `;
}

function openVirtualLabItem(section, item) {
  setActiveLabButton(item.key);
  const simulationSrc = encodeURI(item.simulationSrc);
  const docSrc = encodeURI(item.docSrc);

  contentArea.innerHTML = `
    <section class="section-view">
      <h2 class="section-title section-title-centered">${section.title}</h2>
      <div class="virtual-stack">
        <div class="virtual-panel">
          <iframe
            class="virtual-frame"
            src="${simulationSrc}"
            title="${item.label}"
            loading="eager"
            allowfullscreen
          ></iframe>
        </div>
        <div class="virtual-panel virtual-doc-panel">
          <div class="virtual-doc-head">
            <div class="virtual-doc-title">${item.label}</div>
            <a class="doc-download-link" href="${docSrc}" target="_blank" rel="noopener noreferrer">Hujjatni ochish</a>
          </div>
          <div class="doc-container" id="docContainer">
            <div class="doc-placeholder">Hujjat yuklanmoqda...</div>
          </div>
        </div>
      </div>
    </section>
  `;

  const docContainer = document.getElementById("docContainer");
  renderDocxPreview(item, docContainer);
}

function setActiveLabButton(activeKey) {
  const buttons = sidebar.querySelectorAll(".lab-item");
  buttons.forEach((button) => {
    const isActive = button.dataset.key === activeKey;
    button.classList.toggle("active", isActive);
  });
}

async function renderDocxPreview(item, container) {
  if (!container) return;
  const docSrc = encodeURI(item.docSrc);

  if (!window.mammoth) {
    container.innerHTML = `
      <div class="doc-placeholder">
        Hujjat preview mavjud emas.
        <a class="doc-fallback-link" href="${docSrc}" target="_blank" rel="noopener noreferrer">Hujjatni ochish</a>
      </div>
    `;
    return;
  }

  try {
    const response = await fetch(docSrc);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const result = await window.mammoth.convertToHtml({ arrayBuffer });
    const html = (result.value || "").trim();
    if (!html) {
      throw new Error("Document is empty");
    }

    container.innerHTML = `<article class="doc-article">${html}</article>`;
  } catch (error) {
    console.error("DOCX preview error:", error);
    container.innerHTML = `
      <div class="doc-placeholder">
        Hujjatni ko'rsatib bo'lmadi.
        <a class="doc-fallback-link" href="${docSrc}" target="_blank" rel="noopener noreferrer">Hujjatni ochish</a>
      </div>
    `;
  }
}

function getSectionItems(prefix) {
  return imageFiles
    .filter((fileName) => fileName.startsWith(`${prefix}-`))
    .map((fileName) => buildItemFromFile(fileName))
    .sort((a, b) => {
      if (a.order === b.order) return a.label.localeCompare(b.label, "uz");
      return a.order - b.order;
    });
}

function buildItemFromFile(fileName) {
  const lower = fileName.toLowerCase();
  const tariflar = /-t[ae]riflar\./.test(lower);
  const labMatch = lower.match(/lab-(\d+)/);

  if (tariflar) {
    return {
      key: fileName,
      label: "Tariflar",
      order: 10000,
      src: `./img/labs/${fileName}`,
    };
  }

  const labNumber = labMatch ? Number(labMatch[1]) : 999;
  return {
    key: fileName,
    label: `Laboratoriya ishi ${labNumber}`,
    order: labNumber,
    src: `./img/labs/${fileName}`,
  };
}

function createButton(className, icon, text) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.innerHTML = `<span class="menu-icon">${icon}</span><span>${text}</span>`;
  return button;
}

function buildImageFallback(label) {
  const fallback = document.createElement("div");
  fallback.className = "empty-card";
  fallback.textContent = `${label} uchun rasm yuklanmadi.`;
  return fallback;
}

function buildTaskQuizItems(count) {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const padded = String(number).padStart(2, "0");
    return {
      key: `quiz-lab-${padded}`,
      label: `Laboratoriya ishi ${number} testi`,
      src: `./quiz/lab-${padded} (Published)/index.html`,
    };
  });
}

renderMainScreen();
