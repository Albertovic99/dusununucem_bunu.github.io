const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainScreen = document.getElementById('mainScreen');
const celebrationScreen = document.getElementById('celebrationScreen');

// Container referansı
const container = document.querySelector('.container');

// Buton boyutunu sabit tut
const buttonWidth = noBtn.offsetWidth;
const buttonHeight = noBtn.offsetHeight;
noBtn.style.width = buttonWidth + 'px';
noBtn.style.height = buttonHeight + 'px';

// Butonu başka yere ışınlama fonksiyonu
function teleportButton() {
    const containerRect = container.getBoundingClientRect();
    
    // Rastgele pozisyon hesapla (ekran sınırları içinde)
    const maxX = containerRect.width - buttonWidth;
    const maxY = containerRect.height - buttonHeight;
    
    const randomX = Math.max(0, Math.random() * maxX);
    const randomY = Math.max(0, Math.random() * maxY);
    
    // Butonu absolute positioning'e geçir (eğer henüz değilse)
    if (noBtn.style.position !== 'absolute') {
        noBtn.style.position = 'absolute';
    }
    
    // Rastgele pozisyona taşı
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

yesBtn.addEventListener('click', function() {
    mainScreen.style.display = 'none';
    celebrationScreen.classList.add('show');
});

// Buton tıklanamaz olmalı, sadece kaçmalı
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    teleportButton();
});

// Mouse üzerine gelince kaç
noBtn.addEventListener('mouseenter', function(e) {
    e.preventDefault();
    teleportButton();
});

// Dokunulunca kaç (mobil için)
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    teleportButton();
});

// Mouse hareket edince de kaç (daha zor yakalamak için)
noBtn.addEventListener('mousemove', function(e) {
    e.preventDefault();
    teleportButton();
});

