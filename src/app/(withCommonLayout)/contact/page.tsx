import ContactForm from '@/components/shared/ContactForm'
import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
        <SectionTitle title='Contact Form'/>
        <p className='text-center'><i>Feel free to reach out to us for any questions or inquiries.</i></p>
        <ContactForm/>
    </div>
  )
}

export default ContactPage