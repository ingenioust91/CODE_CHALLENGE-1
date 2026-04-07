# Code Challenge 1 – Product Filter App

## 📌 Overview

Project ini adalah implementasi **cascading filter (Category → Sub-Category → Brand)** menggunakan data JSON statis. Aplikasi akan menampilkan daftar produk yang secara dinamis berubah berdasarkan filter yang dipilih oleh user.

## Screen Shots

![Initial State](https://i.imgur.com/F9f5g9Z.png)
![Categories Selected](https://i.imgur.com/cT1kw5B.png)
![SubCategories Selected](https://i.imgur.com/A3KhNrN.png)
![Brands Selected](https://i.imgur.com/uoR8vkq.png)
![Product Selected](https://i.imgur.com/4toM5Uy.png)

## 📂 Data Source

Data disimpan di dalam folder `public` dengan nama file:

```
public/data.json
```

Struktur data terdiri dari:

* `categories`
* `subCategories`
* `brands`
* `products`

Relasi data:

* `category` → memiliki banyak `subCategory`
* `subCategory` → memiliki banyak `brand`
* `brand` → memiliki banyak `product`

---

## 🚀 Features

* Layout project ini terdiri dari :

  * Section Combobox
  * Section Breadcrumb
  * Section Result

### 1. Initial State

* Saat pertama kali load:

  * Hanya **Category combobox** yang aktif dan terisi data
  * **Sub-Category** **Brand** dan **product**:

    * Kosong
    * Disabled

---

### 2. Cascading Dropdown Behavior

* Ketika user memilih **Category**:

  * Sub-Category akan:

    * Terisi sesuai `categoryId`
    * Menjadi aktif (enabled)

  * Breadcrumb Category ditampilkan
  * Result Category ditampilkan
  * URL akan otomatis menambahkan ?category=categoryId

* Ketika user memilih **Sub-Category**:

  * Brand akan:

    * Terisi sesuai `subCategoryId`
    * Menjadi aktif (enabled)

  * Breadcrumb SubCategory ditampilkan
  * Result SubCategory ditampilkan
  * URL akan otomatis menambahkan ?subcategory=subCategoryId

* Ketika user memilih **Brand**:

  * Product akan:

    * Terisi sesuai `brandId`
    * Menjadi aktif (enabled)

  * Breadcrumb Brand ditampilkan
  * Result Brand ditampilkan
  * URL akan otomatis menambahkan ?brand=brandId

* Ketika user memilih **Product**:

  * Breadcrumb Product ditampilkan
  * Result Product ditampilkan
  * Product price ditampilkan
  * URL akan otomatis menambahkan ?product=productId

---

### 3. Dynamic UI Updates

* UI akan berubah secara otomatis berdasarkan filter dari combobox

---

### 4. State Persistence (URL Sync)

* Filter tetap tersimpan saat refresh
* Project ini menggunakan **URL Search Params**, dimana UI akan:

  * Membaca URL saat load
  * Mengisi kembali state berdasarkan parameter

---

### 5. Reset Functionality

* Terdapat tombol **Reset Filter**
* Saat diklik:

  * Semua filter dihapus
  * URL dibersihkan
  * Kembali ke kondisi awal:

    * Hanya Category yang aktif

---

### 6. Data Loading

* Menggunakan **React Router loader** src/app/router/router.tsx

```ts
const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        loader : productLoader
    }
])
```

---

## 🧠 Logic Summary

### Filtering Flow:

1. User pilih Category
2. Filter SubCategory berdasarkan `categoryId`
3. User pilih SubCategory
4. Filter Brand berdasarkan `subCategoryId`
5. User pilih Brand
6. Filter Product berdasarkan `brandId`

---

## 🛠️ Tech Stack

* React
* React Router DOM (loader & search params)
* TypeScript

---
