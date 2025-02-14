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
