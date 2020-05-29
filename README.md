# Sorting-Tutorial
Simple web application to visualize various sorting algorithms.

## Getting Started
Aplikasi ini disusun dengan memanfaatkan [Vue.js](https://vuejs.org/) untuk frontend dan Node.js sebagai backend nya.

### Prerequisite
Untuk menjalankan aplikasi ini, pastikan perangkat anda telah memiliki dependencies berikut ini:
- [Node.js](https://nodejs.org/en/) (v12.16.3 LTS)
- [npm](https://www.npmjs.com/) (v6.14.4)

Anda dapat memeriksa versi dari dependencies yang digunakan dengan menjalankan perintah berikut
pada command prompt/ terminal perangkat anda.
```
node -v
npm -v
```

### Installing
Jalankan perintah berikut pada CMD/ terminal perangkat anda di directory `sorting`

```
npm install
npm run serve
```

Anda akan mendapat pesan pada CMD/ terminal sebagai berikut.
```
DONE  Compiled successfully in 5326ms                   12:06:27 PM


App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.1.8:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

Anda dapat mengakses aplikasi web pada alamat http://localhost:8080/ (Direkomendasikan menggunakan web browser Chrome atau Mozilla Firefox)

## Running The App
1. Pilih salah satu metode sorting yang ingin digunakan.
2. Masukkan nilai-nilai yang ingin diurutkan, dipisahkan dengan koma (tanpa spasi). Nilai yang bisa diurutkan hanya nilai yang berupa integer positif.<br>
Contoh masukan: 1,5,3,4
3. Tekan tombol "Sort!"
4. Hasil pengurutan (per langkah) dapat dinavigasi pada kotak Sorting Steps.


## Deployment
Aplikasi berhasil di deploy dan dapat diakses melalui alamat [ini](https://sortingtutorial.z13.web.core.windows.net/). 

## Author
William Fu
