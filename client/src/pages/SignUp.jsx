import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const res = await axios
      .post("http://localhost:3000/api/auth/signup", formData,)

    console.log(res);
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
        <input
          type="text"
          className="bg-slate-100 p-3 rounded-lg"
          id="username"
          autoComplete="true"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="email"
          className="bg-slate-100 p-3 rounded-lg"
          id="email"
          autoComplete="true"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="bg-slate-100 p-3 rounded-lg"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-40">
          Sign Up
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have a account?</p>
        <Link to="/sign-in" className="text-blue-500">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
