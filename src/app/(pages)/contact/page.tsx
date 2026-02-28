import React from "react"
import ContactHero from "@/components/contact-components/ContactHero"
import ContactContact from "@/components/contact-components/ContactContact"

const page = () => {
  return (
    <main className="bg-white mt-12 sm:mt-14 md:mt-15">
      <ContactHero />
      <ContactContact />
    </main>
  )
}

export default page
