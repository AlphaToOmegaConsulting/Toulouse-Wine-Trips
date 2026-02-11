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
  const canonicalPath = isJa ? '/ja/privacy' : '/en/privacy';

  return {
    title: isJa ? 'プライバシーポリシー' : 'Privacy Policy',
    description: isJa
      ? 'Manaka Japanese のプライバシーポリシーです。'
      : 'Privacy policy for Manaka Japanese.',
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: '/en/privacy',
        ja: '/ja/privacy',
        'x-default': '/en/privacy',
      },
    },
    openGraph: {
      locale: isJa ? 'ja_JP' : 'en_GB',
      alternateLocale: isJa ? ['en_GB'] : ['ja_JP'],
      url: canonicalPath,
      title: isJa ? 'プライバシーポリシー' : 'Privacy Policy',
      description: isJa
        ? 'Manaka Japanese のプライバシーポリシーです。'
        : 'Privacy policy for Manaka Japanese.',
    },
  };
}

function EnglishPrivacy() {
  return (
    <article className="site-content max-w-3xl text-left space-y-6">
      <h1 className="text-4xl font-black tracking-tight text-slate-900">Privacy Policy</h1>
      <p className="text-slate-500">Last updated: February 11, 2026</p>

      <p>
        This website is operated by Manaka Japanese. This page explains what personal information may be
        collected when you contact us or submit the booking form, how that information is used, and your
        rights.
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">1. Information Collected</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Contact information you provide (name, email, phone if provided).</li>
          <li>Lesson details (level, goals, preferred schedule and lesson format).</li>
          <li>Basic technical details sent by your browser (IP address, browser type, access time).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">2. Purpose of Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To reply to inquiries and organize trial lessons.</li>
          <li>To provide and improve lessons.</li>
          <li>To keep required records for legal or accounting purposes.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">3. Third-Party Services</h2>
        <p>
          This site uses third-party tools such as Tally (booking form) and Google Maps embed. These services
          may process your data under their own privacy policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">4. Retention</h2>
        <p>
          Personal information is kept only as long as needed for lesson operations and legal obligations, then
          deleted or anonymized where possible.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">5. Your Rights</h2>
        <p>
          You may request access, correction, deletion, or restriction of your personal information, subject to
          legal requirements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">6. Contact</h2>
        <p>
          Privacy requests can be sent to{' '}
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

function JapanesePrivacy() {
  return (
    <article className="site-content max-w-3xl text-left space-y-6">
      <h1 className="text-4xl font-black tracking-tight text-slate-900">プライバシーポリシー</h1>
      <p className="text-slate-500">最終更新日: 2026年2月11日</p>

      <p>
        本サイト（Manaka Japanese）では、お問い合わせや体験レッスン予約時に取得する個人情報について、
        利用目的とお客様の権利を以下のとおり定めます。
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">1. 取得する情報</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>お名前、メールアドレス、電話番号（ご入力がある場合）。</li>
          <li>レベル、目標、希望日時、希望レッスン形式などの学習情報。</li>
          <li>IPアドレス、ブラウザ種別、アクセス時刻などの技術情報。</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">2. 利用目的</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>お問い合わせへの返信、体験レッスンの調整。</li>
          <li>レッスンサービスの提供と改善。</li>
          <li>法令・会計上必要な記録の管理。</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">3. 外部サービス</h2>
        <p>
          本サイトは Tally（予約フォーム）や Google Maps 埋め込み等の外部サービスを利用しています。
          これらのサービスでは、各提供元のポリシーに基づき情報が処理される場合があります。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">4. 保存期間</h2>
        <p>
          個人情報は、レッスン運営および法的義務に必要な期間のみ保持し、その後は削除または匿名化します。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">5. お客様の権利</h2>
        <p>
          お客様は、法令の範囲内で、ご自身の個人情報について開示・訂正・削除・利用制限を請求できます。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">6. お問い合わせ先</h2>
        <p>
          プライバシーに関するお問い合わせは{' '}
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

export default async function LocalizedPrivacyPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  return <main className="site-x section-y bg-white">{lang === 'ja' ? <JapanesePrivacy /> : <EnglishPrivacy />}</main>;
}
