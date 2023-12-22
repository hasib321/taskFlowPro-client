import Lottie from "lottie-react";
import contactUs from "../../../assets/contactUs.json";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoCallSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1">
          <h1 className="text-[#0b996f] text-5xl font-semibold py-7">
            Contact Us for Any <br /> Inquiries or Assistance
          </h1>
          <p className="text-gray-600">
            Our dedicated team is here to help. Whether you have questions about
            our services, need support with a booking, or simply want to chat,
            feel free to reach out. Your satisfaction is our priority, and we're
            ready to assist you on your journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
            <div className=" rounded-xl space-y-4 ">
              <span className="bg-white ">
                <HiBuildingOffice className="text-[#0b996f] text-3xl bg-slate-50 rounded-full"></HiBuildingOffice>
              </span>
              <h1 className="text-green-900 text-2xl font-semibold ">
                Our Office
              </h1>
              <div>
                <p className="text-gray-600 text-lg ">
                  TaskFlow Sesetan No.210, Sesetan,
                </p>
                <p className="text-gray-600 text-lg ">Savar,Dhaka</p>
              </div>
            </div>
            <div className=" rounded-xl space-y-4 ">
              <span className="bg-white ">
                <IoCallSharp className="text-[#0b996f] text-3xl bg-slate-50 rounded-full"></IoCallSharp>
              </span>
              <h1 className="text-green-900 text-2xl font-semibold ">
                Contact Info
              </h1>
              <div>
                <p className="text-gray-600 text-lg ">+1000000000</p>
                <p className="text-gray-600 text-lg ">taskflowPro.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div
            data-aos="slide-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Lottie
              animationData={contactUs}
              loop={true}
              className="h-96"
            ></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
