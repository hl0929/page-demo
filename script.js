// 多语言问候语
const greetings = {
    en: "Hello World!",
    es: "¡Hola Mundo!",
    fr: "Bonjour le Monde!",
    de: "Hallo Welt!",
    ja: "こんにちは世界！",
    zh: "你好，世界！",
    ko: "안녕 세상!",
    ar: "مرحبا بالعالم!",
    ru: "Привет мир!",
    it: "Ciao Mondo!"
};

// 获取问候语
function getGreeting(lang = 'en', name = 'Visitor') {
    const greeting = greetings[lang] || greetings.en;
    const message = `${greeting} ${name}!`;
    const timestamp = new Date().toLocaleString();
    
    return {
        message: message,
        language: lang,
        timestamp: timestamp,
        visitorIP: 'GitHub Pages Visitor'
    };
}

// 更新显示
function updateDisplay(data) {
    document.getElementById('greetingMessage').textContent = data.message;
    document.getElementById('timestamp').textContent = `时间: ${data.timestamp}`;
}

// 更新问候语
function updateGreeting() {
    const lang = document.getElementById('languageSelect').value;
    const name = document.getElementById('nameInput').value || 'Visitor';
    const data = getGreeting(lang, name);
    updateDisplay(data);
}

// 随机问候语
function getRandomGreeting() {
    const languages = Object.keys(greetings);
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    const name = document.getElementById('nameInput').value || 'Visitor';
    const data = getGreeting(randomLang, name);
    updateDisplay(data);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置页面信息
    document.getElementById('updateTime').textContent = new Date().toLocaleString();
    document.getElementById('repoName').textContent = window.location.hostname;
    
    // 初始显示
    updateGreeting();
    
    // 自动更新时间
    setInterval(() => {
        const timestampEl = document.getElementById('timestamp');
        if (timestampEl.textContent.includes('时间:')) {
            const currentData = {
                timestamp: new Date().toLocaleString(),
                message: document.getElementById('greetingMessage').textContent
            };
            updateDisplay(currentData);
        }
    }, 30000);
});

// 事件监听
document.getElementById('languageSelect').addEventListener('change', updateGreeting);
document.getElementById('nameInput').addEventListener('input', function() {
    if (this.value) {
        updateGreeting();
    }
});