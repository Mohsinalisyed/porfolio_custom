import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import TextareaField from "../ReuseComp/Textarea";
import InputFeild from "../ReuseComp/InputFeild";
import "./style.scss";
import Button from "../ReuseComp/Button";
import WhatsMsg from "../WhatsAppMsg";
import ModalComp from "../Modal";
import notification from "../toast";
import { ToastContainer } from "react-toastify";
import { HiPhone } from "react-icons/hi";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("service_9om7xnr", "template_j4oxnpx", values, "0sGY_6AthzL0ACvBx")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            phone: "",
            message: "",
          });
          setStatus("SUCCESS");
          notification("Your message submitted successfully", "success");
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error);
          notification(" Please Try Again Mail Send FAILED...", "error");
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e: any) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="main-contact">
      <div className="contact">
        <h2>Contact</h2>
        <div className="contact-feild">
          <p>{status && renderAlert()}</p>
          <form onSubmit={handleSubmit}>
            <h2 className="text-center grade">Send Message On Email</h2>
            <InputFeild
              value={values.fullName}
              handleChange={handleChange}
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="John Doe"
            />
            <InputFeild
              value={values.email}
              handleChange={handleChange}
              label="E-Mail"
              name="email"
              type="email"
              placeholder="jphn@example.com"
            />
            <InputFeild
              value={values.phone}
              handleChange={handleChange}
              label="Phone"
              name="phone"
              type="number"
              placeholder="+923xx-XXXXXXXXXX"
            />
            <TextareaField
              value={values.message}
              handleChange={handleChange}
              label="Your message here"
              name="message"
            />
            <div className="wrap-btn">
              <div className="sec-call">
                <button className="cal-sec bg-secondary ">
                  <a href="tel:+923085153201" className="text-light">
                    Call Me
                    <span>
                      <HiPhone />
                    </span>
                  </a>
                </button>
              </div>
              <Button strTitle="Send Email" loading={loading} />
              <div className="whasts-sec">
                <ModalComp buttonLabel="WhatsApp">
                  <WhatsMsg />
                </ModalComp>
              </div>
            </div>
          </form>
         
        </div>
      </div>
     
    </div>
  );
};

const renderAlert = () => <ToastContainer />;

export default Contact;
