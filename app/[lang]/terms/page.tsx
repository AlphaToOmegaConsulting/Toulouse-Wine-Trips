import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isSupportedLang } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isSupportedLang(lang)) return {};

  const isJa = lang === 'ja';
  const canonicalPath = isJa ? '/ja/terms' : '/en/terms';

  return {
    title: isJa ? '利用規約' : 'Terms of Service',
    description: isJa ? 'Manaka Japanese の利用規約です。' : 'Terms of service for Manaka Japanese.',
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: '/en/terms',
        ja: '/ja/terms',
        'x-default': '/en/terms',
      },
    },
    openGraph: {
      locale: isJa ? 'ja_JP' : 'en_GB',
      alternateLocale: isJa ? ['en_GB'] : ['ja_JP'],
      url: canonicalPath,
      title: isJa ? '利用規約' : 'Terms of Service',
      description: isJa ? 'Manaka Japanese の利用規約です。' : 'Terms of service for Manaka Japanese.',
    },
  };
}

function EnglishTerms() {
  return (
    <article className="site-content max-w-3xl text-left space-y-6">
      <h1 className="text-4xl font-black tracking-tight text-slate-900">Terms of Service</h1>
      <p className="text-slate-500">Last updated: February 11, 2026</p>

      <p>
        These terms govern use of the Manaka Japanese website and lesson services. By using this website or
        booking lessons, you agree to these terms.
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">1. Services</h2>
        <p>
          Manaka Japanese provides Japanese language lessons (in person in Toulouse and online), including trial
          lessons and regular sessions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">2. Booking and Communication</h2>
        <p>
          You agree to provide accurate information when submitting inquiries or booking requests. We may contact
          you by email to confirm schedule details.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">3. Payments</h2>
        <p>
          Lesson fees, payment timing, and payment method are communicated before lessons begin. No lesson is
          confirmed until both sides agree to the schedule and fees.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">4. Cancellations and Rescheduling</h2>
        <p>
          If you need to cancel or move a lesson, please notify as early as possible. Specific cancellation rules
          can be provided at booking time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">5. Intellectual Property</h2>
        <p>
          Lesson materials and website content are owned by Manaka Japanese unless stated otherwise. Reuse,
          redistribution, or commercial use requires prior written permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">6. Liability</h2>
        <p>
          We aim to provide accurate information and reliable service, but we cannot guarantee uninterrupted
          website availability. To the maximum extent permitted by law, liability is limited to direct damages.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">7. Contact</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a href="mailto:contact@manaka-japanese.fr" className="text-primary font-semibold hover:underline">
            contact@manaka-japanese.fr
          </a>
          .
        </p>
      </section>

      <p className="text-sm text-slate-500 border-t border-slate-200 pt-6">
        This text is a practical draft and not legal advice. Please ask a legal professional to review before
        final publication.
      </p>
    </article>
  );
}

function JapaneseTerms() {
  return (
    <article className="site-content max-w-3xl text-left space-y-6">
      <h1 className="text-4xl font-black tracking-tight text-slate-900">利用規約</h1>
      <p className="text-slate-500">最終更新日: 2026年2月11日</p>

      <p>
        本規約は Manaka Japanese のウェブサイトおよびレッスンサービスの利用条件を定めるものです。
        本サイトの利用またはレッスン予約により、本規約に同意したものとみなします。
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">1. サービス内容</h2>
        <p>
          Manaka Japanese は、トゥールーズ対面およびオンラインで日本語レッスン（体験・通常）を提供します。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">2. 予約と連絡</h2>
        <p>
          お問い合わせや予約時には、正確な情報をご入力ください。日程確認のため、メールでご連絡する場合があります。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">3. 料金と支払い</h2>
        <p>
          レッスン料金、支払時期、支払方法は開始前にご案内します。双方の合意が完了した時点で予約成立となります。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">4. キャンセル・日程変更</h2>
        <p>
          キャンセルや日程変更が必要な場合は、できるだけ早くご連絡ください。詳細ルールは予約時にご案内します。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">5. 知的財産権</h2>
        <p>
          レッスン教材およびサイト内コンテンツの権利は、特記がない限り Manaka Japanese に帰属します。
          無断での再配布・商用利用はできません。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">6. 免責事項</h2>
        <p>
          情報の正確性と安定運用に努めますが、サイトの常時稼働を保証するものではありません。
          法令上許される範囲で、責任は直接損害に限定されます。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">7. お問い合わせ</h2>
        <p>
          規約に関するご質問は{' '}
          <a href="mailto:contact@manaka-japanese.fr" className="text-primary font-semibold hover:underline">
            contact@manaka-japanese.fr
          </a>
          までご連絡ください。
        </p>
      </section>

      <p className="text-sm text-slate-500 border-t border-slate-200 pt-6">
        本文は実務向けの下書きであり、法的助言ではありません。最終公開前に法務確認をおすすめします。
      </p>
    </article>
  );
}

export default async function LocalizedTermsPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  return <main className="site-x section-y bg-white">{lang === 'ja' ? <JapaneseTerms /> : <EnglishTerms />}</main>;
}
