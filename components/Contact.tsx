import SectionTitle from './ui/SectionTitle'

export default function Contact() {
  return (
    <section id="contact" className="bg-main h-[545px] flex items-center justify-center">
      <div className="max-w-[1440px] mx-auto px-[240px] text-center w-full">
        <div className="mb-[33px]">
          <SectionTitle title="CONTACT" subtitle="お問い合わせ" />
        </div>

        <h3 className="font-noto font-bold text-[24px] text-accent mb-[25px] leading-[normal]">
          お問い合わせはこちらから
        </h3>
        <p className="font-noto font-medium text-[18px] text-black mb-[41px] leading-[normal]">
          お問い合わせやお仕事に関する依頼はこちらからお願いします
        </p>

        <div className="w-[65px] h-[65px] mx-auto mb-[82px]">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#80999C"/>
          </svg>
        </div>

        <a
          href="#"
          className="inline-flex items-center justify-center border-2 border-accent rounded px-[12px] py-[10px] gap-1 text-accent font-noto font-medium text-[18px] hover:bg-accent hover:text-white transition"
        >
          <span>Contact</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
