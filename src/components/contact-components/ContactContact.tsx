import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import ContactForm from "../ui-components/forms/ContactForm";

const ContactContact = () => {
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
                <p className="text-gray-600 font-light leading-relaxed text-lg">
                  Bara Kajipara, Sukh Sagar Road,
                  <br />
                  741222.
                  <br />
                  Chakdaha, Nadia.
                </p>
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
                  className="text-gray-600 font-light text-lg hover:text-black transition-colors block"
                >
                  info@concepteur.com
                </a>
                <p className="text-gray-600 font-light text-lg">
                  +91 90000 00000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContact;
