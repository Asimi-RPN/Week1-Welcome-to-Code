// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

// tips gunakan keyword ini di google "conditional switch case javascript"
// dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

// code switch case kamu disini
let monthName;
switch (bulan) {
    case 1:
        monthName = "Januari";
        break;
    case 2:
        monthName = "Februari";
        break;
    case 3:
        monthName = "Maret";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "Mei";
        break;
    case 6:
        monthName = "Juni";
        break;
    case 7:
        monthName = "Juli";
        break;
    case 8:
        monthName = "Agustus";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "Oktober";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "Desember";
        break;

    default:
        monthName = false;
        console.log('Format bulan harus angka 1 - 12');
        process.exit(1);
        break;
}

let isValidDate = tanggal >= 1 && tanggal <= 31;
if (isValidDate === false) {
    console.log('Format tanggal harus angka 1 - 31');
    process.exit(1);
}

let isValidYear = tahun >= 1900 && tahun <= 2200;
if (isValidYear === false) {
    console.log("Format tahun harus angka 1900 - 2200");
    process.exit(1);
}

console.log(`${tanggal} ${monthName} ${tahun}`);