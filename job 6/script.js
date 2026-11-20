// 1. DATA DAFTAR LAPTOP
const dataLaptop = [
  {
    nama: "ASUS Vivobook Go 14 OLED",
    kategori: "Ultrabook",
    tier: "Tier S",
    status: "BARU",
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhbOhSTYLEPI8U2_Vj2NtD6VVouu0Qfw9vEXLRMnEkA&s=10",
    spek: ["Ryzen 5 7520U", "Radeon 610M", "16GB LPDDR5 • 512GB SSD"]
  },
  {
    nama: "Lenovo IdeaPad Slim 5",
    kategori: "Ultrabook",
    tier: "Tier S",
    status: "BARU",
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOUHUlYQ7iiQ-g-eJ2VyXxijLWexHUCPdlgUShCgCHA&s=10",
    spek: ["Intel Core Ultra 5", "Intel Arc Graphics", "16GB LPDDR5X • 512GB SSD"]
  },
  {
    nama: "Acer Swift Go 14 AI",
    kategori: "Ultrabook",
    tier: "Tier S",
    status: "BARU",
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToqb7JF84ZTojpcJ91GuFGcpIlpM65P4MKd-mraYkLA&s=10",
    spek: ["Intel Core Ultra 7", "Intel Arc + AI Boost NPU", "16GB LPDDR5X • 1TB SSD"]
  },
  {
    nama: "Lenovo LOQ 15 RTX 4050",
    kategori: "Gaming",
    tier: "Tier S+",
    status: "BARU",
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVQ3_qrnpOfJwWPTzTZIVQ78brELBuzqgi5XK2wSgiQ&s=10",
    spek: ["Intel Core i5-13450HX", "NVIDIA RTX 4050 6GB", "16GB DDR5 • 512GB SSD"]
  }
];

let kategoriAktif = "Semua";

// 2. FUNGSI MENAMPILKAN KARTU KE LAYAR
function tampilkanLaptop(daftar) {
  const wadah = document.getElementById("wadahLaptop");
  const infoTampil = document.getElementById("infoTampil");
  
  wadah.innerHTML = "";
  infoTampil.textContent = `(${daftar.length} ditampilkan)`;

  if (daftar.length === 0) {
    wadah.innerHTML = "<p style='color:#888;'>Laptop tidak ditemukan.</p>";
    return;
  }

  daftar.forEach(laptop => {
    const kartu = `
      <div class="kartu-laptop">
        <div class="wadah-gambar">
          <span class="badge-tier">${laptop.tier}</span>
          <span class="badge-status">${laptop.status}</span>
          <img src="${laptop.gambar}" alt="${laptop.nama}">
        </div>
        <div class="isi-kartu">
          <div class="label-mimin">PILIHAN MIMIN</div>
          <h3 class="nama-laptop">${laptop.nama}</h3>
          <ul class="daftar-spek">
            <li>${laptop.spek[0]}</li>
            <li>${laptop.spek[1]}</li>
            <li>${laptop.spek[2]}</li>
          </ul>
        </div>
      </div>
    `;
    wadah.innerHTML += kartu;
  });
}

// 3. FUNGSI KLIK TOMBOL KATEGORI
function filterKategori(kategori, tombolDiklik) {
  kategoriAktif = kategori;

  // Ubah warna tombol yang aktif
  document.querySelectorAll(".tombol-kategori").forEach(btn => btn.classList.remove("aktif"));
  tombolDiklik.classList.add("aktif");

  jalankanFilter();
}

// 4. FUNGSI MENYARING DATA (KATEGORI + PENCARIAN + TIER)
function jalankanFilter() {
  const kataKunci = document.getElementById("inputCari").value.toLowerCase();
  const tierDipilih = document.getElementById("filterTier").value;

  const hasilFilter = dataLaptop.filter(laptop => {
    const cocokKategori = (kategoriAktif === "Semua") || (laptop.kategori === kategoriAktif);
    const cocokTier = (tierDipilih === "Semua") || (laptop.tier === tierDipilih);
    const cocokCari = laptop.nama.toLowerCase().includes(kataKunci) || 
                      laptop.spek.join(" ").toLowerCase().includes(kataKunci);

    return cocokKategori && cocokTier && cocokCari;
  });

  tampilkanLaptop(hasilFilter);
}

// 5. FUNGSI TOMBOL BANTU PILIHIN
function bantuPilihin() {
  alert("Tips: Pilih Ultrabook untuk kuliah/kerja ringan, atau Gaming untuk edit video & game berat GAMING TEBAL TEBAL NILAI TIPIS TIPIS");
}

// Jalankan pertama kali saat web dibuka
tampilkanLaptop(dataLaptop);