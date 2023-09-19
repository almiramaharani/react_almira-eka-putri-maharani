# React Hook

## 1. Pengertian React Hooks
React hooks adalah fitur yang diperkenalkan dalam React versi 16.8 untuk memungkinkan penggunaan state dan fungsi terkait state dalam komponen fungsional. Dengan React Hooks, komponen fungsional dapat memiliki state, efek samping, dan akses ke siklus hidup komponen. Hooks dasar yang dipakai, diantaranya useState, useEffect, dan useContext.

## 2. Penjelasan useEffect
`useEffect` adalah salah satu React Hook yang digunakan dalam komponen fungsional untuk mengelola efek samping dan interaksi dengan siklus hidup komponen. Hal ini mirip dengan sikul hidup dalam komponen kelas, seperti `componentDidMount`, `componentDidUpdate`, dan `componentWillUnmount`. `useEffect` memungkinkan kita melakukan tindakan tertentu setelah render komponen, serta memantau perubahan pada nilai-nilai tertentu dalam komponen tersebut. Contoh:
```
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Komponen telah di-render');

    return () => {
      console.log('Komponen akan unmount');
    };
  }, []); 
  // Ketergantungan efek, dalam array kosong berarti efek ini hanya dijalankan setelah render pertama

  return <div>Komponen ini memiliki efek samping</div>;
}
```
## 3. Penjelasan custom hook
Custom hook adalah sebuah konsep dalam React yang memungkinkan kita untuk mengorganisir logika berbagi yang kompleks di antara komponen-fungsi menjadi fungsi yang dapat digunakan kembali. Dengan custom hook, kita dapat membagikan logika dan fungsionalitas tertentu antara komponen-fungsi tanpa harus mengulang kode yang sama di berbagai tempat.