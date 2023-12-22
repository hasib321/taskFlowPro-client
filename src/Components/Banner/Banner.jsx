import Lottie from "lottie-react";
import bannerLottie from "../../assets/banner.json";
import { GoDotFill } from "react-icons/go";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Banner = () => {
  const [typewriterText] = useTypewriter({
    words: ["Journey", "Experience", "Adventure", "Process", "Quest"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="bg-gradient-to-r from-[#4a90e2] to-[#91eae4] ">
      <div className="min-w-full ">
        <div className="max-w-screen-xl mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-col lg:flex-row items-center gap-20">
            <div className="w-96 lg:w-[52rem] h-auto order-2 md:order-2 lg:order-1">
              <Lottie animationData={bannerLottie} loop={true}></Lottie>
            </div>
            <div className="space-y-8 order-1 md:order-1 lg:order-2 text-white">
              <h2 className="flex items-center w-48 bg-white p-3 text-sm text-gray-700 font-medium rounded-full">
                <GoDotFill className="text-[#319a64]"></GoDotFill>
                Enhanced Productivity
              </h2>

              <h1 className="text-5xl font-semibold ">
                Simplify Your Task Management
                <br />
                <span>{typewriterText}</span>
                <Cursor />
              </h1>
              <p>
                Welcome to TaskFlowPro, your go-to platform for seamless task
                management. Streamline your tasks effortlessly, collaborate
                effectively, and boost productivity. Join a community of
                developers, corporate professionals, and more, finding
                convenience in organizing their tasks. Get started today for a
                smarter way to handle your workflow!
              </p>
              <Link to="/login">
                <button className="btn bg-[#0b996f] border-none text-white hover:bg-[#0a8561] py-3 px-6 rounded-lg transition duration-300 mt-5">
                  Let’s Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
