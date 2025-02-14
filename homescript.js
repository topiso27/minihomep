window.addEventListener('DOMContentLoaded', (event) => {
    // 오디오 플레이어와 앨범 커버 이미지
    const audioPlayer = document.getElementById('audio-player');
    const albumCover = document.getElementById('album-cover');

    // 앨범 커버 이미지 클릭 이벤트
    albumCover.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play(); // 음악이 멈춰있으면 재생
            albumCover.classList.add('playing'); // 음악 재생 중 회전 애니메이션 시작
        } else {
            audioPlayer.pause(); // 음악이 재생 중이면 멈추기
            albumCover.classList.remove('playing'); // 음악 멈추면 회전 애니메이션 중지
        }
    });

    // 오디오가 끝났을 때 앨범 커버 애니메이션 초기화
    audioPlayer.addEventListener('ended', function() {
        albumCover.classList.remove('playing'); // 음악 끝났을 때 애니메이션 중지
    });
});





function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작
    const day = String(now.getDate()).padStart(2, '0');

    // 한 자리 숫자일 경우 앞에 0 붙이기
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분${seconds}초의 한마디`;

    // HTML의 id="current-time" 요소에 반영
    document.getElementById("current-time").innerText = `🕒 ${timeString}`;
}

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);

// 페이지 로드 시 즉시 실행
updateTime();
