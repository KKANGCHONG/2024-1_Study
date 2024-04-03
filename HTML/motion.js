document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});

window.onload = function() {
    // 이미지를 찾아서 변수에 할당
    var image = document.querySelector('img');

    // 이미지에 페이드 인 효과 추가
    image.style.opacity = '0'; // 초기에 투명도를 0으로 설정

    // 1초 동안 투명도를 1로 애니메이션
    fadeIn(image, 1000);
};

// 페이드 인 애니메이션 함수
function fadeIn(element, duration) {
    var opacity = 0;
    var interval = 50; // 50밀리초마다 업데이트

    var timer = setInterval(function() {
        opacity += interval / duration;
        element.style.opacity = opacity;

        // 투명도가 1에 도달하면 타이머 해제
        if (opacity >= 1) {
            clearInterval(timer);
        }
    }, interval);
}

