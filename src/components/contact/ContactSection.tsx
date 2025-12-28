import { Fragment } from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <Fragment>
      <h3 className="text-3xl font-bold text-[#ECDFCC] mb-8 sm:mb-12 border-l-4 border-terciary pl-4">
        Contact
      </h3>
      <ContactForm />
    </Fragment>
  );
}
