import { useForm } from "react-hook-form";
import ErrorForm from "./ErrorForm";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    toast("This is not working yet bcs it requires some backend )))");
    reset();
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
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 8000,
              style: {
                backgroundColor: "#373b41",
                color: "#fff",
                fontSize: "1.5rem",
              },
            }}
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
