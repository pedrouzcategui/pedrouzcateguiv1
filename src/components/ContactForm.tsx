"use client";
import { Code, Link, Mail, MessageSquare, Phone, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle', 'sending', 'success', 'error'

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulación de envío de formulario (reemplazar con lógica real de API/Backend)
    console.log("Formulario enviado:", formData);

    setTimeout(() => {
      // Simulación de éxito
      setStatus("success");
      setFormData({ fullName: "", email: "", phone: "", message: "" }); // Limpiar formulario
    }, 1500);

    // Simulación de error si lo deseas:
    // setTimeout(() => { setStatus("error"); }, 1500);
  };

  const inputClasses =
    "w-full p-3 rounded-lg bg-[#1E201E] border border-[#697565] text-[#ECDFCC] placeholder-[#697565]/80 focus:ring-[#ECDFCC] focus:border-[#ECDFCC] transition duration-200 shadow-inner appearance-none";
  const labelClasses = "block text-sm font-medium text-[#ECDFCC] mb-1";

  const socialIconClasses =
    "text-[#697565] hover:text-[#ECDFCC] transition duration-300 w-6 h-6 sm:w-8 sm:h-8";

  return (
    <div className="border-secondary border-2 p-6 sm:p-10 rounded-xl  max-w-3xl mx-auto">
      <p className="text-xl text-[#ECDFCC] mb-8 text-center">
        I'm always open to discussing new projects, collaboration opportunities,
        or exciting challenges in AI and DevOps.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Fila: Nombre Completo y Correo Electrónico */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Nombre Completo */}
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              <User className="inline w-4 h-4 mr-2" />
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className={inputClasses}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              <Mail className="inline w-4 h-4 mr-2" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className={inputClasses}
            />
          </div>
        </div>

        {/* Fila: Teléfono */}
        <div>
          <label htmlFor="phone" className={labelClasses}>
            <Phone className="inline w-4 h-4 mr-2" />
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 555-5555"
            className={inputClasses}
          />
        </div>

        {/* Fila: Mensaje */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            <MessageSquare className="inline w-4 h-4 mr-2" />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or idea..."
            required
            className={inputClasses}
          />
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3 mt-4 text-lg font-semibold rounded-lg transition-colors duration-300 shadow-md
            bg-terciary text-[#ECDFCC] hover:bg-terciary/80 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Mensajes de Estado */}
        {status === "success" && (
          <p className="text-center text-[#ECDFCC] font-semibold pt-4">
            ✅ Message sent successfully! I'll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-400 font-semibold pt-4">
            ❌ An error occurred. Please try again or email me directly.
          </p>
        )}
      </form>

      {/* Social Icons debajo del formulario */}
      <div className="flex justify-center space-x-8 mt-10 border-t border-terciary/50 pt-6">
        <a href="#" className={socialIconClasses} aria-label="LinkedIn">
          <Link />
        </a>
        <a href="#" className={socialIconClasses} aria-label="GitHub">
          <Code />
        </a>
        <a href="#" className={socialIconClasses} aria-label="Twitter/X">
          <MessageSquare />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
