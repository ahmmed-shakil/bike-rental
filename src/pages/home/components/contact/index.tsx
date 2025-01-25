import Title from "../../../../components/title/Title";
import ContactUs from "../../../../components/contact";
import Footer from "../../../../components/shared/footer";

const ContactHome = () => {
  return (
    <div className="relative review snap-section flex flex-col justify-end">
      <div className="   flex items-center h-full mt-20">
        <div className="absolute top-0 right-0 w-full h-full bg-black opacity-30 "></div>
        <div className=" px-4 max-w-7xl mx-auto w-full z-10">
          <Title
            textClass="text-white"
            lineClass="bg-white"
            title=" Conatct Us"
          />
          <div className=" grid grid-cols-1 md:grid-cols-1 items-center justify-between gap-3 mt-6">
            <ContactUs />
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
