import React from "react";
import { Modal } from "reactstrap";
import styles from "./JoinWaitlist.module.scss";
import axios from "../../../utils/axios";

const JoinWaitlist = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = "hidden";
      setShowModal(true);
    }, 3000);
  }, []);

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
          <input placeholder="Enter your email" type="email" />
          <button>Join</button>
        </section>

        <p className={styles.NoThanksText}>No Thanks</p>
      </div>
    </Modal>
  );
};

export default JoinWaitlist;
