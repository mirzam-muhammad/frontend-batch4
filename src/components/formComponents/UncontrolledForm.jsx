"use client";

import {useRef} from 'react';

export default function UncontrolledForm() {
const firstNameRef = useRef();
const lastNameRef = useRef();
const emailRef = useRef();
const passwordRef = useRef();
console.log(firstNameRef)

const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
    }

    console.info("Uncontrolled Form Submited: ", data)
    
    firstNameRef.current.value = ""
    lastNameRef.current.value = ""
    emailRef.current.value = ""
    passwordRef.current.value= ""
}

    return(
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Uncontrolled Register Form</h2>

      <label>First Name</label>  
      <input
      ref={firstNameRef}
      type="text"
        className="w-full p-2 border rounded-2xl" placeholder="Masukkan Nama Depan"
      />

      <label>Last Name</label>  
      <input
      ref={lastNameRef}
      type="text"
        className="w-full p-2 border rounded-2xl" placeholder="Masukkan Nama Belakang (Opsional)"
      />

      <label>E-Mail</label>  
      <input
      ref={emailRef}
        type="email"
        className="w-full p-2 border rounded-2xl" placeholder="Masukkan E-Mail Anda"
      />

      <label>Password</label>  
      <input
      ref={passwordRef}
      type="password"
        className="w-full p-2 border rounded-2xl" placeholder="Masukkan Password Anda"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">SUBMIT</button>
    </form>
  );
}