import Title from "../../../../components/title/Title";
import ContactUs from "../../../../components/contact";
import Footer from "../../../../components/shared/footer";
import { MailOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";

const ContactHome = () => {
  return (
    <div className="relative review snap-section flex flex-col justify-end">
      <div className="   flex items-center h-full mt-20 mb-20 md:mb-0">
        <div className="absolute top-0 right-0 w-full h-full bg-black opacity-30 "></div>
        <div className=" px-4 max-w-7xl mx-auto w-full z-10">
          <Title
            textClass="text-white"
            lineClass="bg-white"
            title=" Conatct Us"
          />
          <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4 mt-6">
            <ContactUs />
            <div className=" font-semibold bg-white dark:bg-slate-800 h-full flex-col justify-center items-center p-10 rounded-md">
              <h5 className=" font-bold text-xl">We're Here to Help!</h5>
              <p className=" text-md my-4">
                Whether you have questions about our services, need technical
                support, or just want to say hello, we're always ready to assist
                you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="border border-slate-800 dark:border-white w-10 h-10 flex items-center justify-center p-4 rounded-full">
                    <MailOutlined className=" text-lg" />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold">Email Us</h4>
                    <p className="">support@pulsepoint.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="border border-slate-800 dark:border-white w-10 h-10 flex items-center justify-center p-4 rounded-full">
                    <MessageOutlined className=" text-lg" />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold">Chat with Us</h4>
                    <p className="">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="border border-slate-800 dark:border-white w-10 h-10 flex items-center justify-center p-4 rounded-full">
                    <UserOutlined className=" text-lg" />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold">Visit Us</h4>
                    <p className="">123 Fitness St, Gym City</p>
                  </div>
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
