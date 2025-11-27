// Game constants and data
const AGES = [
  { id: 1, name: "Ancient World", ru: "Каменный век" },
  { id: 2, name: "Antiquity", ru: "Античность" },
  { id: 3, name: "Medieval", ru: "Средневековье" },
  { id: 4, name: "Age of Enlightenment", ru: "Эпоха Просвещения" },
  { id: 5, name: "Modern Time", ru: "Современное время" },
  { id: 6, name: "Future", ru: "Будущее" },
];

// FIXED: Reduced boss HP to make the game easier
const BOSSES = [
  {
    id: 1,
    name: "Kronos",
    ru: "Кронос",
    age: 1,
    baseHP: 1000,
    accel: 1.1,
    spawnRules: { allowMediumAfter: 10, allowHeavyAfter: 20 },
    imgWidth: 100,
    imgHeight: 100,
  },
  {
    id: 2,
    name: "Yuri Caesar",
    ru: "Юрий Цезарь",
    age: 2,
    baseHP: 2500,
    accel: 1,
    spawnRules: { allowMediumAfter: 15, allowHeavyAfter: 25 },
    imgWidth: 100,
    imgHeight: 100,
  },
  {
    id: 3,
    name: "Ivan the Terrible",
    ru: "Иван Грозный",
    age: 3,
    baseHP: 4000,
    accel: 1,
    spawnRules: { allowMediumAfter: 20, allowHeavyAfter: 25 },
    imgWidth: 100,
    imgHeight: 100,
  },
  {
    id: 4,
    name: "Napoleon Bonaparte",
    ru: "Наполеон Бонапарт",
    age: 4,
    accel: 1,
    baseHP: 7000,
    spawnRules: { allowMediumAfter: 40, allowHeavyAfter: 45 },
    imgWidth: 100,
    imgHeight: 100,
  },
  {
    id: 5,
    name: "Adolf Hitler",
    ru: "Адольф Гитлер",
    age: 5,
    accel: 1,
    baseHP: 12000,
    spawnRules: { allowMediumAfter: 40, allowHeavyAfter: 60 },
    imgWidth: 150,
    imgHeight: 150,
  },
  {
    id: 6,
    name: "Lord Yaroslav",
    ru: "Лорд Ярослав",
    age: 6,
    accel: 1,
    baseHP: 25000,
    spawnRules: { allowMediumAfter: 30, allowHeavyAfter: 55 },
    imgWidth: 100,
    imgHeight: 100,
  },
];

// FIXED: Increased player base HP to make the game easier
const HP_PER_AGE = [100, 200, 400, 800, 1600, 3000]; // Increased by 20%

const UNIT_TEMPLATES = {
  1: [
    {
      id: "u1_m",
      name: "Warrior",
      ru: "Воин",
      cost: 25,
      hp: 60,
      atk: 10,
      spd: 0.6,
      atkSpeed: 1.0,
      type: "melee",
      tier: 1,
      imgWidth: 60,
      imgHeight: 60,
    },
    {
      id: "u1_s",
      name: "Hunter",
      ru: "Охотник",
      cost: 45,
      hp: 36,
      atk: 12,
      spd: 0.6,
      atkSpeed: 2.5,
      type: "shoot",
      range: 200,
      bulletSpeed: 420,
      bulletSize: 20,
      bulletSprite: {
        player: {
          src: "images/ancientBullet.svg",
          width: 20,
          height: 20,
        },
        enemy: { src: "images/ancientBullet.svg", width: 20, height: 20 },
      },
      tier: 2,
      imgWidth: 60,
      imgHeight: 60,
    },
    {
      id: "u1_h",
      name: "Brute",
      ru: "Громила",
      cost: 65,
      hp: 140,
      atk: 20,
      spd: 0.48,
      atkSpeed: 1.4,
      type: "melee",
      tier: 3,
      imgWidth: 70,
      imgHeight: 70,
    },
  ],
  2: [
    {
      id: "u2_m",
      name: "Legionary",
      ru: "Легионер",
      cost: 40,
      hp: 95,
      atk: 16,
      spd: 0.55,
      atkSpeed: 1.1,
      type: "melee",
      tier: 1,
      imgWidth: 65,
      imgHeight: 65,
    },
    {
      id: "u2_s",
      name: "Spearman",
      ru: "Копейщик",
      cost: 55,
      hp: 56,
      atk: 18,
      spd: 0.48,
      atkSpeed: 2.8,
      type: "shoot",
      range: 250,
      bulletSpeed: 360,
      bulletSize: 20,
      bulletSprite: {
        player: {
          src: "images/antiquityBullet.svg",
          width: 20,
          height: 20,
        },
        enemy: {
          src: "images/antiquityBulletE.svg",
          width: 20,
          height: 20,
        },
      },
      tier: 2,
      imgWidth: 70,
      imgHeight: 70,
    },
    {
      id: "u2_h",
      name: "Veteran",
      ru: "Ветеран",
      cost: 100,
      hp: 230,
      atk: 30,
      spd: 0.48,
      atkSpeed: 1.3,
      type: "melee",
      tier: 3,
      imgWidth: 75,
      imgHeight: 75,
    },
  ],
  3: [
    {
      id: "u3_m",
      name: "Knight",
      ru: "Рыцарь",
      cost: 60,
      hp: 140,
      atk: 26,
      spd: 0.45,
      atkSpeed: 1.1,
      type: "melee",
      tier: 1,
      imgWidth: 65,
      imgHeight: 65,
    },
    {
      id: "u3_s",
      name: "Archer",
      ru: "Лучник",
      cost: 75,
      hp: 76,
      atk: 28,
      spd: 0.55,
      atkSpeed: 2.4,
      type: "shoot",
      range: 300,
      bulletSpeed: 420,
      bulletSize: 20,
      bulletSprite: {
        player: {
          src: "images/medievalBullet.svg",
          width: 30,
          height: 30,
        },
        enemy: {
          src: "images/medievalBulletE.svg",
          width: 30,
          height: 30,
        },
      },
      tier: 2,
      imgWidth: 70,
      imgHeight: 70,
    },
    {
      id: "u3_h",
      name: "Cavalry",
      ru: "Всадник",
      cost: 130,
      hp: 350,
      atk: 48,
      spd: 0.48,
      atkSpeed: 1.7,
      type: "melee",
      tier: 3,
      imgWidth: 75,
      imgHeight: 75,
    },
  ],
  4: [
    {
      id: "u4_m",
      name: "Line",
      ru: "Линейный",
      cost: 80,
      hp: 200,
      atk: 36,
      spd: 0.5,
      atkSpeed: 1.1,
      type: "melee",
      tier: 1,
      imgWidth: 75,
      imgHeight: 75,
    },
    {
      id: "u4_s",
      name: "Musketeer",
      ru: "Мушкетёр",
      cost: 120,
      hp: 98,
      atk: 45,
      spd: 0.5,
      atkSpeed: 2,
      type: "shoot",
      range: 350,
      bulletSpeed: 440,
      bulletSize: 20,
      bulletSprite: {
        player: {
          src: "images/enlightenmentBullet.svg",
          width: 5,
          height: 5,
        },
        enemy: {
          src: "images/enlightenmentBullet.svg",
          width: 5,
          height: 5,
        },
      },
      tier: 2,
      imgWidth: 75,
      imgHeight: 75,
    },
    {
      id: "u4_h",
      name: "Dragoon",
      ru: "Драгун",
      cost: 210,
      hp: 600,
      atk: 110,
      spd: 0.43,
      atkSpeed: 2.0,
      type: "melee",
      tier: 3,
      imgWidth: 80,
      imgHeight: 80,
    },
  ],
  5: [
    {
      id: "u5_m",
      name: "Rifle",
      ru: "Ружейник",
      cost: 110,
      hp: 320,
      atk: 46,
      spd: 0.5,
      atkSpeed: 1.0,
      type: "melee",
      tier: 1,
      imgWidth: 65,
      imgHeight: 65,
    },
    {
      id: "u5_s",
      name: "Gunner",
      ru: "Пулемётчик",
      cost: 200,
      hp: 200,
      atk: 50,
      spd: 0.36,
      atkSpeed: 1.5,
      type: "shoot",
      range: 400,
      bulletSpeed: 520,
      bulletSize: 20,
      bulletSprite: {
        player: { src: "images/modernBullet.svg", width: 5, height: 5 },
        enemy: { src: "images/modernBullet.svg", width: 5, height: 5 },
      },
      tier: 2,
      imgWidth: 65,
      imgHeight: 65,
    },
    {
      id: "u5_h",
      name: "Tank",
      ru: "Танк",
      cost: 450,
      hp: 1600,
      atk: 220,
      spd: 0.2,
      atkSpeed: 2.6,
      type: "melee",
      tier: 3,
      imgWidth: 120,
      imgHeight: 130,
      unitType: "tank",
    },
  ],
  6: [
    {
      id: "u6_m",
      name: "Jedi",
      ru: "Джедай",
      cost: 175,
      hp: 420,
      atk: 80,
      spd: 0.75,
      atkSpeed: 1.0,
      type: "melee",
      tier: 1,
      imgWidth: 65,
      imgHeight: 65,
    },
    {
      id: "u6_s",
      name: "Drone",
      ru: "Дрон",
      cost: 350,
      hp: 360,
      atk: 180,
      spd: 0.37,
      atkSpeed: 2,
      type: "shoot",
      range: 450,
      bulletSpeed: 620,
      bulletSize: 20,
      bulletSprite: {
        player: { src: "images/futureBullet.svg", width: 15, height: 15 },
        enemy: { src: "images/futureBullet.svg", width: 15, height: 15 },
      },
      tier: 2,
      imgWidth: 60,
      imgHeight: 60,
    },
    {
      id: "u6_h",
      name: "Mech",
      ru: "Мех",
      cost: 750,
      hp: 3000,
      atk: 420,
      spd: 0.32,
      atkSpeed: 2.8,
      type: "melee",
      tier: 3,
      imgWidth: 80,
      imgHeight: 80,
    },
  ],
};

// FIXED: Adjusted difficulty settings to make the game easier
const DIFF = {
  easy: {
    enemySpawnRate: 4.0,
    bossMul: 0.8,
    incomeMultiplier: 1.0,
    enemyAgeUpgradeSpeed: 0.8,
  },
  medium: {
    enemySpawnRate: 2.8,
    bossMul: 1.0,
    incomeMultiplier: 1.0,
    enemyAgeUpgradeSpeed: 1.0,
  },
  hard: {
    enemySpawnRate: 1.8, // Increased from 1.7
    bossMul: 1.2, // Reduced from 1.25
    incomeMultiplier: 1.3, // Increased from 1.2
    enemyAgeUpgradeSpeed: 1.2, // Reduced from 1.25
  },
};

const XP_REQUIRED = [200, 400, 800, 1600, 3200];

const I18N = {
  en: {
    title: "War through the Ages",
    normal: "Normal",
    bosses: "Bosses",
    settings: "Settings",
    startNormal: "Start",
    startBoss: "Start",
    chooseBossLocked: "Choose an unlocked boss",
    insufficientGold: "Not enough gold",
    notEnoughXP: "Not enough XP",
    enemyBaseDestroyed: "Enemy base destroyed!",
    bossDefeated: "Boss defeated — You win!",
    hackLocked: "Hack locked: beat all bosses",
    unlockedBoss: "Unlocked boss: ",
    paused: "Paused",
    resume: "Resume",
    returnMenu: "Return to Menu",
    victoryBoss: "Victory — Boss defeated",
    victoryBase: "Victory — enemy base destroyed (no boss)",
    defeatBase: "Defeat — your base destroyed",
    resetConfirm: "Reset progression?",
    progressReset: "Progress reset",
    killMsg: "Killed: ",
    withoutBoss: "Without boss",
    difficulty: "Difficulty: ",
    infiniteGold: "Infinite Gold",
    infiniteXP: "Infinite XP",
    pauseTime: "Pause Time",
    killEnemyUnits: "Kill All Enemy Units",
    killPlayerUnits: "Kill All Your Units",
    enemyNoSpawn: "Enemy doesn't spawn",
    hack: "Hack",
    menu: "Menu",
    upgradeAge: "Upgrade Age",
    gold: "Gold",
    xp: "XP",
    age: "Age",
    you: "YOU",
    enemy: "ENEMY",
    resumeGame: "Resume Game",
    restart: "Restart",
    toMenu: "To Menu",
    victory: "Victory",
    defeat: "Defeat",
    pleaseRotate: "Please rotate your device to landscape mode",
    rotateMessage:
      "This game works best in landscape orientation on mobile devices",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    language: "Language",
    volume: "Volume",
    unlocked: "Unlocked",
    locked: "Locked",
  },
  ru: {
    title: "Война сквозь века",
    normal: "Обычный",
    bosses: "Боссы",
    settings: "Настройки",
    startNormal: "Начать",
    startBoss: "Начать",
    chooseBossLocked: "Выберите открытого босса",
    insufficientGold: "Недостаточно золота",
    notEnoughXP: "Недостаточно XP",
    enemyBaseDestroyed: "База противника уничтожена!",
    bossDefeated: "Босс повержен — вы побеждаете!",
    hackLocked: "Хак недоступен: победите всех боссов",
    unlockedBoss: "Открыт босс: ",
    paused: "Пауза",
    resume: "Продолжить",
    returnMenu: "Вернуться в меню",
    victoryBoss: "Победа — босс повержен",
    victoryBase: "Победа — база уничтожена (без босса)",
    defeatBase: "Поражение — база уничтожена",
    resetConfirm: "Сбросить прогресс?",
    progressReset: "Прогресс сброшен",
    killMsg: "Убит: ",
    withoutBoss: "Без босса",
    difficulty: "Сложность: ",
    infiniteGold: "Бесконечное золото",
    infiniteXP: "Бесконечный XP",
    pauseTime: "Остановить время",
    killEnemyUnits: "Убить всех врагов",
    killPlayerUnits: "Убить всех своих",
    enemyNoSpawn: "Враги не появляются",
    hack: "Хак",
    menu: "Меню",
    upgradeAge: "Улучшить эпоху",
    gold: "Золото",
    xp: "Опыт",
    age: "Эпоха",
    you: "ВЫ",
    enemy: "ВРАГ",
    resumeGame: "Продолжить",
    restart: "Заново",
    toMenu: "В меню",
    victory: "Победа",
    defeat: "Поражение",
    pleaseRotate:
      "Пожалуйста, поверните устройство в альбомный (горизональный) режим",
    rotateMessage:
      "Эта игра лучше всего работает в альбомной (горизональной) ориентации на мобильных устройствах",
    easy: "Легкая",
    medium: "Средняя",
    hard: "Сложная",
    language: "Язык",
    volume: "Громкость",
    unlocked: "Открыт",
    locked: "Закрыт",
  },
};

// Game state
let state = {
  mode: null,
  difficulty: "medium",
  chosenBossId: 1,
  bossChoice: null,
  running: false,
  gold: 110,
  xp: 0,
  playerAge: 1,
  enemyAge: 1,
  playerBaseHP: HP_PER_AGE[0],
  enemyBaseHP: HP_PER_AGE[0],
  units: [],
  projectiles: [],
  time: 0,
  enemySpawnTimer: 0,
  bossActive: false,
  bossHP: 0,
  bossDefeated: false,
  enemyBaseDestroyed: false,
  enemyAgeUpgradeCooldown: 45,
  infiniteGold: false,
  infiniteXP: false,
  timeMultiplier: 1,
  volume: 0.8,
  unlocked: JSON.parse(localStorage.getItem("aow_unlocked") || "[1]"),
  lang:
    localStorage.getItem("aow_lang") ||
    (navigator.language && navigator.language.startsWith("ru") ? "ru" : "en"),
  showHPNumbers: false,
  hackEnabled: false,
  timePaused: false,
  stopEnemySpawn: false,
  currentMusic: null,
  audioEnabled: false,
  menuUnits: [],
  futureCompleted: false, // NEW: Track if Future era has been completed
};

// DOM elements
const $ = (id) => document.getElementById(id);
const menu = $("menu"),
  panelNormal = $("panelNormal"),
  panelBosses = $("panelBosses"),
  panelSettings = $("panelSettings");
const btnNormal = $("btnNormal"),
  btnBosses = $("btnBosses"),
  btnSettings = $("btnSettings");
const startNormal = $("startNormal"),
  startBoss = $("startBoss");
const bossListEl = $("bossList");
const volRange = $("vol");
const topLeft = $("topLeft"),
  topMid = $("topMid"),
  topAge = $("topAge");
const battleUnits = $("battleUnits"),
  battleEl = $("battle"),
  pHP = $("pHP"),
  eHP = $("eHP");
const goldEl = $("gold"),
  xpEl = $("xp"),
  ageText = $("ageText");
const unitButtons = $("unitButtons"),
  upgradeAge = $("upgradeAge"),
  ageCost = $("ageCost");
const speedBtns = document.querySelectorAll(".speedBtn");
const hackBtn = $("hackBtn"),
  hackPopup = $("hackPopup"),
  infGold = $("infGold"),
  infXP = $("infXP"),
  pauseTimeBtn = $("pauseTimeBtn"),
  killEnemyBtn = $("killEnemyBtn"),
  killPlayerBtn = $("killPlayerBtn"),
  stopEnemySpawn = $("stopEnemySpawn");
const menuBtn = $("menuBtn");
const pauseModal = $("pauseModal"),
  pauseCancel = $("pauseCancel"),
  pauseMenu = $("pauseMenu"),
  pauseTitle = $("pauseTitle");
const finishOverlay = $("finishOverlay"),
  finishTitle = $("finishTitle"),
  finishMessage = $("finishMessage"),
  finishRestart = $("finishRestart"),
  finishToMenu = $("finishToMenu");
const orientationWarning = $("orientationWarning");
const mainMusic = $("mainMusic"),
  bossMusic = $("bossMusic"),
  ancientMusic = $("ancientMusic"),
  antiquityMusic = $("antiquityMusic"),
  medievalMusic = $("medievalMusic"),
  enlightenmentMusic = $("enlightenmentMusic"),
  modernMusic = $("modernMusic"),
  futureMusic = $("futureMusic"),
  menuMusic = $("menuMusic");

// Helper functions
function L(key) {
  return I18N[state.lang][key] || key;
}

function enableAudio() {
  state.audioEnabled = true;
  const allMusic = [
    mainMusic,
    bossMusic,
    ancientMusic,
    antiquityMusic,
    medievalMusic,
    enlightenmentMusic,
    modernMusic,
    futureMusic,
    menuMusic,
  ];
  allMusic.forEach((music) => {
    if (music) music.volume = state.volume;
  });
  playMenuMusic();
}

function playMenuMusic() {
  if (!state.audioEnabled || state.currentMusic === "menu") return;
  stopAllMusic();
  if (!window.audioContext)
    window.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
  if (window.audioContext.state === "suspended") window.audioContext.resume();
  const menuMusicOptions = [
    ancientMusic,
    antiquityMusic,
    medievalMusic,
    enlightenmentMusic,
    modernMusic,
    futureMusic,
    mainMusic,
    menuMusic,
  ].filter((music) => music !== null);
  if (menuMusicOptions.length > 0) {
    const randomMusic =
      menuMusicOptions[Math.floor(Math.random() * menuMusicOptions.length)];
    randomMusic.volume = state.volume;
    randomMusic.loop = true;
    const playPromise = randomMusic.play();
    if (playPromise !== undefined)
      playPromise
        .then(() => {
          state.currentMusic = "menu";
        })
        .catch(() => {
          state.currentMusic = null;
        });
  }
}

function playAgeMusic(age) {
  if (!state.audioEnabled || state.currentMusic === age) return;
  stopAllMusic();
  let musicElement;
  switch (age) {
    case 1:
      musicElement = ancientMusic;
      break;
    case 2:
      musicElement = antiquityMusic;
      break;
    case 3:
      musicElement = medievalMusic;
      break;
    case 4:
      musicElement = enlightenmentMusic;
      break;
    case 5:
      musicElement = modernMusic;
      break;
    case 6:
      musicElement = futureMusic;
      break;
    default:
      musicElement = mainMusic;
  }
  if (musicElement) {
    musicElement.volume = state.volume;
    musicElement
      .play()
      .then(() => {
        state.currentMusic = age;
      })
      .catch(() => {});
  }
}

function playBossMusic() {
  if (!state.audioEnabled || state.currentMusic === "boss") return;
  stopAllMusic();
  if (bossMusic) {
    bossMusic.volume = state.volume;
    bossMusic
      .play()
      .then(() => {
        state.currentMusic = "boss";
      })
      .catch(() => {});
  }
}

function stopAllMusic() {
  const allMusic = [
    mainMusic,
    bossMusic,
    ancientMusic,
    antiquityMusic,
    medievalMusic,
    enlightenmentMusic,
    modernMusic,
    futureMusic,
    menuMusic,
  ];
  allMusic.forEach((music) => {
    if (music) {
      music.pause();
      music.currentTime = 0;
    }
  });
  state.currentMusic = null;
}

function beep(freq = 440, dur = 0.06) {
  if (!state.audioEnabled) return;
  try {
    if (!window.audioCtx)
      window.audioCtx = new (window.AudioContext ||
        window.webkitAudioContext)();
    const g = window.audioCtx.createGain();
    g.gain.value = state.volume;
    g.connect(window.audioCtx.destination);
    const o = window.audioCtx.createOscillator();
    o.type = "sine";
    o.frequency.value = freq;
    o.connect(g);
    o.start();
    setTimeout(() => {
      o.stop();
      g.disconnect();
    }, dur * 1000);
  } catch (e) {}
}

function saveLang() {
  localStorage.setItem("aow_lang", state.lang);
}
function saveUnlocked() {
  localStorage.setItem("aow_unlocked", JSON.stringify(state.unlocked));
}

function showToast(text, t = 1400) {
  const el = document.createElement("div");
  el.style.position = "fixed";
  el.style.left = "50%";
  el.style.transform = "translateX(-50%)";
  el.style.bottom = "12%";
  el.style.background = "rgba(0,0,0,0.7)";
  el.style.padding = "8px 12px";
  el.style.borderRadius = "8px";
  el.style.zIndex = 9999;
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), t);
}

// Mobile UI functions
function updateMobileUI() {
  const mobileGold = document.getElementById("mobileGold");
  const mobileXP = document.getElementById("mobileXP");
  const mobileAge = document.getElementById("mobileAge");
  const mobileAgeCost = document.getElementById("mobileAgeCost");
  const mobileBossInfo = document.getElementById("mobileBossInfo");

  if (mobileGold) {
    mobileGold.textContent = state.infiniteGold ? "∞" : Math.floor(state.gold);
  }
  if (mobileXP) {
    mobileXP.textContent = state.infiniteXP ? "∞" : Math.floor(state.xp);
  }
  if (mobileAge) {
    const ageName =
      state.lang === "ru"
        ? AGES[state.playerAge - 1].ru
        : AGES[state.playerAge - 1].name;
    mobileAge.textContent =
      ageName.length > 8 ? ageName.substring(0, 8) + "..." : ageName;
  }
  if (mobileAgeCost) {
    const cost = XP_REQUIRED[state.playerAge - 1] || 9999;
    const currentXP = state.infiniteXP ? "∞" : Math.floor(state.xp);
    mobileAgeCost.textContent = `${currentXP}/${cost}`;
  }
  if (mobileBossInfo) {
    if (state.mode === "boss" && state.bossChoice && state.bossActive) {
      mobileBossInfo.textContent =
        (state.lang === "ru" ? state.bossChoice.ru : state.bossChoice.name) +
        " • " +
        (state.lang === "ru" ? "Эпоха: " : "Age: ") +
        (state.lang === "ru"
          ? AGES[state.bossChoice.age - 1].ru
          : AGES[state.bossChoice.age - 1].name);
    } else {
      const diffText =
        state.lang === "ru"
          ? state.difficulty === "easy"
            ? "Легкая"
            : state.difficulty === "medium"
            ? "Средняя"
            : "Сложная"
          : state.difficulty;
      mobileBossInfo.textContent =
        (state.mode === "none"
          ? L("withoutBoss")
          : state.bossChoice
          ? state.lang === "ru"
            ? state.bossChoice.ru
            : state.bossChoice.name
          : L("withoutBoss")) +
        " • " +
        L("difficulty") +
        diffText +
        " • " +
        (state.lang === "ru" ? "Эпоха врага: " : "Enemy age: ") +
        (state.lang === "ru"
          ? AGES[state.enemyAge - 1].ru
          : AGES[state.enemyAge - 1].name);
    }
  }
}

function buildMobileUnitButtons() {
  const mobileUnitButtons = document.getElementById("mobileUnitButtons");
  if (!mobileUnitButtons) return;

  mobileUnitButtons.innerHTML = "";
  const list = UNIT_TEMPLATES[state.playerAge] || [];
  const costMultiplier = 1 + (state.playerAge - 1) * 0.18;

  list.forEach((t) => {
    const b = document.createElement("div");
    b.className = "mobile-unit-btn";
    const displayCost = Math.round(t.cost * costMultiplier);

    const unitName = document.createElement("div");
    unitName.className = "unit-name";
    unitName.textContent = state.lang === "ru" && t.ru ? t.ru : t.name;

    const unitCost = document.createElement("div");
    unitCost.className = "unit-cost";
    unitCost.textContent = "$" + displayCost;

    b.appendChild(unitName);
    b.appendChild(unitCost);

    b.onclick = () => spawnUnit("player", t);
    mobileUnitButtons.appendChild(b);
  });
}

function initializeMobileControls() {
  // Mobile upgrade button
  const mobileUpgradeAge = document.getElementById("mobileUpgradeAge");
  if (mobileUpgradeAge) {
    mobileUpgradeAge.onclick = () => {
      if (state.playerAge >= AGES.length) {
        showToast(
          state.lang === "ru"
            ? "Максимальная эпоха достигнута!"
            : "Maximum age reached!"
        );
        return;
      }
      const cost = XP_REQUIRED[state.playerAge - 1] || 9999;
      if (state.infiniteXP || state.xp >= cost) {
        if (!state.infiniteXP) state.xp -= cost;
        state.playerAge++;
        state.playerBaseHP = HP_PER_AGE[state.playerAge - 1];
        buildUnitButtons();
        buildMobileUnitButtons();
        playAgeMusic(state.playerAge);
        updateUI();
        updateMobileUI();
        showToast(
          (state.lang === "ru" ? "Переход в эпоху: " : "Upgraded to ") +
            (state.lang === "ru"
              ? AGES[state.playerAge - 1].ru
              : AGES[state.playerAge - 1].name)
        );
        if (state.playerAge >= AGES.length) {
          upgradeAge.style.display = "none";
          if (mobileUpgradeAge) mobileUpgradeAge.style.display = "none";
          showToast(
            state.lang === "ru"
              ? "Технологический предел достигнут!"
              : "Technological limit reached!"
          );
        }
      } else {
        showToast(L("notEnoughXP"));
      }
    };
  }

  // Mobile speed buttons
  const mobileSpeedBtns = document.querySelectorAll(".mobile-speed-btn");
  mobileSpeedBtns.forEach((btn) => {
    btn.onclick = () => {
      state.timeMultiplier = parseFloat(btn.dataset.speed);
      document
        .querySelectorAll(".mobile-speed-btn")
        .forEach((x) => x.classList.remove("active"));
      document
        .querySelectorAll(".speedBtn")
        .forEach((x) => x.classList.remove("active"));
      btn.classList.add("active");
      document
        .querySelector(`.speedBtn[data-speed="${btn.dataset.speed}"]`)
        .classList.add("active");
      showToast("x" + btn.dataset.speed, 700);
    };
  });

  // Mobile menu button
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  if (mobileMenuBtn) {
    mobileMenuBtn.onclick = () => {
      pauseTitle.textContent = L("paused");
      pauseModal.style.display = "flex";
      pauseModal._wasRunning = state.running;
      state.running = false;
    };
  }

  // Mobile hack button
  const mobileHackBtn = document.getElementById("mobileHackBtn");
  if (mobileHackBtn) {
    mobileHackBtn.onclick = () => {
      if (!state.hackEnabled) {
        showToast(state.lang === "ru" ? "Хак недоступен" : "Hack locked");
        return;
      }
      hackPopup.style.display =
        hackPopup.style.display === "flex" ? "none" : "flex";
    };
  }
}

// Game initialization
function createMenuBackground() {
  const menuBackground = document.createElement("div");
  menuBackground.id = "menuBackground";
  document.body.appendChild(menuBackground);
  spawnMenuUnits();
}

function spawnMenuUnits() {
  updateUI();
  if (!state.running && document.getElementById("menuBackground")) {
    const allUnits = [];
    for (let age = 1; age <= 6; age++) {
      const ageUnits = UNIT_TEMPLATES[age] || [];
      ageUnits.forEach((unit) => allUnits.push(unit));
    }
    const unitTemplate = allUnits[Math.floor(Math.random() * allUnits.length)];
    const unitEl = document.createElement("div");
    unitEl.className = "menu-unit";
    const img = document.createElement("img");
    img.src = `images/${unitTemplate.name.toLowerCase()}.svg`;
    img.alt = unitTemplate.name;
    unitEl.appendChild(img);
    const size = 80 + Math.random() * 70;
    unitEl.style.width = `${size}px`;
    unitEl.style.height = `${size}px`;
    unitEl.style.left = `-${size}px`;
    unitEl.style.top = `${10 + Math.random() * 80}%`;
    document.getElementById("menuBackground").appendChild(unitEl);
    const duration = 15 + Math.random() * 25;
    unitEl.style.transition = `left ${duration}s linear`;
    setTimeout(() => {
      unitEl.style.left = "100%";
    }, 10);
    setTimeout(() => {
      if (unitEl.parentNode) unitEl.parentNode.removeChild(unitEl);
    }, duration * 1000 + 10);
    state.menuUnits.push(unitEl);
    const nextSpawn = 500 + Math.random() * 2000;
    setTimeout(spawnMenuUnits, nextSpawn);
  }
}

function clearMenuBackground() {
  state.menuUnits.forEach((unit) => {
    if (unit.parentNode) unit.parentNode.removeChild(unit);
  });
  state.menuUnits = [];
  const menuBackground = document.getElementById("menuBackground");
  if (menuBackground) menuBackground.parentNode.removeChild(menuBackground);
}

function initializeLanguageSwitcher() {
  const langOptions = document.querySelectorAll(".lang-option");
  langOptions.forEach((option) => {
    option.classList.remove("active");
  });
  langOptions.forEach((option) => {
    if (option.dataset.lang === state.lang) option.classList.add("active");
    option.onclick = () => {
      document.querySelectorAll(".lang-option").forEach((opt) => {
        opt.classList.remove("active");
      });
      option.classList.add("active");
      state.lang = option.dataset.lang;
      saveLang();
      buildBossList();
      updateTop();
      buildUnitButtons();
      buildMobileUnitButtons();
      updateUI();
      localizeText();
      showToast(
        state.lang === "ru"
          ? "Язык изменен на Русский"
          : "Language changed to English",
        1500
      );
    };
  });
}

function initializeHackMenu() {
  if (!hackBtn || !hackPopup) return;
  hackBtn.onclick = () => {
    if (!state.hackEnabled) {
      showToast(state.lang === "ru" ? "Хак недоступен" : "Hack locked");
      return;
    }
    hackPopup.style.display =
      hackPopup.style.display === "flex" ? "none" : "flex";
  };
  if (infGold)
    infGold.onchange = () => {
      state.infiniteGold = infGold.checked;
      showToast(state.infiniteGold ? "Infinite Gold" : "Gold normal");
    };
  if (infXP)
    infXP.onchange = () => {
      state.infiniteXP = infXP.checked;
      showToast(state.infiniteXP ? "Infinite XP" : "XP normal");
    };
  if (stopEnemySpawn)
    stopEnemySpawn.onchange = () => {
      state.stopEnemySpawn = stopEnemySpawn.checked;
      showToast(
        state.stopEnemySpawn ? "Enemy spawn stopped" : "Enemy spawn enabled"
      );
    };
  if (pauseTimeBtn)
    pauseTimeBtn.onclick = () => {
      state.timePaused = !state.timePaused;
      pauseTimeBtn.textContent = state.timePaused ? "Continue" : "Pause Time";
      showToast(state.timePaused ? "Time Paused" : "Time Resumed");
    };
  if (killEnemyBtn)
    killEnemyBtn.onclick = () => {
      for (let i = state.units.length - 1; i >= 0; i--) {
        if (state.units[i].side === "enemy") {
          try {
            state.units[i].el.remove();
          } catch (e) {}
          state.units.splice(i, 1);
        }
      }
      showToast("All enemy units killed");
    };
  if (killPlayerBtn)
    killPlayerBtn.onclick = () => {
      for (let i = state.units.length - 1; i >= 0; i--) {
        if (state.units[i].side === "player") {
          try {
            state.units[i].el.remove();
          } catch (e) {}
          state.units.splice(i, 1);
        }
      }
      showToast("All player units killed");
    };
}

function initializeSpeedButtons() {
  speedBtns.forEach((btn) => {
    btn.onclick = () => {
      state.timeMultiplier = parseFloat(btn.dataset.speed);
      document
        .querySelectorAll(".speedBtn")
        .forEach((x) => x.classList.remove("active"));
      btn.classList.add("active");
      showToast("x" + btn.dataset.speed, 700);
    };
  });
}

function initializeMenuButton() {
  if (menuBtn) {
    menuBtn.onclick = () => {
      pauseTitle.textContent = L("paused");
      pauseModal.style.display = "flex";
      pauseModal._wasRunning = state.running;
      state.running = false;
    };
  }
}

// Add double click functionality to boss selection
function initializeBossDoubleClick() {
  const bossItems = document.querySelectorAll(".boss-item");
  let clickTimer = null;

  bossItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (clickTimer === null) {
        clickTimer = setTimeout(() => {
          // Single click behavior
          const bossId = this.getAttribute("data-boss-id");
          if (bossId) {
            state.chosenBossId = parseInt(bossId);
            state.bossChoice = BOSSES.find((b) => b.id === state.chosenBossId);
            highlightSelected();
            updateTop();
          }
          clickTimer = null;
        }, 300);
      } else {
        clearTimeout(clickTimer);
        clickTimer = null;

        // Double click behavior - start game
        this.classList.add("boss-double-click");
        setTimeout(() => this.classList.remove("boss-double-click"), 600);

        const bossId = this.getAttribute("data-boss-id");
        if (bossId) {
          const boss = BOSSES.find((b) => b.id === parseInt(bossId));
          if (boss && state.unlocked.includes(boss.id)) {
            state.chosenBossId = boss.id;
            state.bossChoice = boss;
            startBossGame();
          } else {
            showToast(state.lang === "ru" ? "Босс закрыт" : "Boss locked");
          }
        }
      }
    });
  });
}

function buildBossList() {
  if (!bossListEl) return;
  bossListEl.innerHTML = "";
  BOSSES.forEach((b, i) => {
    const unlocked = state.unlocked.includes(b.id);
    const row = document.createElement("div");
    row.className =
      "boss-item" + (state.chosenBossId === b.id ? " selected" : "");
    row.setAttribute("data-boss-id", b.id);
    if (!unlocked) row.classList.add("locked");

    // Single click for selection
    row.onclick = null; // We'll handle via the double click system

    const bossInfo = document.createElement("div");
    bossInfo.className = "boss-info";

    const bossName = document.createElement("div");
    bossName.className = "boss-name";
    bossName.textContent = state.lang === "ru" ? b.ru : b.name;

    const bossAge = document.createElement("div");
    bossAge.className = "boss-age";
    bossAge.textContent =
      state.lang === "ru" ? AGES[b.age - 1].ru : AGES[b.age - 1].name;

    bossInfo.appendChild(bossName);
    bossInfo.appendChild(bossAge);

    const bossStatus = document.createElement("div");
    bossStatus.className = "boss-status";
    bossStatus.textContent = unlocked ? L("unlocked") : L("locked");

    row.appendChild(bossInfo);
    row.appendChild(bossStatus);
    bossListEl.appendChild(row);
  });
  highlightSelected();
  initializeBossDoubleClick();
}

function highlightSelected() {
  if (!bossListEl) return;
  Array.from(bossListEl.children).forEach((el, i) => {
    const boss = BOSSES[i];
    if (boss && boss.id === state.chosenBossId) el.classList.add("selected");
    else el.classList.remove("selected");
  });
}

function updateTop() {
  if (!topLeft || !topMid || !topAge) return;
  if (state.mode === "boss" && state.bossChoice && state.bossActive) {
    topLeft.textContent =
      state.lang === "ru" ? state.bossChoice.ru : state.bossChoice.name;
    topMid.textContent = "";
    topAge.textContent =
      (state.lang === "ru" ? "Эпоха врага: " : "Enemy age: ") +
      (state.lang === "ru"
        ? AGES[state.bossChoice.age - 1].ru
        : AGES[state.bossChoice.age - 1].name);
  } else {
    topLeft.textContent =
      state.mode === "none"
        ? L("withoutBoss")
        : state.bossChoice
        ? state.lang === "ru"
          ? state.bossChoice.ru
          : state.bossChoice.name
        : L("withoutBoss");
    const diffText =
      state.lang === "ru"
        ? state.difficulty === "easy"
          ? "Легкая"
          : state.difficulty === "medium"
          ? "Средняя"
          : "Сложная"
        : state.difficulty;
    topMid.textContent =
      (state.mode === "boss" ? "" : L("difficulty")) +
      (state.mode === "boss" ? "" : diffText);
    topAge.textContent =
      (state.lang === "ru" ? "Эпоха врага: " : "Enemy age: ") +
      (state.lang === "ru"
        ? AGES[state.enemyAge - 1].ru
        : AGES[state.enemyAge - 1].name);
  }
}

function buildUnitButtons() {
  if (!unitButtons) return;
  unitButtons.innerHTML = "";
  const list = UNIT_TEMPLATES[state.playerAge] || [];
  const costMultiplier = 1 + (state.playerAge - 1) * 0.18;
  list.forEach((t) => {
    const b = document.createElement("div");
    b.className = "unit-btn";
    const displayCost = Math.round(t.cost * costMultiplier);
    const unitName = document.createElement("div");
    unitName.className = "unit-name";
    unitName.textContent = state.lang === "ru" && t.ru ? t.ru : t.name;
    const unitCost = document.createElement("div");
    unitCost.className = "unit-cost";
    unitCost.textContent = "$" + displayCost;
    b.appendChild(unitName);
    b.appendChild(unitCost);
    b.onclick = () => spawnUnit("player", t);
    unitButtons.appendChild(b);
  });
  checkUnitButtonsFit();
}

function checkUnitButtonsFit() {
  if (!unitButtons) return;
  const buttons = unitButtons.querySelectorAll(".unit-btn");
  let totalWidth = 0;
  buttons.forEach((btn) => {
    totalWidth += btn.offsetWidth + 8;
  });
  totalWidth += 16;
  if (totalWidth <= unitButtons.offsetWidth)
    unitButtons.classList.add("no-scroll");
  else unitButtons.classList.remove("no-scroll");
}

function spawnUnit(side, template) {
  updateUI();
  if (side === "player") {
    const costMultiplier = 1 + (state.playerAge - 1) * 0.18;
    const effectiveCost = Math.round((template.cost || 0) * costMultiplier);
    if (!state.infiniteGold && state.gold < effectiveCost) {
      showToast(L("insufficientGold"));
      return;
    }
    if (!state.infiniteGold) state.gold -= effectiveCost;
    updateUI();
  }
  const battleRect = battleEl.getBoundingClientRect();
  const el = document.createElement("div");
  el.className = "unit " + (side === "player" ? "player" : "enemy");
  el.style.width = (template.imgWidth || 60) + "px";
  el.style.height = (template.imgHeight || 60) + "px";
  if (template.unitType === "tank") el.setAttribute("data-unit-type", "tank");
  const img = document.createElement("img");
  const imageName = template.name.toLowerCase();
  img.src = `images/${imageName}${side === "enemy" ? "E" : ""}.svg`;
  img.alt = template.name;
  el.appendChild(img);
  const hpBar = document.createElement("div");
  hpBar.className = "hpBar";
  const hpFill = document.createElement("div");
  hpFill.className = "hpFill";
  hpBar.appendChild(hpFill);
  el.appendChild(hpBar);
  if (battleUnits) battleUnits.appendChild(el);
  const startX = side === "player" ? 100 : battleRect.width - 160;
  const unitHP = template.hp || 60;
  const u = {
    id: Math.random().toString(36).slice(2, 9),
    template,
    side,
    hp: unitHP,
    maxHp: unitHP,
    atk: template.atk,
    spd: template.spd,
    x: startX,
    width: template.imgWidth || 60,
    el,
    atkTimer: 0,
    atkSpeed: template.atkSpeed || 1.0,
    isBoss: false,
    age: side === "player" ? state.playerAge : state.enemyAge,
    attackingBase: false,
    target: null,
  };
  state.units.push(u);
  renderAll();
}

function createProjectile(fromUnit, target) {
  const br = battleEl.getBoundingClientRect();
  const startX =
    fromUnit.x + (fromUnit.side === "player" ? fromUnit.width : -6);
  const el = document.createElement("div");
  el.className = "proj";
  el.style.width = (fromUnit.template.bulletSize || 20) + "px";
  el.style.height = (fromUnit.template.bulletSize || 20) + "px";
  el.style.left = startX + "px";
  el.style.bottom = fromUnit.isBoss ? "20%" : "18%";
  const img = document.createElement("img");
  const bulletSprite = fromUnit.template.bulletSprite;
  if (bulletSprite) {
    if (bulletSprite.player && bulletSprite.enemy)
      img.src =
        fromUnit.side === "player"
          ? bulletSprite.player.src
          : bulletSprite.enemy.src;
    else img.src = bulletSprite.src;
    img.alt = "bullet";
    el.appendChild(img);
  } else {
    el.style.background = fromUnit.side === "player" ? "#ffd27a" : "#ffd2d2";
    el.style.borderRadius = "50%";
  }
  if (battleUnits) battleUnits.appendChild(el);
  let targetRef = null;
  let targetX = null;
  if (typeof target === "object" && target !== null) {
    if (target.id === "BOSS") {
      targetRef = state.units.find((u) => u.isBoss) || null;
      targetX = targetRef
        ? targetRef.x
        : fromUnit.side === "player"
        ? br.width - 160
        : 140;
    } else {
      targetRef = target;
      targetX = targetRef.x;
    }
  } else if (typeof target === "number") targetX = target;
  else targetX = fromUnit.side === "player" ? br.width - 160 : 140;
  const proj = {
    el,
    x: startX,
    from: fromUnit.side,
    targetRef,
    targetX,
    speed: fromUnit.template.bulletSpeed || 420,
    dmg: Math.max(1, Math.round(fromUnit.atk * 0.92)),
    life: 3,
  };
  state.projectiles.push(proj);
}

function updateProjectiles(dt) {
  if (!state.projectiles.length) return;
  const br = battleEl.getBoundingClientRect();
  for (let i = state.projectiles.length - 1; i >= 0; i--) {
    const p = state.projectiles[i];
    p.life -= dt;
    if (p.targetRef) {
      const alive = state.units.find((u) => u === p.targetRef);
      if (!alive || (p.targetRef.hp !== undefined && p.targetRef.hp <= 0)) {
        p.targetRef = null;
        p.targetX = p.from === "player" ? br.width - 160 : 140;
      } else p.targetX = p.targetRef.x;
    }
    if (p.life <= 0) {
      try {
        p.el.remove();
      } catch (e) {}
      state.projectiles.splice(i, 1);
      continue;
    }
    const dir = p.targetX > p.x ? 1 : -1;
    p.x += dir * p.speed * dt;
    p.el.style.left = p.x + "px";
    let hit = false;
    for (const u of state.units) {
      if (u.side === p.from) continue;
      if (Math.abs(u.x - p.x) < 18) {
        if (u.isBoss) {
          state.bossHP -= p.dmg;
          const bo = state.units.find((z) => z.isBoss);
          if (bo) bo.hp = state.bossHP;
          if (state.bossHP <= 0) onBossDefeated();
        } else u.hp -= p.dmg;
        hit = true;
        break;
      }
    }
    if (!hit) {
      if (p.from === "player" && p.x >= br.width - 160) {
        if (state.bossActive) {
          state.bossHP -= p.dmg;
          const bo = state.units.find((z) => z.isBoss);
          if (bo) bo.hp = state.bossHP;
          if (state.bossHP <= 0) onBossDefeated();
        } else state.enemyBaseHP -= p.dmg;
        hit = true;
      } else if (p.from === "enemy" && p.x <= 140) {
        state.playerBaseHP -= p.dmg;
        hit = true;
      }
    }
    if (hit || p.x < 20 || p.x > br.width - 20) {
      try {
        p.el.remove();
      } catch (e) {}
      state.projectiles.splice(i, 1);
    }
  }
}

function findNearest(u) {
  let best = null,
    bd = Infinity;
  for (const o of state.units) {
    if (o.side === u.side) continue;
    if (o.hp <= 0) continue;
    const d = Math.abs(o.x - u.x);
    if (d < bd) {
      bd = d;
      best = o;
    }
  }
  if (!best && state.bossActive && u.side === "player") {
    const bossObj = state.units.find((z) => z.isBoss);
    if (bossObj) return bossObj;
    return {
      id: "BOSS",
      isBoss: true,
      x: battleEl.clientWidth - 120,
      hp: state.bossHP,
      side: "enemy",
    };
  }
  return best;
}

function updateUnits(dt) {
  const bw = battleEl.clientWidth;
  for (const u of state.units) {
    if (u.target && (u.target.hp <= 0 || !state.units.includes(u.target))) {
      u.target = null;
      u.attackingBase = false;
    }
  }
  for (const u of state.units) {
    if (u.attackingBase) {
      u.atkTimer += dt;
      if (u.atkTimer >= u.atkSpeed) {
        if (u.side === "player") {
          if (state.bossActive) {
            state.bossHP -= u.atk;
            const bo = state.units.find((z) => z.isBoss);
            if (bo) bo.hp = state.bossHP;
            if (state.bossHP <= 0) onBossDefeated();
          } else state.enemyBaseHP -= u.atk;
        } else state.playerBaseHP -= u.atk;
        u.atkTimer = 0;
      }
      continue;
    }
    if (u.side === "player") {
      const target = findNearest(u);
      u.target = target;
      if (u.template.type === "shoot") {
        const aim = target || null;
        const tx = aim ? (aim.x !== undefined ? aim.x : bw - 140) : bw - 140;
        const dist = Math.abs(tx - u.x);
        if (dist <= (u.template.range || 320)) {
          u.atkTimer += dt;
          if (u.atkTimer >= u.atkSpeed) {
            createProjectile(u, aim || tx);
            u.atkTimer = 0;
          }
        } else u.x += u.spd * 60 * dt;
      } else {
        if (target && Math.abs(target.x - u.x) <= 36) {
          u.atkTimer += dt;
          if (u.atkTimer >= u.atkSpeed) {
            if (target.isBoss) {
              state.bossHP -= u.atk;
              const bo = state.units.find((z) => z.isBoss);
              if (bo) bo.hp = state.bossHP;
              if (state.bossHP <= 0) onBossDefeated();
            } else target.hp -= u.atk;
            u.atkTimer = 0;
          }
        } else {
          u.x += u.spd * 60 * dt;
          if (u.x + u.width >= bw - 160) {
            u.attackingBase = true;
            u.x = bw - 160 - u.width;
          }
        }
      }
    } else {
      const target = findNearest(u);
      u.target = target;
      if (u.template.type === "shoot") {
        const aim = target || null;
        const tx = aim ? (aim.x !== undefined ? aim.x : 140) : 140;
        const dist = Math.abs(tx - u.x);
        if (dist <= (u.template.range || 320)) {
          u.atkTimer += dt;
          if (u.atkTimer >= u.atkSpeed) {
            createProjectile(u, aim || tx);
            u.atkTimer = 0;
          }
        } else u.x -= u.spd * 60 * dt;
      } else {
        if (target && Math.abs(target.x - u.x) <= 36) {
          u.atkTimer += dt;
          if (u.atkTimer >= u.atkSpeed) {
            if (!target.isBoss) target.hp -= u.atk;
            else {
              state.bossHP -= u.atk;
              const bo = state.units.find((z) => z.isBoss);
              if (bo) bo.hp = state.bossHP;
              if (state.bossHP <= 0) onBossDefeated();
            }
            u.atkTimer = 0;
          }
        } else {
          u.x -= u.spd * 60 * dt;
          if (u.x <= 100) {
            u.attackingBase = true;
            u.x = 100;
          }
        }
      }
    }
  }
  for (let i = 0; i < state.units.length; i++) {
    for (let j = i + 1; j < state.units.length; j++) {
      const a = state.units[i],
        b = state.units[j];
      if (!a || !b || a.side === b.side) continue;
      if (Math.abs(a.x - b.x) < 36) {
        if (a.isBoss) {
          b.hp -= a.atk * 0.04;
          state.bossHP -= a.atk * 0.04;
        } else b.hp -= a.atk * 0.02;
        if (b.isBoss) {
          a.hp -= b.atk * 0.04;
          state.bossHP -= b.atk * 0.04;
        } else a.hp -= b.atk * 0.02;
      }
    }
  }
  const boss = state.units.find((u) => u.isBoss);
  if (boss) {
    if (
      boss.target &&
      (boss.target.hp <= 0 || !state.units.includes(boss.target))
    ) {
      boss.target = null;
      boss.attackingBase = false;
    }
    if (!boss.attackingBase) {
      const target = findNearest(boss);
      boss.target = target;
      if (target) {
        if (Math.abs(target.x - boss.x) > 50) boss.x -= boss.spd * 60 * dt;
      } else {
        boss.x -= boss.spd * 60 * dt;
        if (boss.x <= 100) {
          boss.attackingBase = true;
          boss.x = 100;
        }
      }
    }
  }
  for (let k = state.units.length - 1; k >= 0; k--) {
    const u = state.units[k];
    if (u.hp <= 0) {
      const died = state.units.splice(k, 1)[0];
      try {
        if (died.el) died.el.remove();
      } catch (e) {}
      if (died.isBoss) {
        state.bossHP = 0;
        onBossDefeated();
      } else if (died.side === "enemy" && !state.infiniteXP) {
        const baseCost = died.template.cost || 60;
        let xpMul = 0.4;
        let ageMultiplier = state.playerAge * 1.5;
        xpMul *= ageMultiplier;
        if (state.bossChoice && state.bossChoice.age === 3) xpMul = 1.25;
        if (state.bossChoice && state.bossChoice.age >= 4) xpMul = 1.2;
        if (state.bossChoice && state.bossChoice.age === 6) xpMul = 2;
        const xpGain = Math.round(baseCost * xpMul);
        const goldGain = Math.round(
          baseCost * (0.15 * (died.template.tier || 1)) +
            (died.age * 2.5 || 1) * 10
        );
        state.xp += xpGain;
        state.gold += goldGain;
        showToast(
          L("killMsg") +
            (state.lang === "ru" && died.template.ru
              ? died.template.ru
              : died.template.name) +
            " +" +
            xpGain +
            " XP",
          900
        );
        updateUI();
      }
    }
  }
}

let bossWaveTimer = 0;
function bossWaveTick(dt) {
  if (state.mode !== "boss") return;
  if (state.enemyBaseDestroyed) return;
  if (!state.bossChoice) return;
  if (state.stopEnemySpawn) return;

  bossWaveTimer -= dt;
  if (bossWaveTimer > 0) return;

  const elapsed = state.time;
  const bossId = state.bossChoice.id;

  // All bosses start with 0.8 acceleration and scale up to 1.35
  if (!state.bossChoice.initialized) {
    state.bossChoice.accel = 0.8;
    state.bossChoice.initialized = true;
  }

  if (bossId <= 3) {
    if (elapsed >= 20 && state.bossChoice.accelPhase === 0) {
      state.bossChoice.accel = 0.9;
      state.bossChoice.accelPhase = 1;
    } else if (elapsed >= 40 && state.bossChoice.accelPhase === 1) {
      state.bossChoice.accel = 1.0;
      state.bossChoice.accelPhase = 2;
    } else if (elapsed >= 60 && state.bossChoice.accelPhase === 2) {
      state.bossChoice.accel = 1.15;
      state.bossChoice.accelPhase = 3;
    } else if (elapsed >= 80 && state.bossChoice.accelPhase === 3) {
      state.bossChoice.accel = 1.25;
      state.bossChoice.accelPhase = 4;
    } else if (elapsed >= 100 && state.bossChoice.accelPhase === 3) {
      state.bossChoice.accel = 1.35;
      state.bossChoice.accelPhase = 4;
    }
  } else if (bossId === 4) {
    if (elapsed >= 25 && state.bossChoice.accelPhase === 0) {
      state.bossChoice.accel = 0.9;
      state.bossChoice.accelPhase = 1;
    } else if (elapsed >= 50 && state.bossChoice.accelPhase === 1) {
      state.bossChoice.accel = 1.15;
      state.bossChoice.accelPhase = 2;
    } else if (elapsed >= 80 && state.bossChoice.accelPhase === 2) {
      state.bossChoice.accel = 1.35;
      state.bossChoice.accelPhase = 3;
    } else if (elapsed >= 120 && state.bossChoice.accelPhase === 3) {
      state.bossChoice.accel = 1.5;
      state.bossChoice.accelPhase = 4;
    } else if (elapsed >= 160 && state.bossChoice.accelPhase === 4) {
      state.bossChoice.accel = 1.7;
      state.bossChoice.accelPhase = 5;
    } else if (elapsed >= 200 && state.bossChoice.accelPhase === 5) {
      state.bossChoice.accel = 2;
      state.bossChoice.accelPhase = 6;
    }
  } else if (bossId === 5) {
    if (elapsed >= 25 && state.bossChoice.accelPhase === 0) {
      state.bossChoice.accel = 0.9;
      state.bossChoice.accelPhase = 1;
    } else if (elapsed >= 50 && state.bossChoice.accelPhase === 1) {
      state.bossChoice.accel = 1;
      state.bossChoice.accelPhase = 2;
    } else if (elapsed >= 80 && state.bossChoice.accelPhase === 2) {
      state.bossChoice.accel = 1.15;
      state.bossChoice.accelPhase = 3;
    } else if (elapsed >= 100 && state.bossChoice.accelPhase === 3) {
      state.bossChoice.accel = 1.45;
      state.bossChoice.accelPhase = 4;
    } else if (elapsed >= 140 && state.bossChoice.accelPhase === 3) {
      state.bossChoice.accel = 1.5;
      state.bossChoice.accelPhase = 5;
    } else if (elapsed >= 190 && state.bossChoice.accelPhase === 3) {
      state.bossChoice.accel = 1.7;
      state.bossChoice.accelPhase = 6;
    }
  } else if (bossId === 6) {
    if (elapsed >= 15 && state.bossChoice.accelPhase === 0) {
      state.bossChoice.accel = 1.8;
      state.bossChoice.accelPhase = 1;
    } else if (elapsed >= 65 && state.bossChoice.accelPhase === 1) {
      state.bossChoice.accel = 1.2;
      state.bossChoice.accelPhase = 2;
    } else if (elapsed >= 90 && state.bossChoice.accelPhase === 2) {
      state.bossChoice.accel = 1.5;
      state.bossChoice.accelPhase = 3;
    } else if (elapsed >= 130 && state.bossChoice.accelPhase === 3) {
      state.bossChoice.accel = 1.6;
      state.bossChoice.accelPhase = 4;
    } else if (elapsed >= 190 && state.bossChoice.accelPhase === 4) {
      state.bossChoice.accel = 2;
      state.bossChoice.accelPhase = 5;
    }
  }

  // Get spawn rules based on elapsed time
  const rules = state.bossChoice.spawnRules || {
    allowMediumAfter: 30,
    allowHeavyAfter: 60,
  };

  let allowedTiers;
  if (elapsed < (rules.allowMediumAfter || 30)) allowedTiers = [1];
  else if (elapsed < (rules.allowHeavyAfter || rules.allowMediumAfter + 30))
    allowedTiers = [1, 2];
  else allowedTiers = [1, 2, 3];

  const templates = UNIT_TEMPLATES[state.bossChoice.age] || UNIT_TEMPLATES[1];

  // Simple unit selection logic
  let pool = templates.filter((t) => allowedTiers.includes(t.tier));

  // Ensure we have units to spawn
  if (pool.length === 0) pool = templates.filter((t) => t.tier === 1);
  if (pool.length === 0) pool = [templates[0]];

  const templ = pool[Math.floor(Math.random() * pool.length)];

  // Calculate spawn interval with boss acceleration
  const bossAgeFactor = 1 + state.bossChoice.age * 0.3;
  const bossAccel = state.bossChoice.accel || 0.8;
  let interval = 1.6 * bossAgeFactor * (0.7 + Math.random() * 0.9);
  interval /= bossAccel;

  const diffFactor =
    { easy: 1.25, medium: 1.0, hard: 0.78 }[state.difficulty] || 1.0;
  interval *= diffFactor;

  bossWaveTimer = Math.max(0.6, interval);
  spawnUnit("enemy", templ);
}

function activateBoss() {
  state.bossActive = true;
  state.bossChoice =
    BOSSES.find((b) => b.id === state.chosenBossId) || BOSSES[0];
  const diffMul = DIFF[state.difficulty].bossMul || 1.0;
  state.bossHP = Math.round(state.bossChoice.baseHP * diffMul);
  state.enemyBaseDestroyed = true;
  playBossMusic();
  const br = battleEl.getBoundingClientRect();
  const el = document.createElement("div");
  el.className = "bossUnit";
  el.style.width = (state.bossChoice.imgWidth || 100) + "px";
  el.style.height = (state.bossChoice.imgHeight || 100) + "px";

  // Add data-boss attributes for positioning
  if (state.bossChoice.name === "Kronos")
    el.setAttribute("data-boss", "kronos");
  else if (state.bossChoice.name === "Yuri Caesar")
    el.setAttribute("data-boss", "yuri-caesar");
  else if (state.bossChoice.name === "Ivan the Terrible")
    el.setAttribute("data-boss", "ivan");
  else if (state.bossChoice.name === "Napoleon Bonaparte")
    el.setAttribute("data-boss", "napoleon");
  else if (state.bossChoice.name === "Adolf Hitler")
    el.setAttribute("data-boss", "hitler");
  else if (state.bossChoice.name === "Lord Yaroslav")
    el.setAttribute("data-boss", "lord-yaroslav");

  const img = document.createElement("img");

  // Handle image loading with spaces in names
  let imageName;
  switch (state.bossChoice.name) {
    case "Kronos":
      imageName = "Kronos";
      break;
    case "Yuri Caesar":
      imageName = "Yuri Caesar"; // or "yuri caesar" if you kept spaces
      break;
    case "Ivan the Terrible":
      imageName = "Ivan the Terrible"; // keep spaces
      break;
    case "Napoleon Bonaparte":
      imageName = "Napoleon Bonaparte"; // keep spaces
      break;
    case "Adolf Hitler":
      imageName = "Adolf Hitler"; // or "adolf hitler" with spaces
      break;
    case "Lord Yaroslav":
      imageName = "Lord Yaroslav"; // keep spaces
      break;
    default:
      imageName = state.bossChoice.name.toLowerCase();
  }

  const imagePath = `images/${imageName}.svg`;
  console.log(
    "Loading boss image:",
    imagePath,
    "for boss:",
    state.bossChoice.name
  );

  img.src = imagePath;
  img.alt = state.bossChoice.name;

  // Add error handling with multiple fallbacks
  img.onerror = function () {
    console.error("Failed to load boss image:", imagePath);

    // Try different filename formats
    const fallbacks = [
      imageName.replace(/\s+/g, "-"), // spaces to hyphens
      imageName.replace(/\s+/g, ""), // remove spaces
      state.bossChoice.name.toLowerCase().replace(/\s+/g, "-"),
      state.bossChoice.name.toLowerCase().replace(/\s+/g, ""),
      "kronos", // ultimate fallback
    ];

    let currentFallback = 0;
    const tryNextFallback = () => {
      if (currentFallback < fallbacks.length) {
        const fallbackPath = `images/${fallbacks[currentFallback]}.svg`;
        console.log("Trying fallback:", fallbackPath);
        img.src = fallbackPath;
        currentFallback++;
      }
    };

    img.onerror = tryNextFallback;
    tryNextFallback();
  };

  el.appendChild(img);
  const hpBar = document.createElement("div");
  hpBar.className = "hpBar";
  const hpFill = document.createElement("div");
  hpFill.className = "hpFill";
  hpBar.appendChild(hpFill);
  el.appendChild(hpBar);
  if (battleUnits) battleUnits.appendChild(el);
  const bossObj = {
    id: "BOSS",
    template: state.bossChoice,
    side: "enemy",
    hp: state.bossHP,
    maxHp: state.bossHP,
    atk: Math.max(50, Math.floor(state.bossChoice.baseHP / 20)),
    spd: 0.25,
    x: br.width - 200,
    width: state.bossChoice.imgWidth || 100,
    el,
    atkTimer: 0,
    atkSpeed: 1.2,
    isBoss: true,
    attackingBase: false,
    target: null,
  };
  state.units.push(bossObj);
  updateTop();
}

function onBossDefeated() {
  if (state.bossDefeated) return;

  console.log("Boss defeated:", state.bossChoice.name);
  state.bossDefeated = true;
  state.bossActive = false;
  state.bossHP = 0;

  // Remove boss unit from the game
  for (let i = state.units.length - 1; i >= 0; i--) {
    if (state.units[i].isBoss) {
      try {
        state.units[i].el.remove();
      } catch (e) {
        console.error("Error removing boss element:", e);
      }
      state.units.splice(i, 1);
      break; // Only one boss should exist
    }
  }

  // Clear any remaining projectiles targeting the boss
  for (let i = state.projectiles.length - 1; i >= 0; i--) {
    if (
      state.projectiles[i].targetRef &&
      state.projectiles[i].targetRef.isBoss
    ) {
      try {
        state.projectiles[i].el.remove();
      } catch (e) {}
      state.projectiles.splice(i, 1);
    }
  }

  const idx = BOSSES.findIndex((b) => b.id === state.bossChoice.id);
  if (idx >= 0 && idx < BOSSES.length - 1) {
    const next = BOSSES[idx + 1].id;
    if (!state.unlocked.includes(next)) {
      state.unlocked.push(next);
      saveUnlocked();
      showToast(
        L("unlockedBoss") +
          (state.lang === "ru" ? BOSSES[idx + 1].ru : BOSSES[idx + 1].name)
      );
      // Immediately update the boss list
      buildBossList();
    }
  } else {
    state.hackEnabled = true;
    state.futureCompleted = true;
  }

  playAgeMusic(state.playerAge);
  updateTop();
  showFinish(true, L("bossDefeated"));
}

function enemySpawnNormal(dt) {
  if (state.mode === "boss") return;
  if (state.bossActive || state.enemyBaseDestroyed) return;
  if (state.stopEnemySpawn) return;
  state.enemySpawnTimer -= dt;
  if (state.enemySpawnTimer > 0) return;
  const ramp = Math.min(state.time / 25000, 1);
  const spawnChance = 0.4 + 0.9 * ramp;
  if (Math.random() < spawnChance) {
    const templates = UNIT_TEMPLATES[state.enemyAge] || UNIT_TEMPLATES[1];
    let tierWeights = [1, 1, 1];
    if (state.time > 45) tierWeights = [1, 2, 1.5];
    if (state.time > 90) tierWeights = [1, 1.5, 2];
    let weightedTemplates = [];
    templates.forEach((t, i) => {
      for (let j = 0; j < tierWeights[i]; j++) weightedTemplates.push(t);
    });
    const t =
      weightedTemplates[Math.floor(Math.random() * weightedTemplates.length)];
    spawnUnit("enemy", t);
  }
  const baseInterval =
    DIFF[state.difficulty].enemySpawnRate * (0.4 + Math.random() * 0.5);
  state.enemySpawnTimer = Math.max(0.06, baseInterval);
}

function enemyAgeTick(dt) {
  if (state.mode !== "none") return;
  if (state.enemyAge >= AGES.length) return;
  state.enemyAgeUpgradeCooldown -= dt;
  if (state.enemyAgeUpgradeCooldown <= 0) {
    const upgradeChance = 0.4 + state.enemyAge * 0.06;
    if (Math.random() < upgradeChance) {
      state.enemyAge++;
      state.enemyBaseHP = HP_PER_AGE[state.enemyAge - 1];
      showToast(
        state.lang === "ru" ? "Противник повысил эпоху" : "Enemy age increased"
      );
    }
    const speedMultiplier = DIFF[state.difficulty].enemyAgeUpgradeSpeed || 1.0;
    state.enemyAgeUpgradeCooldown = (20 + Math.random() * 20) / speedMultiplier;
  }
}

function renderAll() {
  if (!battleUnits) return;
  battleUnits.innerHTML = "";
  const bw = battleEl.clientWidth;
  for (const u of state.units) {
    const el = u.el;
    if (!el) continue;
    const hpFill = el.querySelector(".hpFill");
    const maxHP = u.maxHp || u.template.hp || 60;
    const pct = Math.max(0, Math.min(1, (u.hp || 0) / (maxHP || 1)));
    if (hpFill) {
      hpFill.style.width = pct * 100 + "%";
      if (pct < 0.35) hpFill.classList.add("low");
      else hpFill.classList.remove("low");
    }
    el.style.left = Math.max(60, Math.min(bw - 200, u.x)) + "px";
    el.style.bottom = u.isBoss ? "16%" : "14%";
    el.style.width =
      (u.isBoss ? u.template.imgWidth || 100 : u.template.imgWidth || 60) +
      "px";
    el.style.height =
      (u.isBoss ? u.template.imgHeight || 100 : u.template.imgHeight || 60) +
      "px";
    if (state.showHPNumbers) {
      let num = el.querySelector(".hpNum");
      if (!num) {
        num = document.createElement("div");
        num.className = "hpNum";
        num.style.position = "absolute";
        num.style.top = "-22px";
        num.style.left = "0";
        num.style.right = "0";
        num.style.fontSize = "10px";
        num.style.textAlign = "center";
        num.style.color = "#dbeafe";
        el.appendChild(num);
      }
      num.textContent = Math.round(u.hp) + " / " + Math.round(maxHP);
    }
    battleUnits.appendChild(el);
  }
  for (const p of state.projectiles)
    if (p.el && p.el.parentNode !== battleUnits) battleUnits.appendChild(p.el);
  if (state.bossActive && state.bossChoice) {
    const lbl = document.createElement("div");
    lbl.style.position = "absolute";
    lbl.style.right = "110px";
    lbl.style.top = "12%";
    lbl.style.padding = "6px 10px";
    lbl.style.background = "rgba(255,120,120,0.12)";
    lbl.style.borderRadius = "8px";
    lbl.style.fontWeight = "700";
    lbl.textContent =
      (state.lang === "ru" ? state.bossChoice.ru : state.bossChoice.name) +
      " (" +
      Math.max(0, Math.round(state.bossHP)) +
      ")";
    battleUnits.appendChild(lbl);
  }
  if (pHP) pHP.textContent = Math.max(0, Math.round(state.playerBaseHP));
  if (eHP) eHP.textContent = Math.max(0, Math.round(state.enemyBaseHP));
  updateTop();
  updateUI();
}

function updateUI() {
  const goldDisplay = document.getElementById("gold");
  const xpDisplay = document.getElementById("xp");
  const ageDisplay = document.getElementById("ageText");
  const ageCostDisplay = document.getElementById("ageCost");
  if (goldDisplay) {
    const displayGold = state.infiniteGold ? "∞" : Math.floor(state.gold);
    goldDisplay.textContent = displayGold;
  }
  if (xpDisplay) {
    const displayXP = state.infiniteXP ? "∞" : Math.floor(state.xp);
    xpDisplay.textContent = displayXP;
  }
  if (ageDisplay) {
    const ageName =
      state.lang === "ru"
        ? AGES[state.playerAge - 1].ru
        : AGES[state.playerAge - 1].name;
    ageDisplay.textContent = ageName;
  }
  if (ageCostDisplay) {
    const cost = XP_REQUIRED[state.playerAge - 1] || 9999;
    const currentXP = state.infiniteXP ? "∞" : Math.floor(state.xp);
    ageCostDisplay.textContent = `${currentXP}/${cost}`;
    if (state.xp >= cost || state.infiniteXP) {
      upgradeAge.classList.add("upgrade-age-blink");
      const mobileUpgrade = document.getElementById("mobileUpgradeAge");
      if (mobileUpgrade) mobileUpgrade.classList.add("upgrade-age-blink");
    } else {
      upgradeAge.classList.remove("upgrade-age-blink");
      const mobileUpgrade = document.getElementById("mobileUpgradeAge");
      if (mobileUpgrade) mobileUpgrade.classList.remove("upgrade-age-blink");
    }
  }
  updateStatLabels();
  updateMobileUI();
}

function updateStatLabels() {
  const statGold = document.getElementById("statGold");
  const statXP = document.getElementById("statXP");
  const statAge = document.getElementById("statAge");
  if (statGold)
    statGold.innerHTML =
      L("gold") +
      "<br><strong id='gold'>" +
      (state.infiniteGold ? "∞" : Math.floor(state.gold)) +
      "</strong>";
  if (statXP)
    statXP.innerHTML =
      L("xp") +
      "<br><strong id='xp'>" +
      (state.infiniteXP ? "∞" : Math.floor(state.xp)) +
      "</strong>";
  if (statAge) {
    const ageName =
      state.lang === "ru"
        ? AGES[state.playerAge - 1].ru
        : AGES[state.playerAge - 1].name;
    statAge.innerHTML =
      L("age") + "<br><strong id='ageText'>" + ageName + "</strong>";
  }
}

function updateHackUI() {
  if (!hackBtn) return;
  if (!state.hackEnabled) {
    hackBtn.style.display = "none";
    if (hackPopup) hackPopup.style.display = "none";
  } else hackBtn.style.display = "inline-block";
}

// Game loop
let last = performance.now();
function loop(now) {
  const rawDt = (now - last) / 1000;
  last = now;
  if (!state.running || state.timePaused) {
    requestAnimationFrame(loop);
    return;
  }
  const dt = rawDt * state.timeMultiplier;
  state.time += dt;
  const incomeMultiplier = DIFF[state.difficulty].incomeMultiplier || 1.0;
  if (!state.infiniteGold)
    state.gold += 3 * dt * (state.playerAge * 1.6) * incomeMultiplier;
  if (state.mode === "boss") bossWaveTick(dt);
  else {
    enemySpawnNormal(dt);
    enemyAgeTick(dt);
  }
  updateUnits(dt);
  updateProjectiles(dt);
  renderAll();
  updateUI();
  if (state.enemyBaseHP <= 0 && !state.enemyBaseDestroyed) {
    state.enemyBaseDestroyed = true;
    showToast(L("enemyBaseDestroyed"), 1000);
    if (state.mode === "boss") activateBoss();
    else showFinish(true, L("victoryBase"));
  }
  if (state.playerBaseHP <= 0) showFinish(false, L("defeatBase"));
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

function showFinish(win, message) {
  state.running = false;
  stopAllMusic();
  if (finishTitle) finishTitle.textContent = win ? L("victory") : L("defeat");
  if (finishMessage) finishMessage.textContent = message;
  if (finishOverlay) finishOverlay.style.display = "flex";
}

function startGame() {
  updateUI();
  if (state.mode === null) {
    showToast(state.lang === "ru" ? "Выберите режим" : "Choose mode");
    return;
  }
  state.running = true;
  state.gold =
    100 +
    (state.mode === "boss" && state.bossChoice
      ? state.bossChoice.age === 6
        ? state.bossChoice.age * 200
        : state.bossChoice.age >= 5
        ? state.bossChoice.age * 100
        : state.bossChoice.age === 4
        ? state.bossChoice.age * 50
        : state.bossChoice.age * 25
      : 0);
  state.xp = 0;
  state.playerAge = 1;
  state.enemyAge =
    state.mode === "boss" && state.bossChoice ? state.bossChoice.age : 1;
  state.playerBaseHP = HP_PER_AGE[state.playerAge - 1];
  state.enemyBaseHP = HP_PER_AGE[state.enemyAge - 1];
  state.units = [];
  state.projectiles = [];
  state.time = 0;
  state.enemySpawnTimer = 0;
  state.bossActive = false;
  state.bossHP = 0;
  state.enemyBaseDestroyed = false;
  state.bossDefeated = false;
  state.enemyAgeUpgradeCooldown = 45 + Math.random() * 20;
  state.timePaused = false;
  state.stopEnemySpawn = false;
  bossWaveTimer = 0;
  clearMenuBackground();
  buildUnitButtons();
  buildMobileUnitButtons();
  updateUI();
  buildBossList();
  if (menu) menu.style.display = "none";
  updateHackUI();

  // NEW: Hide upgrade button if Future era was completed in previous game
  if (state.futureCompleted) {
    upgradeAge.style.display = "none";
    const mobileUpgrade = document.getElementById("mobileUpgradeAge");
    if (mobileUpgrade) mobileUpgrade.style.display = "none";
  } else {
    upgradeAge.style.display = "flex";
    const mobileUpgrade = document.getElementById("mobileUpgradeAge");
    if (mobileUpgrade) mobileUpgrade.style.display = "flex";
  }

  playAgeMusic(state.playerAge);
}

function startBossGame() {
  if (!state.unlocked.includes(state.chosenBossId)) {
    showToast(L("chooseBossLocked"));
    return;
  }
  state.mode = "boss";
  state.bossChoice = BOSSES.find((b) => b.id === state.chosenBossId);
  startGame();
}

function localizeText() {
  const elements = {
    title: L("title"),
    btnNormal: L("normal"),
    btnBosses: L("bosses"),
    btnSettings: L("settings"),
    startNormal: L("startNormal"),
    startBoss: L("startBoss"),
    lblDiff: L("difficulty"),
    menuBtn: L("menu"),
    hackBtn: L("hack"),
    lblLang: L("language"),
    lblVolume: L("volume"),
    pauseTitle: L("paused"),
    pauseCancel: L("resume"),
    pauseMenu: L("returnMenu"),
    finishRestart: L("restart"),
    finishToMenu: L("toMenu"),
    lblYou: L("you"),
    lblEnemy: L("enemy"),
  };
  Object.keys(elements).forEach((id) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = elements[id];
  });
  const hackLabels = {
    hackLabelGold: L("infiniteGold"),
    hackLabelXP: L("infiniteXP"),
    hackLabelNoSpawn: L("enemyNoSpawn"),
  };
  Object.keys(hackLabels).forEach((id) => {
    const element = document.getElementById(id);
    if (element) element.textContent = hackLabels[id];
  });
  if (pauseTimeBtn) pauseTimeBtn.textContent = L("pauseTime");
  if (killEnemyBtn) killEnemyBtn.textContent = L("killEnemyUnits");
  if (killPlayerBtn) killPlayerBtn.textContent = L("killPlayerUnits");
  const statElements = {
    statGold: L("gold"),
    statXP: L("xp"),
    statAge: L("age"),
  };
  Object.keys(statElements).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      const strong = element.querySelector("strong");
      if (strong) {
        element.innerHTML =
          statElements[id] +
          "<br><strong>" +
          (strong.id === "ageText"
            ? state.lang === "ru"
              ? AGES[state.playerAge - 1].ru
              : AGES[state.playerAge - 1].name
            : strong.textContent) +
          "</strong>";
      }
    }
  });
  if (upgradeAge) {
    const upgradeText = upgradeAge.querySelector(".upgrade-age-text");
    if (upgradeText) upgradeText.textContent = L("upgradeAge");
  }
  document.querySelectorAll(".diff-btn").forEach((btn) => {
    const diff = btn.dataset.diff;
    if (diff === "easy") btn.textContent = L("easy");
    else if (diff === "medium") btn.textContent = L("medium");
    else if (diff === "hard") btn.textContent = L("hard");
  });
  if (orientationWarning) {
    const h3 = orientationWarning.querySelector("h3");
    const p = orientationWarning.querySelector("p");
    if (h3) h3.textContent = L("pleaseRotate");
    if (p) p.textContent = L("rotateMessage");
  }
  updateTop();
}

function initializeEventListeners() {
  if (btnNormal)
    btnNormal.onclick = () => {
      panelNormal.style.display = "block";
      panelBosses.style.display = "none";
      panelSettings.style.display = "none";
      state.mode = "none";
      btnNormal.classList.add("active");
      btnBosses.classList.remove("active");
      btnSettings.classList.remove("active");
    };
  if (btnBosses)
    btnBosses.onclick = () => {
      panelBosses.style.display = "block";
      panelNormal.style.display = "none";
      panelSettings.style.display = "none";
      state.mode = "boss";
      buildBossList();
      btnNormal.classList.remove("active");
      btnBosses.classList.add("active");
      btnSettings.classList.remove("active");
    };
  if (btnSettings)
    btnSettings.onclick = () => {
      panelSettings.style.display = "block";
      panelNormal.style.display = "none";
      panelBosses.style.display = "none";
      btnNormal.classList.remove("active");
      btnBosses.classList.remove("active");
      btnSettings.classList.add("active");
    };
  document.querySelectorAll(".diff-btn").forEach((btn) => {
    btn.onclick = () => {
      document
        .querySelectorAll(".diff-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.difficulty = btn.dataset.diff;
    };
  });
  if (startNormal)
    startNormal.onclick = () => {
      state.mode = "none";
      startGame();
    };
  if (startBoss)
    startBoss.onclick = () => {
      if (!state.unlocked.includes(state.chosenBossId)) {
        showToast(L("chooseBossLocked"));
        return;
      }
      state.mode = "boss";
      state.bossChoice = BOSSES.find((b) => b.id === state.chosenBossId);
      startGame();
    };
  if (volRange) {
    volRange.oninput = () => {
      state.volume = parseFloat(volRange.value) / 100;
      const allMusic = [
        mainMusic,
        bossMusic,
        ancientMusic,
        antiquityMusic,
        medievalMusic,
        enlightenmentMusic,
        modernMusic,
        futureMusic,
        menuMusic,
      ];
      allMusic.forEach((music) => {
        if (music) music.volume = state.volume;
      });
    };
  }
  if (upgradeAge) {
    upgradeAge.onclick = () => {
      if (state.playerAge >= AGES.length) {
        showToast(
          state.lang === "ru"
            ? "Максимальная эпоха достигнута!"
            : "Maximum age reached!"
        );
        return;
      }
      const cost = XP_REQUIRED[state.playerAge - 1] || 9999;
      if (state.infiniteXP || state.xp >= cost) {
        if (!state.infiniteXP) state.xp -= cost;
        state.playerAge++;
        state.playerBaseHP = HP_PER_AGE[state.playerAge - 1];
        buildUnitButtons();
        buildMobileUnitButtons();
        playAgeMusic(state.playerAge);
        updateUI();
        showToast(
          (state.lang === "ru" ? "Переход в эпоху: " : "Upgraded to ") +
            (state.lang === "ru"
              ? AGES[state.playerAge - 1].ru
              : AGES[state.playerAge - 1].name)
        );
        if (state.playerAge >= AGES.length) {
          upgradeAge.style.display = "none";
          showToast(
            state.lang === "ru"
              ? "Технологический предел достигнут!"
              : "Technological limit reached!"
          );
        }
      } else showToast(L("notEnoughXP"));
    };
  }
  if (pauseCancel)
    pauseCancel.onclick = () => {
      pauseModal.style.display = "none";
      if (pauseModal._wasRunning) {
        state.running = true;
        requestAnimationFrame(loop);
      }
    };
  if (pauseMenu)
    pauseMenu.onclick = () => {
      pauseModal.style.display = "none";
      state.running = false;
      if (menu) menu.style.display = "flex";
      clearMenuBackground();
      createMenuBackground();
      playMenuMusic();
    };
  if (finishRestart)
    finishRestart.onclick = () => {
      if (finishOverlay) finishOverlay.style.display = "none";
      startGame();
    };
  if (finishToMenu)
    finishToMenu.onclick = () => {
      if (finishOverlay) finishOverlay.style.display = "none";
      state.running = false;
      if (menu) menu.style.display = "flex";
      clearMenuBackground();
      createMenuBackground();
      playMenuMusic();
    };
  function checkOrientation() {
    if (orientationWarning) {
      if (window.innerHeight > window.innerWidth)
        orientationWarning.style.display = "flex";
      else orientationWarning.style.display = "none";
    }
  }
  window.addEventListener("resize", checkOrientation);
  window.addEventListener("orientationchange", checkOrientation);
  checkOrientation();
  window.addEventListener("resize", checkUnitButtonsFit);
  document.addEventListener("click", function enableAudioOnInteraction() {
    if (!state.audioEnabled) enableAudio();
    document.removeEventListener("click", enableAudioOnInteraction);
  });
}

function init() {
  try {
    const raw = localStorage.getItem("aow_unlocked");
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr) && arr.length) state.unlocked = arr;
    }
  } catch (e) {}
  initializeLanguageSwitcher();
  buildBossList();
  buildUnitButtons();
  updateTop();
  updateUI();
  if (menu) menu.style.display = "flex";
  if (state.unlocked.length >= BOSSES.length) state.hackEnabled = true;
  updateHackUI();
  initializeHackMenu();
  initializeSpeedButtons();
  initializeMenuButton();
  initializeMobileControls();
  initializeEventListeners();
  localizeText();
  const allMusic = [
    mainMusic,
    bossMusic,
    ancientMusic,
    antiquityMusic,
    medievalMusic,
    enlightenmentMusic,
    modernMusic,
    futureMusic,
    menuMusic,
  ];
  allMusic.forEach((music) => {
    if (music) music.volume = 0;
  });
  createMenuBackground();
}

init();
