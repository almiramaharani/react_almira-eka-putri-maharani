# React Routing

## 1. Penjelasan React Routing
React routing adalah library yang digunakan dalam pengembangan aplikasi React untuk mengelola navigasi dan routing antar halaman atau komponen dalam aplikasi web. Dengan menggunakan react routing, kita dapat membuat aplikasi React yang memiliki navigasi yang dinamis dan mudah digunakan oleh pengguna.

## 2. Komponen React Routing
Beberapa komponen kunci dalam react routing:
* `<BrowserRouter>`: digunakan untuk routing berbasis URL yang membungkus seluruh aplikasi React dan menentukan jenis routing yang akan digunakan.
* `<Route>`: digunakan untuk mendefinisikan alamat URL yang akan mengarah ke komponen tertentu. Memiliki prop `path` yang menentukan alamat URL yang harus cocok agar komponen dapat dirender.
* `<Link>`: digunakan untuk membuat tautan antar halaman dalam aplikasi.
* `<Switch>`: digunakan untuk mengelompokkan beberapa `<Route>` bersama-sama dan menghindari rerendering beberapa komponen secara bersamaan ketika ada lebih dari satu cocok dengan URL.
* `<Redirect>`: digunakan untuk mengalihkan pengguna ke halaman atau URL lain jika kondisi tertentu terpenuhi.

## 3. Hook Routing pada React
React Router versi 6 telah memperkenalkan hook routing yang memungkinkan kita untuk mengelola navigasi dan routing dalam komponen berbasis fungsi menggunakan hook. Berikut beberapa hook routing yang tersedia dalam React Router:
* `useNavigate`: digunakan untuk mendapatkan fungsi navigate yang memungkinkan kita untuk melakukan navigasi programmatic dalam komponen berbasis fungsi. Contoh:
```
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <button onClick={handleClick}>About</button>
  );
}
```
* `useParams`: digunakan untuk mengambil parameter dari URL saat ini dan berguna jika kita ingin mengakses dan menggunakan data yang disimpan dalam parameter URL. Contoh:
```
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();

  return <h2>Profil Pengguna: {username}</h2>;
}
```
