// ====== PROMO ======
document.getElementById('btnPromo').addEventListener('click', function() {
    alert('Promo Spesial! Diskon 20% untuk koleksi baju wanita minggu ini');
});

// ====== TOMBOL BELI ======
document.querySelectorAll('.btnBeli').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Terima kasih sudah berbelanja di Amour Atelier');
    });
});

// ====== VALIDASI FORM KONTAK ======
document.getElementById('formKontak')?.addEventListener('submit', function(e) {
    const nama = document.getElementById('nama').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    if (nama === '' || pesan === '') {
        alert('Mohon isi semua kolom sebelum mengirim');
        e.preventDefault();
    } else {
        alert('Pesan kamu sudah dikirim. Terima kasih!');
    }
});

// ====== FORM PEMESANAN ======
document.getElementById('formPesan')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const namaPembeli = document.getElementById('namaPembeli').value.trim();
    const kodeBaju = document.getElementById('kodeBaju').value.trim();
    const ukuran = document.getElementById('ukuran').value;
    const warna = document.getElementById('warna').value;

    if (namaPembeli === '' || kodeBaju === '' || ukuran === '' || warna === '') {
        alert('Mohon isi semua kolom sebelum mengirim pesanan!');
    } else {
        alert(
            `Terima kasih, ${namaPembeli}! \n\n` +
            `Detail pesanan kamu:\n` +
            `Kode Baju: ${kodeBaju}\n` +
            `Ukuran: ${ukuran}\n` +
            `Warna: ${warna}\n\n` +
            `Pesanan kamu akan segera kami proses.`
        );
        document.getElementById('formPesan').reset();
    }
});


