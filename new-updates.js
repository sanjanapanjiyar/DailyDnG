// JavaScript code for the popup
setTimeout(function () {
    document.getElementById('newsletter-popup').style.display = 'flex';
    document.querySelector('.close-popup').addEventListener('click', function () {
        document.getElementById('newsletter-popup').style.display = 'none';
    });
    document.getElementById('newsletter-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        console.log('Email submitted:', email);
        var url = "https://script.google.com/macros/s/AKfycbzApH_ApscDuqPHYX0DOWjSJrEMu57hcBtj9s5cXuD-NxJxVnAJMgCsfH6vLrfMAMP5/exec?email=" + encodeURIComponent(email);
        fetch(url)
            .then(response => response.text())
            .then(data => {
                alert('Thank you for subscribing! ' + data);
                document.getElementById('email').value = "";
                document.getElementById('newsletter-popup').style.display = 'none';
            });
    });
}, 1500);



window.addEventListener('click', function (event) {
    const popup = document.getElementById('newsletter-popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
