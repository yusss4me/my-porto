import React from 'react';
import { Metadata } from 'next';
import ContactPageContent from '@/components/templates/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact | Ardi Yustiar',
  description: 'Get in touch with Ardi Yustiar for software engineering, architecture, and collaborations.'
};

export default function ContactPage() {
  return <ContactPageContent />;
}
