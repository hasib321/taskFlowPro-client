import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "#",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "#",
    },
  ];
  return (
    <div className="w-11/12">
      <footer className="bg-gradient-to-r from-[#4081cb] to-[#5baba5] ">
        <div className="text-gray-300 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-10 px-10 pt-20 ">
          <div className=" lg:col-span-2  border-r mt-5 px-3">
            <div>
              <img className="w-32" src={logo} alt="" />
            </div>
            <div>
              Connect with us and stay updated on social media. TaskFlowPro is
              dedicated to simplifying task management for individuals and
              teams. Join our community to streamline your workflow and boost
              productivity!
            </div>
          </div>

          <div className="mt-5 border-r px-3">
            <div>
              <h1 className="text-4xl font-bold">Quick Links</h1>
            </div>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#0b996f] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#0b996f] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#0b996f] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/events">
                  Blogs
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#0b996f] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/login">
                  LogIn
                </Link>
              </li>
              <li className="flex items-center gap-3 ">
                <BsFillArrowRightCircleFill className="text-[#0b996f] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 border-r px-3">
            <div>
              <h1 className="text-4xl font-bold">Social Media</h1>
            </div>
            <ul className="mt-5 space-y-3">
              {socialLinks?.map((link, index) => (
                <li className="flex items-center gap-3 text-lg" key={index}>
                  {link.icon}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 px-2 border-r">
            <div>
              <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
            <div className="mt-5">
              <p>Savar,Dhaka</p>
            </div>
            <div className="mt-5">
              <p className="flex items-center gap-3 ">
                <MdEmail className="text-gray-300 text-xl"></MdEmail>
                <span>taskflowpro@mail.com</span>
              </p>
              <p className="flex items-center gap-3 ">
                <MdAddIcCall className="text-gray-300 text-xl"></MdAddIcCall>

                <span>+8801011110001</span>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-10 flex items-center justify-center">
          <p className="text-center text-gray-300 text-sm">
            © 2023 - All right reserved by TaskFlowPro
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
