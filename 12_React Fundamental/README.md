# React Fundamental

## 1. React Lifecycle
Dalam React, terdapat Lifecycle methods yang merupakan metode yang digunakan untuk mengontrol proses rendering, pembaruan, dan penghapusan komponen React. Berikut adalah metode-metode yang digunakan dalam React untuk mengelola siklus hidup komponen:
* render(): Metode ini merupakan metode utama dalam siklus hidup komponen yang bertanggung jawab untuk merender elemen-elemen UI yang akan ditampilkan oleh komponen tersebut.
* componentDidMount(): Metode ini dipanggil setelah komponen berhasil dimasukkan ke dalam DOM yang digunakan untuk melakukan tugas-tugas, seperti pemanggilan data dari server.
* componentDidUpdate(): Metode ini tetap digunakan dalam siklus hidup baru dan digunakan setelah komponen dimasukkan ke dalam DOM.
* componentWillUnmount(): Metode ini dipanggil sebelum komponen dihapus dari DOM yang digunakan untuk membersihkan sumber daya atau perhentian proses.
## 2. Condition and List
### Render bersyarat
Render bersyarat merujuk pada teknik menggambar elemen-elemen UI berdasarkan kondisi tertentu. Seringkali melibatkan penggunaan struktur pengendalian aliran seperti, `if`, `else`, atau ekspresi ternary.<br>
Contoh:
```
render() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
        return <UserDashboard/>;
    } else {
        return <LoginScreen/>;
    }
}
```
### Render List
Render list umumnya melibatkan penggunaan method `map()` untuk menghasilkan elemen-elemen React dari setiap item dalam daftar.<br>
Contoh:
```
const numbers = [1,2,3,4];
const listItem = numbers.map((number) => 
    <li>{number}</li>
);

ReactDOM.render(
    <ul>{listItem}</ul>,
    document.getElementById('root')
);
```
### Key
Atribut key dalam React digunakan untuk memberikan identifikasi unik kepada setiap elemen dalam daftar saat kita merender daftar elemen menggunakan `map()`. Atribut key digunakan untuk membantu React dalam mengidentifikasi elemen-elemen dalam daftar yang berubah, ditambahkan, atau dihapus. Dengan adanya `key`, React dapat memutuskan dengan lebih efisien mana elemen yang perlu diperbarui saat perubahan terjadi tanpa perlu memeriksa semua elemen dalam daftar.<br>
Contoh:
```
const items = [
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2'},
];

const listItems = items.map((item) => (
    <li key={item.id}>{item.name}</li>
));
```

## 3. Styling in React
Styling dalam React dapat dilakukan menggunakan beberapa pendekatan berbeda. Berikut adalah beberapa cara yang dapat dilakukan untuk melakukan styling pada komponen React:
* **Inline Styles**<br>
Menentukan style langsung pada elemen HTML JSX menggunakan prop `style`.<br>
Contoh:
```
const myStyle = {
  color: 'blue',
  backgroundColor: 'lightgray',
};

function MyComponent() {
  return <div style={myStyle}>Hello World</div>;
}
```
* **CSS Modules**<br>
Menulis style CSS terpisah dalam file yang terpisah dengan mengimpor kelas CSS tersebut ke komponen dan menggunakannya seperti objek JavaScript. <br>
Contoh:
```
// styles.module.css
.myStyle {
  color: blue;
  background-color: lightgray;
}

// MyComponent.js
import React from 'react';
import styles from './styles.module.css';

function MyComponent() {
  return <div className={styles.myStyle}>Hello World</div>;
}
```
* **Styled-components**<br>
Memungkinkan kita menulis style dalam bentuk template string JavaScript dan menggabungkan logika komponen dengan styling. <br>
Contoh:
```
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: blue;
  background-color: lightgray;
`;

function MyComponent() {
  return <StyledDiv>Hello World</StyledDiv>;
}
```