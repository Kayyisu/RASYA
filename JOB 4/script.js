// ==========================================
// KEGIATAN 1: EKSPLORASI SINTAKS DASAR & VARIABEL
// ==========================================
console.log("Berkas script.js berhasil terhubung dengan HTML!");

const kkmNilai = 75;
let nilaiUjian = 82;
let selisihSkor = nilaiUjian - kkmNilai;

console.log("Nilai Ujian Masuk:", nilaiUjian);
console.log("Batas Kelulusan (KKM):", kkmNilai);
console.log("Selisih Nilai Ke KKM:", selisihSkor);


// ==========================================
// KEGIATAN 2: FUNGSI DAN PERCABANGAN LOGIKA (if-else)
// ==========================================
function evaluasiSkor(nama, skor) {
    const batasMinimal = 75;
    let status = "";

    // Logika percabangan mengecek kelulusan
    if (skor >= batasMinimal) {
        status = "Selamat " + nama + ", Anda dinyatakan LULUS mata pelajaran Pemrograman!";
    } else {
        status = "Maaf " + nama + ", Anda Belum Lulus KKM. Silakan mengikuti program Remedial.";
    }

    return status;
}

// Uji coba memanggil fungsi lewat console log
let hasilUji = evaluasiSkor("Rian", 80);
console.log("Hasil Fungsi Test:", hasilUji);


// ==========================================
// KEGIATAN 3: MANIPULASI DOM & EVENT HANDLING
// ==========================================
const tombolProses = document.getElementById('btn-proses');
const elemenHasil = document.getElementById('box-hasil');

tombolProses.onclick = function() {
    let namaSiswa = document.getElementById('input-nama').value;
    let nilaiSiswa = document.getElementById('input-nilai').value;

    // Validasi sederhana: memastikan kolom input tidak kosong
    if (namaSiswa === "" || nilaiSiswa === "") {
        elemenHasil.innerText = "Peringatan: Mohon isi Nama dan Nilai terlebih dahulu!";
        elemenHasil.style.color = "#dc2626"; // Warna teks merah
        elemenHasil.style.borderLeftColor = "#dc2626";
        return; // Menghentikan eksekusi fungsi jika tidak valid
    }

    // Konversi tipe data nilai dari String ke Angka (Number)
    let nilaiAngka = Number(nilaiSiswa);

    // Memanggil fungsi logika yang telah dibuat pada Kegiatan 2
    let kalimatKesimpulan = evaluasiSkor(namaSiswa, nilaiAngka);

    // Memasukkan kalimat hasil ke dalam kotak hasil di halaman web
    elemenHasil.innerText = kalimatKesimpulan;

    // Memberikan sentuhan warna dinamis berdasarkan kelulusan
    if (nilaiAngka >= 75) {
        elemenHasil.style.color = "#15803d"; // Warna teks hijau
        elemenHasil.style.borderLeftColor = "#15803d";
    } else {
        elemenHasil.style.color = "#b91c1c"; // Warna teks merah maroon
        elemenHasil.style.borderLeftColor = "#b91c1c";
    }
};


// ==========================================
// KEGIATAN 4: PERULANGAN LOGIKA (LOOPING) & DARK MODE
// ==========================================

// 1. Looping Generator
const tombolLoop = document.getElementById('btn-loop');
const elemenBoxLoop = document.getElementById('box-loop');

tombolLoop.onclick = function() {
    let penampungTeks = "";

    // Logika perulangan mencetak deret angka dari 1 sampai 5
    for (let i = 1; i <= 5; i++) {
        penampungTeks += "Mencetak Baris Angka ke-" + i + "<br>";
    }

    // Manipulasi DOM menyuntikkan teks berupa format HTML tag break
    elemenBoxLoop.innerHTML = penampungTeks;
    elemenBoxLoop.style.fontStyle = "normal";
};

// 2. Dark Mode Toggle
const tombolTema = document.getElementById('btn-togle');

tombolTema.onclick = function() {
    document.body.classList.toggle('dark-theme');

    // Memeriksa apakah class 'dark-theme' saat ini sedang aktif atau tidak
    if (document.body.classList.contains('dark-theme')) {
        tombolTema.innerText = "Mode Terang";
        tombolTema.style.backgroundColor = "#e2e8f0";
        tombolTema.style.color = "#1e293b";
    } else {
        tombolTema.innerText = "Mode Gelap";
        tombolTema.style.backgroundColor = "#334155";
        tombolTema.style.color = "#ffffff";
    }
};