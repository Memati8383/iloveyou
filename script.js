const heartColors = ['#ff5e5e', '#ffb6b6', '#ff8484', '#ff9292', '#ffaaaa']; // Renkli kalp renkleri
const heartInterval = 15; // Her 10 pikselde bir kalp oluştur
const numberOfHearts = 500; // Oluşturulacak kalp sayısı

// Evet butonu
const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', function () {
    generateHearts();


    const title = document.querySelector('.title');
    title.textContent = 'Yaşasınn!';
});

function generateHearts() {
    const symbols = ['❤️', '💖', '💗', '💕', '💓'];
    const heartInterval = 100;

    setInterval(() => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)]; // Rastgele sembol  
        createHeart(symbol);
    }, heartInterval);
}

function createHeart(symbol) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = symbol;
    heart.style.left = Math.random() * window.innerWidth + 'px';    
    heart.style.top = Math.random() * window.innerHeight + 'px';             
    heart.style.animationName = 'heartAnimation';
    heart.style.animationDuration = '.9s';
    document.body.appendChild(heart);
}

const btn = document.getElementById('noButton'); // Butonu seçiyoruz

let isMoved = false; // Butonun hareket edip etmediğini izlemek için bir bayrak

btn.addEventListener("mouseover", function() {
    if (!isMoved) {
        btn.style.transform = `translate(-80px, 50px)`; // Butonu sola kaydır
        isMoved = true; // Bayrağı güncelle
    } else {
        btn.style.transform = `translate(80px, 50px)`; // Butonu başlangıç pozisyonuna geri getir
        isMoved = false; // Bayrağı güncelle
    }
    
    btn.style.transition = "all 0.3s ease"; // Geçiş efektini ayarla
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        noButton.style.animation = 'explode 0.5s forwards'; // Patlama animasyonunu etkinleştir
        if (!noButton.dataset.tabPressed) {
            noButton.dataset.tabPressed = true; // tab basıldı olarak işaretle
        setTimeout(() => noButton.style.display = 'none', 500); // Butonu 0.5 saniye sonra gizle
        event.preventDefault(); // block tab

        // "title" change
        const title = document.querySelector('.title');
        title.textContent = 'Hile yapmak yok :)';
        

        //  turn back
        setTimeout(() => {
            title.textContent = 'Çıkalım mı artık?';
        }, 2000);
    }
}
});


    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });


 
    document.onkeydown = function (e) {
        if (e.ctrlKey && (e.keyCode === 85)) {
            return false;
        }
    }; 
 
    window.addEventListener("DOMContentLoaded", function () {
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.keyCode == 85) {
                disabledEvent(e);
            }
            if ((e.ctrlKey || e.metaKey) && e.keyCode == 76 && e.shiftKey) {
                disabledEvent(e);
            }
        }, false);
    function disabledEvent(e) {
            if (e.stopPropagation) {
        e.stopPropagation();
            }
    if (e.preventDefault) {
        e.preventDefault();
            }
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
        }
    }); 


 
    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "Sayfayı kapatmak istediğinizden emin misiniz?";
    e.returnValue = confirmationMessage;
    return confirmationMessage;
    });
    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode == 87) {
        disabledEvent(e);
        }
    if (e.altKey && e.keyCode == 115) {
        disabledEvent(e);
        }
    }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
        e.stopPropagation();
        }
    if (e.preventDefault) {
        e.preventDefault();
        }
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
    } 