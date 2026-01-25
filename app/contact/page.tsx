import { GOOGLE_FORM_URL } from '@/data/constants'

export default function ContactPage() {
  return (
    <>
      {/* Contact Section */}
      <section className="flex flex-1 items-center justify-center bg-main pb-[50px] pt-[68px] md:pb-20 md:pt-24">
        <div className="mx-auto w-full max-w-[1440px] px-[17px] text-center md:px-[240px]">
          <h1 className="mb-[40px] font-noto text-[36px] font-bold leading-[normal] text-accent underline md:mb-[60px] md:text-[48px]">
            CONTACT
          </h1>

          <h2 className="mb-[12px] font-noto text-[16px] font-bold leading-[normal] text-accent md:text-[26px]">
            お問い合わせはこちらから
          </h2>
          <p className="mx-auto mb-[31px] max-w-[380px] font-noto text-[14px] font-medium leading-[normal] text-black md:mb-[32px] md:max-w-none md:text-[18px]">
            お問い合わせやお仕事に関する依頼は
            <br className="md:hidden" />
            こちらからお願いします
          </p>

          <div className="mx-auto mb-[32px] h-[65px] w-[65px] md:mb-[32px] md:h-[80px] md:w-[80px]">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#80999C" />
            </svg>
          </div>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            className="inline-flex h-[66px] w-[200px] transform items-center justify-center gap-1 rounded border-2 border-accent py-[10px] font-noto text-[18px] font-medium text-accent transition-all duration-300 ease-in-out hover:scale-105 hover:bg-accent hover:text-white hover:shadow-md active:scale-95"
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
    </>
  )
}
