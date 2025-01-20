import React from "react";
import Title from "../../../../components/title/Title";
import ContactUs from "../../../../components/contact";
import Footer from "../../../../components/shared/footer";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactHome = () => {
  return (
    <div className="relative review snap-section flex flex-col justify-end">
      <div className="   flex mb-6">
        <div className="absolute top-0 right-0 w-full h-full bg-black opacity-30 "></div>
        <div className=" px-4 max-w-7xl mx-auto w-full z-10">
          <Title
            textClass="text-white"
            lineClass="bg-white"
            title=" Conatct Us"
          />
          <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-3 mt-6">
            <ContactUs />
            <div className=" ">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Get in Touch
                </h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <MapPin />,
                      text: "123 Business Ave, Suite 100, City, State 12345",
                    },
                    { icon: <Phone />, text: "+1 (555) 123-4567" },
                    { icon: <Mail />, text: "contact@yourcompany.com" },
                    { icon: <Clock />, text: "Mon-Fri: 9AM-5PM EST" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-primary ">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className=" mt-4 ">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                    Our Speciality
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "24/7 Customer Support",
                      "Top-Rated Equipment",
                      "Flexible Rental Options",
                      "Commitment to Innovation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ArrowRight className="flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white z-10 dark:bg-slate-800">
        <Footer />
      </div>
    </div>
  );
};

export default ContactHome;
