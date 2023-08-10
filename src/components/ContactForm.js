import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("moqoeaov");

  if (state.succeeded) {
    return (
      <p className="succeeded-message">
        Thank you for reaching out! I will respond to your message soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="name">
        Name
      </label>
      <input id="name" type="text" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label className="form-label" htmlFor="email">
        Email Address
      </label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label className="form-label" htmlFor="message">
        Message
      </label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" className="submit-btn" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
