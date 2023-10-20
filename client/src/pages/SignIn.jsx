import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { errorMessage } = useSelector((state) => state.user);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart()); //loading değişkenini true yapar
      const resApi = await axios.post("http://localhost:3000/api/auth/signin", formData);
      dispatch(signInSuccess(resApi.data.user));
      console.log(resApi);
      navigate("/");
    } catch (err) {
      console.log(err);

      if (err.response && err.response.data) {
        //response ve data varsa
        dispatch(signInFailure(err.response.data));
        return;
      } else {
        dispatch(signInFailure(err));
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
      <p className="text-red-700 mt-5">{error ? errorMessage || "Something Went Wrong.Please Contact Admin" : " "}</p>
    </div>
  );
}
