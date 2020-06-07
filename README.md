# Sorting-Tutorial

Sorting visualizer

### Cara Menjalankan Aplikasi

#### Menjalankan Service API (Backend)

1. Masuk ke folder `backend` melalui Terminal/CMD.
2. Menginstal package yang diperlukan pada package.json dengan perintah `yarn install` atau `npm install`
3. Ketikan `yarn start` atau `npm start`, untuk menjalankan server backendnya.
4. Tunggu hingga server berhasil berjalan.

#### Menjalankan Aplikasi (Frontend)

1. Masuk ke folder `frontend` melalui Terminal/CMD.
2. Menginstal package yang diperlukan pada package.json dengan perintah `yarn install` atau `npm install`.
3. Ketikan `yarn start` atau `npm start`, untuk menjalankan aplikasinya.
4. Setelah itu tunggu hingga proses berhasil.

##### Konfigurasi

1. Mengubah `PORT` pada backend server, yaitu dengan mengubah pada variabel `PORT` pada file `server.js` yang berada di folder `backend`

2. Mengubah `HOST API` pada frontend, yaitu dengan mengubah pada variabel `URL_API` pada file `Sorting.js` yang berada di folder

##### cara develop menggunakan docker-compose

1. untuk development digunakan untuk development agar bisa auto refresh backend dan frontend

```
docker-compose -f docker-compose-dev.yml up --build -d

```

2. untuk production digunakan untuk mengecek bagaimana bentuk website saat dilihat di heroku

```
docker-compose -f docker-compose-dev.yml up --build -d

```

##### cara deploy ke heroku

1. login ke heroku

```
heroku container:login
```

2. buat aplikasi menggunakan perintah di bawah pastikan aplikasimu kurang dari 5 jika sudah 5 hapus jika menggunakan free heroku

```
heroku create
```

3. ganti <HEROKU-APP-NAME> dengan nama heroku yang kamu buat dari heroku create

```
docker tag faridlazuarda/farid-sorting-tutorial:prod registry.heroku.com/<HEROKU-APP-NAME>/web
```

misal kamu mendapatkan hasil dari "heroku create" seperti dibawah

```
Creating app... done, ⬢ arcane-earth-48458
https://arcane-earth-48458.herokuapp.com/ 
```

maka docker tagnya menjadi

```
docker tag faridlazuarda/farid-sorting-tutorial:prod registry.heroku.com/arcane-earth-48458/web:latest
```

4. push docker tag tadi ke registry docker heroku sama juga dengan diatas ganti <HEROKU-APP-NAME> dengan nama aplikasimu

```
docker push registry.heroku.com/<HEROKU-APP-NAME>/web:latest
```

5. setelah itu deploy aplikasimu ke docker dengan cara seperti dibawah ini

```
heroku container:release web
```

6. setelah selesai mendeploy , buka aplikasimu dengan

```
heroku open
```

7. misal kamu ingin mengupdate aplikasimu, jalankan "docker-compose build" lalu mulai lagi dari langkah no 3

