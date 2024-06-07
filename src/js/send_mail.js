document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.gform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(form);

        fetch(form.getAttribute('action'), {
            method: 'POST',
            body: formData
        })
            .then(function(response) {
                if (response.ok) {
                    window.alert('전송 되었습니다.');
                    form.reset();
                } else {
                    window.alert('전송 실패하였습니다.');
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
                window.alert('오류가 발생하였습니다. 다시 시도해주세요.');
            });
    });
});
