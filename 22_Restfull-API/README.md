# Restfull API

## 1. Metode HTTP
RESTful API menggunakan metode HTTP (seperti GET, POST, PUT, DELETE) sebagai cara standar untuk berinteraksi dengan sumber daya. 
- GET Method: untuk mengambil informasi tentang sumber daya
- POST Method: membuat sumber daya baru
- PUT Method: memperbarui sumber daya yang ada
- DELETE Method: menghapus sumber daya

## 2. Arsitektur Berbasis Sumber Daya
RESTful API mengadopsi pendekatan berbasis sumber daya, di mana setiap entitas yang dapat diakses melalui API diwakili sebagai sumber daya yang memiliki URI (Uniform Resource Identifier) unik. Penggunaan URI untuk mengidentifikasi sumber daya ini memungkinkan pengguna dan klien untuk mengakses, mengambil, dan memanipulasi sumber daya dengan cara yang terstruktur.

## 3. Penggunaan Status HTTP
RESTful API menggunakan kode status HTTP untuk memberikan informasi tentang hasil dari permintaan. Contohnya, kode status 200 OK menunjukkan bahwa permintaan berhasil, sementara kode status 404 Not Found menunjukkan bahwa sumber daya yang diminta tidak ditemukan.