import type { Metadata } from 'next';
import Lessons from '@/components/Lessons';

export const metadata: Metadata = {
  title: 'Lessons and Fees',
  description:
    'Japanese lessons in Toulouse and online: beginner to advanced, JLPT N5-N3 prep, and engaging classes for kids and teens taught in English.',
  alternates: {
    canonical: '/en/lessons',
    languages: {
      en: '/en/lessons',
      ja: '/ja/lessons',
      'x-default': '/en/lessons',
    },
  },
};

export default function LessonsPage() {
  return <Lessons lang="en" />;
}
