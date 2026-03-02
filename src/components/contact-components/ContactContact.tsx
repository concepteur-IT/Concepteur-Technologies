import React from "react";
import { MapPin, Mail } from "lucide-react";
import ContactForm from "../ui-components/forms/ContactForm";
import WhatsAppIcon from "../ui-components/icons/WhatsAppIcon";

const ContactContact = () => {
  const mapsUrl = "https://maps.app.goo.gl/KnKUJXcJ6CHmmFHn7";

  return (
    <section className="pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Form Section */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Address / Contact Info Section */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {/* Address Block */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-black uppercase tracking-widest">
                  Headquarters
                </h3>
              </div>
              <div className="pl-11">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 font-light leading-relaxed text-lg hover:text-black transition-colors inline-flex items-start gap-2"
                  aria-label="Open headquarters location in Google Maps"
                >
                  <MapPin className="w-4 h-4 mt-1 shrink-0" />
                  <span>
                    Bara Kajipara, Sukh Sagar Road,
                    <br />
                    741222.
                    <br />
                    Chakdaha, Nadia.
                  </span>
                </a>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Direct Contact */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-black uppercase tracking-widest">
                  Direct Contact
                </h3>
              </div>
              <div className="pl-11 flex flex-col gap-2">
                <a
                  href="mailto:info@concepteur.com"
                  className="text-gray-600 font-light text-lg hover:text-black transition-colors inline-flex items-center gap-2 w-fit"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>info@concepteur.com</span>
                </a>
                <a
                  href="https://wa.me/919832996894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 font-light text-lg hover:text-black transition-colors inline-flex items-center gap-2 w-fit"
                  aria-label="Chat on WhatsApp at +91 9832996894"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>+91 9832996894</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContact;
