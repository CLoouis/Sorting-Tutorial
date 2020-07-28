# Sorting-Tutorial
Berikut ini merupakan salah satu project yang menjadi bagian dari seleksi asisten IRK 2018 oleh Muhammad Ayyub Abdurrahman 13518076

## Latar Belakang
Salah satu penerapan algoritma yang paling mudah adalah sorting. Saat ini sudah banyak algoritma untuk sorting yang telah dikembangkan di seluruh dunia. Untuk membantu orang - orang memahami berbagai algoritma sorting, tercetuslah ide untuk membuat sebuah website yang memberikan pemahaman mengenai algoritma sorting. Harapannya, website ini dapat dikembangkan lebih lanjut untuk pembelajaran strategi algoritma yang lain seperti Divide & Conquer, Dynamic Programming, dll

## Spesifikasi
Buatlah sebuah aplikasi web dengan spesifikasi sebagai berikut :
 1. Pengguna dapat memilih jenis algoritma sorting yang digunakan. Pilihan yang tersedia ialah sebagai berikut : 
	* Bubble Sort (200 poin)
	* Merge Sort (300 poin)
 2. Pengguna dapat melihat langkah - langkah dari algoritma sorting yang digunakan hingga hasil terurut
 3. Masukan pengguna berupa kumpulan bilangan bulat positif. Maksimum banyaknya bilangan yang diurutkan adalah 10
 4. Pengguna dapat mengetahui informasi mengenai kompleksitas algoritma yang digunakan
 5. Teknologi dan bahasa pemrograman bebas untuk back-end, dan untuk front-end dibuat semenarik mungkin dengan menggunakan **React.js** atau **Vue.js**
 6. Pastikan Readme ini diganti dengan Readme untuk project yang kalian buat (dibuat sejelas mungkin) !
 
## Installation
### Requirements
Some packages you need to install on your machine:
1. [Python 3.0 or above](https://www.python.org/)
make sure you have add the path of your python and pip installation to your PATH system variable.
2. Flask 
```
pip install flask
```
3. [Node js](https://nodejs.org/en/)
make sure you have add the path C:\Windows\System32 and the path of nodejs installation to your environment variable.

### How to compile on Windows?
1. Open 2 cmd (to run react as frontend and flask as backend)
2. Open frontend folder
```
cd frontend
```
3. Start react
```
npm start
```
4. Open backend folder (in another cmd)
```
cd backend
```
5. set flask app
```
set FLASK_APP=mainSort.py
```
6. run flask
```
flask run
```
