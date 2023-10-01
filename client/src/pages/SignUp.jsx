import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          className="bg-slate-100 p-3 rounded-lg"
          name="Username"
          id="username"
          placeholder="Username"
        />
        <input
          type="email"
          className="bg-slate-100 p-3 rounded-lg"
          name="Email"
          id="email"
          placeholder="Email"
        />
        <input
          type="password"
          className="bg-slate-100 p-3 rounded-lg"
          name="Password"
          id="password"
          placeholder="Password"
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
