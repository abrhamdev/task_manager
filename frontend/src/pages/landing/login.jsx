import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../components/contextapi/toster/toastContext";
import { userDataContext } from "../../components/contextapi/userdata/userdata";
import { API_URL } from "../../../api.config";
import LoadingAnimation from "../../components/services/loading";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });
  const { addToast } = useToast();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { setUserData } = useContext(userDataContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      navigate("/dashboard/home");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setError("");
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { email, password, remember } = formData;
      const response = await axios.post(`${API_URL}/api/users/login`, {
        email,
        password,
      });
      setLoading(false);
      setUserData({
        username: response.data.username,
        userid: response.data.userid,
      });
      addToast(response.data.message);
      if (remember) {
        localStorage.setItem("authtoken", response.data.token);
      } else {
        sessionStorage.setItem("authtoken", response.data.token);
      }
      navigate("/dashboard/home", {
        state: { username: response.data.username },
      });
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "something went wrong!");
      setLoading(false);
      setSuccess("");
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email-Address
            </label>
            <input
              id="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              name="email"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange}
                name="remember"
                className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm leading-5 text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm">
              Forgot your password?
            </a>
          </div>
          {loading ? (
            <div className="mt-6">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-300 bg-gradient-to-b border border-transparent rounded-md font-semibold capitalize text-white focus:outline-none focus:ring disabled:opacity-25 transition"
                
              >
               <LoadingAnimation width={5} height={5} />
               Sign In
              </button>
            </div>
          ) : (
            <div className="mt-6">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-500 bg-gradient-to-b border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-400 active:bg-blue-500 focus:outline-none focus:ring disabled:opacity-25 transition"
              >
                Sign In
              </button>
            </div>
          )}
          <hr className="mt-6" />
          <div className="flex justify-center mt-2">
            <button
              id="google-login"
              className="bg-white border border-gray-300 shadow-md text-black px-4 py-2 rounded-md flex items-center"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link to="/signup" className="underline">
              Sign up for an account
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link to="/" className="underline">
              back to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
