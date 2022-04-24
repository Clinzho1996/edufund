import { useState } from "react";
import * as emailjs from "emailjs-com";

export default function useContactFormHook() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitContactDetails = async (payload) => {
    setIsLoading(true);

    const templateParams = {
      contact_name: payload.name,
      contact_email: payload.email,
      contact_message: payload.message,
    };

    try {
      const response = await emailjs.send(
        "swapbase",
        "contact_form_template",
        templateParams,
        "user_FfcSxQaX0OWEdzLafyD83"
      );
      setIsLoading(false);
      alert(
        "Thank you! We've received your message and we'll get back to you."
      );

      return response;
    } catch (error) {
      setIsLoading(false);
      console.log(error?.text);

      return null;
    }
  };
  return { isLoading, onSubmitContactDetails };
}
