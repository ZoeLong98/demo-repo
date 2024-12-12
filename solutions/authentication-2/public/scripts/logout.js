document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#logout');
    button.addEventListener('click', function(event) {
        fetch(`/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('error:', error);
        });

    });


});