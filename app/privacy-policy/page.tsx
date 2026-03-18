import SectionTitle from '@/components/ui/SectionTitle'
import Contact from '@/components/layout/Contact'

const SECTIONS = [
  {
    title: '第1条（取得する情報）',
    paragraphs: ['当社は、本サービスにおいて、以下の情報を取得する場合があります。'],
    items: [
      'デバイス情報（端末識別子、OS、言語設定等）',
      '広告識別子（IDFA、Advertising ID 等）',
      'アプリの利用状況に関する情報（アクセスログ、操作履歴等）',
      'IPアドレス、Cookie等の識別情報',
    ],
  },
  {
    title: '第2条（利用目的）',
    paragraphs: ['当社は、取得した情報を以下の目的で利用します。'],
    items: [
      '本サービスの提供・運営のため',
      'ユーザー認証および本人確認のため',
      '不正利用の防止およびセキュリティ向上のため',
      'お問い合わせ対応のため',
      'サービスの改善および新機能の開発のため',
      '利用状況の分析のため',
      '広告の配信および広告効果の測定のため',
    ],
  },
  {
    title: '第3条（第三者提供）',
    paragraphs: [
      '当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。',
    ],
    items: [
      'ユーザーの同意がある場合',
      '法令に基づく場合',
      '人の生命、身体または財産の保護に必要な場合',
    ],
  },
  {
    title: '第4条（外部サービスの利用）',
    paragraphs: ['当社は、本サービスの提供にあたり、以下の外部サービスを利用する場合があります。'],
    items: ['Google Firebase（認証、分析等）', 'Google AdMob（広告配信）'],
    afterItems: [
      'これらのサービス提供者は、ユーザーの情報を取得し、利用する場合があります。',
      '詳細については、各サービス提供者のプライバシーポリシーをご確認ください。',
    ],
  },
  {
    title: '第5条（広告について）',
    paragraphs: [
      '本サービスでは、第三者配信の広告サービスを利用する場合があります。',
      '広告配信事業者は、ユーザーの興味・関心に応じた広告を表示するため、広告識別子等の情報を利用することがあります。',
    ],
  },
  {
    title: '第6条（情報の管理）',
    paragraphs: [
      '当社は、ユーザーの情報について、不正アクセス、漏洩、改ざん、滅失等を防止するため、適切な安全管理措置を講じます。',
    ],
  },
  {
    title: '第7条（ユーザーの権利）',
    paragraphs: [
      'ユーザーは、当社に対し、自己の個人情報の開示、訂正、削除等を求めることができます。',
      'これらの請求を希望される場合は、下記お問い合わせ先までご連絡ください。',
    ],
  },
  {
    title: '第8条（未成年の利用）',
    paragraphs: [
      '未成年のユーザーが本サービスを利用する場合は、保護者の同意を得た上でご利用ください。',
    ],
  },
  {
    title: '第9条（プライバシーポリシーの変更）',
    paragraphs: [
      '当社は、必要に応じて本ポリシーを変更することがあります。',
      '変更後の内容は、本サービスまたは当社ウェブサイト上に掲載した時点で効力を生じるものとします。',
    ],
  },
  {
    title: '第10条（お問い合わせ）',
    paragraphs: ['本ポリシーに関するお問い合わせは、以下までお願いいたします。'],
    contactUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfgcl3wonvS83rzQPhaTigotOusqyJRHwbXWSPnQEAxLXKPtg/viewform',
  },
] as const

interface Section {
  title: string
  paragraphs: readonly string[]
  items?: readonly string[]
  afterItems?: readonly string[]
  contactUrl?: string
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SectionTitle sectionType="h1" title="PRIVACY POLICY" />
      <div className="bg-white pb-[60px] pt-[32px] md:pb-[80px] md:pt-[48px]">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[240px]">
          <p className="font-noto-jp text-[14px] leading-[1.8] text-text md:text-[16px]">
            本プライバシーポリシー（以下、「本ポリシー」といいます。）は、当社が提供するアプリケーションおよび関連サービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて定めるものです。
          </p>

          {SECTIONS.map((section: Section) => (
            <div key={section.title} className="mt-[32px] border-t border-gray-200 pt-[32px]">
              <h3 className="font-noto-jp text-[18px] font-bold leading-[1.8] text-text md:text-[20px]">
                {section.title}
              </h3>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-[12px] font-noto-jp text-[14px] leading-[1.8] text-text md:text-[16px]"
                >
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="mt-[12px] list-disc pl-[24px]">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="font-noto-jp text-[14px] leading-[1.8] text-text md:text-[16px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.afterItems &&
                section.afterItems.map((text) => (
                  <p
                    key={text}
                    className="mt-[12px] font-noto-jp text-[14px] leading-[1.8] text-text md:text-[16px]"
                  >
                    {text}
                  </p>
                ))}
              {section.contactUrl && (
                <a
                  href={section.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-[12px] inline-block font-noto-jp text-[14px] leading-[1.8] text-accent underline md:text-[16px]"
                >
                  お問い合わせフォーム
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </>
  )
}
