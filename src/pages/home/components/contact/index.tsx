import React from "react";
import Title from "../../../../components/title/Title";
import ContactUs from "../../../../components/contact";
import Footer from "../../../../components/shared/footer";

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
          <ContactUs />
        </div>
      </div>
      <div className=" bg-white z-10 dark:bg-slate-800">
        <Footer />
      </div>
    </div>
  );
};

export default ContactHome;
