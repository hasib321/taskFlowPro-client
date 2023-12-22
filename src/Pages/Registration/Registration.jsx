import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import registerLottie from "../../assets/registration.json";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Registration = () => {
  const { signUpUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.text.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photoURL, email, password);

    //password validation
    if (password?.length < 6) {
      new Swal(
        "Too Short password",
        "password must be at least 6 characters long",
        "warning"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      new Swal(
        "Need Capital letter",
        "Requires at least one capital letter",
        "warning"
      );
      return;
    } else if (!/[@#$%^&*!]/.test(password)) {
      new Swal(
        "Need special character",
        "Requires at least one special character",
        "warning"
      );
      return;
    }
    //register user
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        new Swal("Good job!", "You have Registered!", "success");

        //updateProfile
        handleUpdateProfile(name, photoURL).then(() => {
          // navigate("/");
        });
        navigate(location?.state ? location.state : "/");
        new Swal("Good job!", "Successfully logged in", "success");
      })
      .catch((error) => {
        console.log(error);
        new Swal("OPS!", error.message, "warning");
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 my-5">
        <div className="flex-1">
          <div>
            <Lottie animationData={registerLottie} loop={false}></Lottie>
          </div>
        </div>
        <div className="flex-1">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#e2f4ea]">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-5xl text-[#0b996f] text-center font-bold">
                Sign Up!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#0b996f] text-white">
                  Register
                </button>
              </div>
              <div>
                <p className="text-green-900 font-semibold">
                  already have account? please
                  <Link className="text-[#0b996f]" to="/login">
                    <span> Login</span>
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

export default Registration;
