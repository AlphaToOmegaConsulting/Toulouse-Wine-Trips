import type { Metadata } from 'next';
import Booking from '@/components/Booking';

export const metadata: Metadata = {
  title: 'Contact and Booking',
  description:
    'Book a Japanese trial lesson in Toulouse or online. Share your level and goals to get a personalized plan and schedule.',
  alternates: {
    canonical: '/en/booking',
    languages: {
      en: '/en/booking',
      ja: '/ja/booking',
      'x-default': '/en/booking',
    },
  },
};

export default function BookingPage() {
  return <Booking lang="en" />;
}
