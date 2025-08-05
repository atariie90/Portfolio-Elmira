 //contact
 document.addEventListener("DOMContentLoaded", function () { // Tunggu sampai DOM selesai dimuat
    const form = document.querySelector(".contact-form"); // Ambil elemen formulir berdasarkan kelasnya

    form.addEventListener("submit", function (event) { // Tambahkan event listener untuk submit
        event.preventDefault(); // Mencegah halaman refresh otomatis bawaan saat formulir dikirim
        const formAction = form.action; // Ambil URL tujuan pengiriman formulir (dari atribut action)
        const formData = new FormData(form); // Ambil semua data dari input formulir

        // Kirim formulir ke server menggunakan Fetch API
        fetch(formAction, {
            method: "POST", // Metode pengiriman formulir (POST)
            body: formData, // Data formulir yang dikirim
            headers: {
                Accept: "application/json", // Memberitahu server untuk mengembalikan respons JSON
            },
        })
            .then((response) => {
                if (response.ok) { // Jika respons dari server berhasil
                    alert("Pesan berhasil dikirim!"); // Tampilkan notifikasi berhasil
                    location.reload(); // Refresh halaman setelah pesan terkirim
                } else {
                    alert("Gagal mengirim pesan. Coba lagi nanti."); // Tampilkan pesan jika gagal
                }
            })
            .catch((error) => {
                console.error("Kesalahan:", error); // Log kesalahan ke konsol untuk debugging
                alert("Terjadi kesalahan. Coba lagi nanti."); // Tampilkan pesan kesalahan kepada pengguna
            });
    });
});
