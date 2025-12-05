import SectionTitle from '../ui/SectionTitle'

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex h-[459px] items-center justify-center bg-main py-10 md:h-[545px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[17px] text-center md:px-[30px] xl:px-[140px]">
        <div className="mb-[24px] md:mb-[33px]">
          <SectionTitle title="CONTACT" subtitle="お問い合わせ" />
        </div>

        <h3 className="mb-[12px] font-noto text-[22px] font-bold leading-[normal] text-accent md:text-[26px]">
          お問い合わせはこちらから
        </h3>
        <p className="mx-auto mb-[31px] max-w-[380px] font-noto text-[16px] font-medium leading-[normal] text-black md:mb-[32px] md:max-w-none md:text-[18px]">
          お問い合わせやお仕事に関する依頼は こちらからお願いします
        </p>

        <div className="mx-auto mb-[32px] h-[65px] w-[65px] md:mb-[32px] md:h-[140px] md:w-[140px]">
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#80999C" />
          </svg>
        </div>

        <a
          href="#"
          className="inline-flex h-[66px] w-[238px] items-center justify-center gap-1 rounded border-2 border-accent py-[10px] font-noto text-[18px] font-medium text-accent transition hover:bg-accent hover:text-white"
        >
          <span>Contact</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
