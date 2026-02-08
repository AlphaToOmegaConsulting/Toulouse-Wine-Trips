import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Japanese Lessons in Toulouse',
  description:
    'Personalized Japanese lessons in Toulouse with a native teacher. Private, group, and online formats for all levels.',
  alternates: { canonical: '/en' },
};

export default function HomePage() {
  return <Hero lang="en" />;
}
