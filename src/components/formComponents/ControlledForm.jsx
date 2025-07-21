"use client";

import { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //UNTUK MENANGKAP PERUBAHAN YANG
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //FUNGSI YANG DIJALANKAN KETIKA TOMBOL SUBMIT BAWAH DIPENCET
  const handleSubmit = (e) => {
    e.preventDefault();

    console.info("Proses Validasi")

    console.info("Controlled Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Controlled Register Form</h2>

      <label>First Name</label>  
      <input
      type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange} className="w-full p-2 border rounded-2xl" placeholder="Masukkan Nama Depan"
      />

      <label>Last Name</label>  
      <input
      type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange} className="w-full p-2 border rounded-2xl" placeholder="Masukkan Nama Belakang (Opsional)"
      />

      <label>E-Mail</label>  
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange} className="w-full p-2 border rounded-2xl" placeholder="Masukkan E-Mail Anda"
      />

      <label>Password</label>  
      <input
      type="password"
        name="password"
        value={formData.password}
        onChange={handleChange} className="w-full p-2 border rounded-2xl" placeholder="Masukkan Password Anda"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">SUBMIT</button>
    </form>
  );
}
