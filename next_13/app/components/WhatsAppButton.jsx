import Link from 'next/link';
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/6281211118412"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsWhatsapp size='2rem' />
    </Link>
  )
}

export default WhatsAppButton
