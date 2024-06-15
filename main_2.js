document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;
    let errorMessage = '';

    // Validasi nama
    const name = document.getElementById('name').value;
    if (name.length < 2) {
        valid = false;
        errorMessage += 'Nama harus memiliki setidaknya 2 karakter.\n';
    }

    // Validasi email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        errorMessage += 'Format email tidak valid.\n';
    }

    // Validasi telepon
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        valid = false;
        errorMessage += 'Nomor telepon harus terdiri dari 10-15 digit angka.\n';
    }

    // Validasi umur
    const age = document.getElementById('age').value;
    if (age < 15 || age > 70) {
        valid = false;
        errorMessage += 'Umur harus antara 15 dan 70 tahun.\n';
    }

    // Jika validasi gagal
    if (!valid) {
        alert(errorMessage);
    } else {
        alert('Pendaftaran berhasil!');
    }
});


