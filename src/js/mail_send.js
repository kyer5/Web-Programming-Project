document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.gform');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 폼이 기본 동작을 실행하지 않도록 방지

        // 폼 데이터 가져오기
        var formData = new FormData(form);

        // POST 요청 보내기
        fetch(form.getAttribute('action'), {
            method: 'POST',
            body: formData
        })
            .then(function(response) {
                if (response.ok) {
                    // 전송 성공 시 메시지 표시
                    window.alert('전송 되었습니다.');
                    // 폼 초기화
                    form.reset();
                } else {
                    // 전송 실패 시 메시지 표시
                    window.alert('전송 실패하였습니다.');
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
                window.alert('오류가 발생하였습니다. 다시 시도해주세요.');
            });
    });
});
