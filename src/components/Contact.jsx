import { useForm } from "react-hook-form";
import ErrorForm from "./ErrorForm";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
function Contact() {
  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;
  const serviceId = "service_flxj8gl";
  const templateId = "template_i7gx5rx";
  const userId = "HLZA867EaEZ4gSoNa";

  function onSubmit(data) {
    emailjs.send(serviceId, templateId, data, userId).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Email sent successfully!", {
          position: "top-center",
        });
        reset();
      },
      function (error) {
        console.error("FAILED...", error);
        toast.error("Failed to send email. Please try again later.");
      }
    );
  }
  function onError(err) {
    console.log(err);
  }
  return (
    <section className="contact" id="contact">
      <h4 className="title-h4">Get in touch</h4>
      <h2 className="title-h2">
        Contact <span className="text-color">me</span>
      </h2>
      <div className="contact-container">
        <form
          action=""
          className="contact-container-form"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "This field is required",
              })}
            />
            <ErrorForm>{errors?.name?.message}</ErrorForm>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              {...register("email", {
                required: "This field is required",
              })}
            />
            <ErrorForm>{errors?.email?.message}</ErrorForm>
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input
              type="text"
              placeholder="Enter your message"
              {...register("message", {
                required: "This field is required",
              })}
            />
            <ErrorForm>{errors?.text?.message}</ErrorForm>
          </div>
          <button className="contact-container-btn">Submit &rarr;</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
