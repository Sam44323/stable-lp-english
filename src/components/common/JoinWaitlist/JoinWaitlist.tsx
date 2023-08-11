import React from "react";
import { Modal } from "reactstrap";
import styles from "./JoinWaitlist.module.scss";
import axios from "../../../utils/axios";
import { toast } from "react-toastify";

const JoinWaitlist = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");

  React.useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  const handleJoinWaitlist = async () => {
    if (!email || !email.includes("@")) {
      return toast.error("Please enter a valid email address");
    }
    toast.loading("Adding you to our waitlist...");
    try {
      const response = await axios.post("/v1/user/waitlist", {
        email,
      });
      if (response.status === 200) {
        toast.dismiss();
        toast.success("You have been added to our waitlist");
        setShowModal(false);
        setEmail("");
      }
    } catch (err: any) {
      toast.dismiss();
      setEmail("");
      toast.error(err.message);
    }
  };

  return (
    <Modal
      isOpen={showModal}
      centered
      toggle={() => setShowModal(false)}
      size="lg"
      style={{
        height: "100vh",
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src="/images/shapes/left-ellipse-top.png"
          className="absolute left-0"
        />
        <img
          src="/images/shapes/join-ellipse-test.png"
          className="absolute right-0 bottom-0"
        />
        <div className="max-w-[95%] mx-auto flex flex-row justify-end mt-3 relative z-30">
          <img
            onClick={() => setShowModal(false)}
            src="/images/white-cross-icon.svg"
            alt="white-cross-icon"
            className="hover:cursor-pointer"
          />
        </div>
        <div className="relative z-10 px-10 py-10">
          <div>
            <h1 className="text-white font-robot font-600 text-5xl leading-[50px] mobile:text-3xl mobile:text-center">
              Subscribe & <br /> Don't Miss a Thing!
            </h1>
            <section className="my-4">
              <h1 className="text-white font-be-vietnam-pro text-3xl font-300 mobile:text-xl mobile:text-center">
                Join Our Testing
              </h1>
              <p className="text-white font-be-vietnam-pro text-base mt-3 font-100 max-w-[80%] ml-0  mobile:text-center mobile:max-w-[100%]">
                We would like to invite you to be one of the first to try out
                our new product. To do so, we would like to add you to our
                waiting list for the beta-release.
              </p>
            </section>
            <div className="flex flex-row justify-between mobile:hidden">
              <input
                placeholder="Enter your email"
                type="email"
                className="
                border-1 border-white bg-transparent rounded-full py-[14px] px-4 font-roboto font-400 tracking-wide
                text-white text-base w-[70%] placeholder-slate-50
                "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button
                onClick={handleJoinWaitlist}
                className="
              bg-white rounded-full py-[14px] px-3 font-robot text-sm font-700 tracking-wide
              text-black
              "
              >
                Subscribe & Join Testing
              </button>
            </div>
            <div className="hidden mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center">
              <input
                placeholder="Enter your email"
                type="email"
                className="
                border-1 border-white bg-transparent rounded-full py-[14px] px-4 font-roboto font-400 tracking-wide
                text-white text-base w-[70%] placeholder-slate-50 mobile:w-[100%] mobile:mb-4
                "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button
                onClick={handleJoinWaitlist}
                className="
              bg-white rounded-full py-[14px] px-3 font-robot text-sm font-700 tracking-wide
              text-black
              "
              >
                Subscribe & Join Testing
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default JoinWaitlist;
