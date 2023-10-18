import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [successs, setSuccess] = useState(null);
  const [statusMessage, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        formData
      );

      console.log(res);
  

      if(res.success === false) {
        setLoading(false);
        setError(true);
        setSuccess(false);
        return;
      }
      setSuccess(true);
      setMessage("Account created successfully");
      console.log(successs);
      navigate("/sign-in");
      

    } catch (error) {
      setLoading(false);
      setError(true);
      setSuccess(false);
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
        return;
      } else {
        setMessage("Something went wrong");
      }
    }
  };

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
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-40"
        >
          {loading ? "Loading..." : successs ? statusMessage : "Sign Up"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have a account?</p>
        <Link to="/sign-in" className="text-blue-500">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error ? statusMessage : null}</p>
    </div>
  );
}
