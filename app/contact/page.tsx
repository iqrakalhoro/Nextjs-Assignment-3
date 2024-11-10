import React from 'react';
import Styles from './contact.module.css'

const ContactForm = () => {
  return (
    <div className={Styles["container"]}>
      <div className={Styles["flex-center"]}>
        <div className={Styles["text-center"]}>
          <h3 className={Styles["heading"]}>Contact me</h3>
          <h1 className={Styles["subheading"]}>Get in Touch</h1>
        </div>
        <form className={Styles["form"]}>
          <input
            type="text"
            placeholder="Username"
            required
            className={Styles["input"]}
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className={Styles["input"]}
          />
          <input
            type="text"
            placeholder="Email Address"
            required
            className={Styles["input"]}
          />
          <textarea
            placeholder="Type Your Message Here"
            rows={6}
            required
            className={Styles["textarea"]}
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className={Styles["submit"]}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
