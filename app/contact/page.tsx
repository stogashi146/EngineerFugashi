import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <Header />

      {/* Contact Section */}
      <section className="flex flex-1 items-center justify-center bg-main pb-[50px] pt-[68px] md:pb-20 md:pt-20">
        <div className="mx-auto w-full max-w-[1440px] px-[17px] text-center md:px-[240px]">
          <h1 className="mb-[40px] font-noto text-[36px] font-bold leading-[normal] text-accent underline md:mb-[60px] md:text-[48px]">
            CONTACT
          </h1>

          <h2 className="mb-[17px] font-noto text-[22px] font-bold leading-[normal] text-accent md:mb-[25px] md:text-[24px]">
            お問い合わせはこちらから
          </h2>
          <p className="mx-auto mb-[40px] max-w-[380px] font-noto text-[16px] font-medium leading-[normal] text-black md:mb-[60px] md:max-w-none md:text-[18px]">
            お問い合わせやお仕事に関する依頼は
            <br className="md:hidden" />
            こちらからお願いします
          </p>

          <div className="mx-auto mb-[40px] h-[80px] w-[80px] md:mb-[60px] md:h-[100px] md:w-[100px]">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#80999C" />
            </svg>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-accent px-[16px] py-[12px] font-noto text-[16px] font-medium text-accent transition hover:bg-accent hover:text-white md:px-[20px] md:py-[14px] md:text-[18px]"
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

      <Footer />
    </main>
  )
}
