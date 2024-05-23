import { Icon } from "@iconify/react";
import { useState } from "react";
import ContactForm from "./ContactForm";
import Popup from "./Popup";

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section
      id="contact"
      className="py-10 flex flex-col justify-center items-start gap-8"
    >
      <div className="w-full flex flex-col items-start">
        <h2 className="sm:text-3xl text-2xl font-bold">
          <span className="text-indigo-500">05. </span> &lt;get in touch&gt;
        </h2>
        <p className="mt-5">
          My inbox is always open. Whether you have a question or project or
          just want to say hi, I’ll try my best to get back to you!
        </p>
        <a
          onClick={() => openPopup()}
          className="mt-5 bg-indigo-500 cursor-pointer text-white py-3 px-8  rounded flex items-center justify-center "
        >
          <Icon icon="mdi:email" className="mr-2" /> Say Hello!
        </a>
      </div>
      <h2 className="sm:text-3xl text-2xl font-bold text-gray-300 self-end">
        &lt;/get in touch&gt;
      </h2>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title="Contact Us"
        content={<ContactForm />}
      />
    </section>
  );
};
export default Contact;
