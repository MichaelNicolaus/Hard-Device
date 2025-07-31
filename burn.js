@ -0,0 +1,75 @@
// Memastikan semua konten HTML sudah dimuat sebelum menjalankan JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dokumen HTML telah selesai dimuat dan skrip aktif!');

    // ************ Bagian 1: Navigasi Halus (Smooth Scroll) ************
    // Mendapatkan semua link navigasi
    const navLinks = document.querySelectorAll('nav a');

    // Menambahkan event listener untuk setiap link navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default link (lompat langsung)

            const targetId = this.getAttribute('href'); // Dapatkan nilai href (misal: "#about")
            const targetSection = document.querySelector(targetId); // Dapatkan elemen section yang dituju

            if (targetSection) {
                // Gulir halaman dengan efek smooth
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight, // Sesuaikan dengan tinggi header
                    behavior: 'smooth'
                });
            }
        });
    });

    // ************ Bagian 2: Efek Hover Header Sederhana ************
    const header = document.querySelector('header');
    
    // Mengubah warna header saat kursor masuk
    header.addEventListener('mouseenter', function() {
        header.style.backgroundColor = '#555'; // Warna sedikit lebih terang
        header.style.transition = 'background-color 0.3s ease'; // Transisi halus
    });

    // Mengembalikan warna header saat kursor keluar
    header.addEventListener('mouseleave', function() {
        header.style.backgroundColor = '#333'; // Kembali ke warna awal
    });

    // ************ Bagian 3: Pesan Selamat Datang di Konsol ************
    // Ini hanya akan terlihat di konsol developer browser (F12)
    console.log('Halo! Selamat datang di website portofolio saya.');
    console.log('Jelajahi fitur-fitur interaktif yang saya tambahkan!');

    // ************ Bagian 4: Efek Fade-in pada Section Saat di-scroll ************
    const sections = document.querySelectorAll('main section');

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Jika bagian section masuk ke dalam viewport
            if (sectionTop < windowHeight * 0.75) { // 0.75 artinya 75% dari tinggi viewport
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)'; // Mulai dari 20px di bawah
            }
        });
    };

    // Atur gaya awal agar tidak terlihat sebelum di-scroll
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Jalankan saat pertama kali halaman dimuat dan saat di-scroll
    fadeInOnScroll(); // Jalankan saat load pertama
    window.addEventListener('scroll', fadeInOnScroll); // Jalankan saat scroll
});
