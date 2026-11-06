// Pesan selamat datang di console
console.log("Selamat datang di website portofolio Dhiyanah!");

// Efek saat menu navigasi diklik
const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        console.log("Kamu membuka bagian: " + this.textContent);
    });
});

// Membuka gambar sertifikat saat diklik
const certificates = document.querySelectorAll(".certificate img");

certificates.forEach(image => {
    image.addEventListener("click", function() {
        window.open(this.src, "_blank");
    });
});

// Pesan saat website selesai dimuat
window.addEventListener("load", function() {
    console.log("Website portofolio berhasil dimuat!");
});
