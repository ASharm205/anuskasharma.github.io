//W3 schools and lecture notes
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    document.querySelectorAll('.nav-links button').forEach(btn => btn.classList.remove('active'));
    if (sectionId === 'exercise1') {
        document.getElementById('btn1').classList.add('active');
    } else {
        document.getElementById('btn2').classList.add('active');
    }
}
function updatePlantAdvice(days) {
    const sliderValue = document.getElementById('sliderValue');
    const plantAdvice = document.getElementById('plantAdvice');

    sliderValue.textContent = `${days} day${days == 1 ? '' : 's'}`;

    let advice = '', emoji = '', style = '';

    if (days <= 2) {
        emoji = '🌱';
        advice = ' plant is hydrated!';
        style = 'background: linear-gradient(135deg, #88d8a3); color: #e6f2ebff;';
    } else if (days <= 5) {
        emoji = '🌿';
        advice = ' plant is well, it might need water soon.';
        style = 'background: linear-gradient(135deg, #6e8192ff); color: white;';
    } else if (days <= 9) {
        emoji = '🚰';
        advice = ' time to water your plant, your plant needs hydration.';
        style = 'background: linear-gradient(135deg, #ffeaa7); color: #e17055;';
    } else if (days <= 11) {
        emoji = '🆘';
        advice = ' water it immediately to save it!';
        style = 'background: linear-gradient(135deg, #d89ab8ff); color: white;';
    } else {
        emoji = '💀';
        advice = 'plant is dead!';
        style = 'background: linear-gradient(135deg, #701742ff); color: white;';
    }

    plantAdvice.innerHTML = `<div class="plant-emoji">${emoji}</div><div>${advice}</div>`;
    plantAdvice.style.cssText = style;
}

//  clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12;
    const minFormatted = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById('digitalClock').textContent = `${hours}:${minFormatted} ${ampm}`;
}
window.onload = function() {
    updatePlantAdvice(3);
    updateClock();
    setInterval(updateClock, 60000); // update every minute
};
