import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
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

      await axios.post("http://localhost:3000/api/auth/signin", formData);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
        return;
      } else {
        setErrorMessage("Something went wrong");
      }
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
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
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to="/sign-up" className="text-blue-500">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error ? errorMessage : null}</p>
    </div>
  );
}
