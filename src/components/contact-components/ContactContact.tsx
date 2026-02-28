import React from 'react'
import ContactForm from '../ui-components/forms/ContactForm'

const ContactContact = () => {
    return (
        <section className="pb-16 md:pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl md:rounded-3xl bg-white shadow-sm p-5 sm:p-7 md:p-10">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactContact
