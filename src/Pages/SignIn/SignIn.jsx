import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottie from "../../assets/login.json";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
// import axios from "axios";
const SignIn = () => {
  const { logInUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //login with email & password
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);

        const loggedInUser = result.user;
        console.log(loggedInUser);
        // const user = { email };

        //get access token
        // axios
        //   .post("https://ridewave-server.vercel.app/jwt", user, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     console.log(res.data);
        //   })
        //   .catch((error) => console.log(error));

        navigate(
          location?.state ? location.state : "/login/dashboard/dashboardElement"
        );
        new Swal("Good job!", "Successfully logged in", "success");
      })
      .catch((error) => {
        console.log(error);
        new Swal("OPS!", error.message, "error");
      });
  };

  //login with Google
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(
          location?.state ? location.state : "/login/dashboard/dashboardElement"
        );
        new Swal("Good job!", "Successfully logged in", "success");
      })
      .catch((error) => {
        console.log(error);
        new Swal("OPS!", error.message, "error");
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 my-8">
        <div className="flex-1">
          <div>
            <Lottie
              animationData={loginLottie}
              loop={false}
              className="h-96"
            ></Lottie>
          </div>
        </div>
        <div className="flex-1">
          <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-[#e2f4ea]">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-5xl text-[#0b996f] text-center font-bold">
                Log In!
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-green-900 font-semibold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#0b996f] text-white">Log In</button>
              </div>
              <div className="mt-3">
                <div className="flex items-center  gap-1">
                  <h1 className="text-green-900 font-semibold">
                    Or login with
                  </h1>
                  <div className="mt-2 ">
                    {/* Google login */}
                    <FcGoogle
                      onClick={handleGoogleLogIn}
                      className="text-red-600 text-4xl cursor-pointer"
                    ></FcGoogle>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-green-900 font-semibold">
                  Don't have account? please
                  <Link className="text-[#0b996f]" to="/registration">
                    <span> Registration</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
