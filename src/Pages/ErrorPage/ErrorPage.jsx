import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import errorElement from "../../assets/erorr.json";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl text-red-700">Oopss Not Found</h1>
        {/* Error page lottie */}
        <div>
          <Lottie
            animationData={errorElement}
            loop={false}
            className="h-96"
          ></Lottie>
        </div>
        <p className="text-xl text-blue-700 mt-3">
          {error.status || error.message}
        </p>
        {error.status === 404 && (
          <div className=" mt-6">
            <Link to="/">
              <button className="bg-[#f43b86] px-2 rounded-md py-1 text-white">
                GO HOME
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
