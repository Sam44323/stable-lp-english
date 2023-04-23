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
    try {
      const response = await axios.post("/v1/waitlist", {
        email,
      });
      if (response.status === 200) {
        toast.success("You have been added to our waitlist");
        setShowModal(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal isOpen={showModal} centered toggle={() => setShowModal(false)}>
      <div className={styles.JoinWaitlistContainer}>
        <h1>join our testing</h1>

        <section className={styles.DataContainer}>
          <p>
            We would like to invite you to be one of the first to try out our
            new product. To do so, we would like to add you to our waiting list
            for the beta-release.
          </p>
          <input
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button onClick={handleJoinWaitlist}>Join</button>
        </section>

        <p className={styles.NoThanksText}>No Thanks</p>
      </div>
    </Modal>
  );
};

export default JoinWaitlist;
