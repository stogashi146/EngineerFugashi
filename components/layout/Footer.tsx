export default function Footer() {
  return (
    <footer className="flex h-[80px] items-center justify-center bg-accent">
      <div className="mx-auto max-w-[1440px] px-[17px] text-center md:px-[120px]">
        <p className="font-noto text-[12px] font-medium leading-[normal] text-white md:text-[14px]">
          ©{new Date().getFullYear()} Engineer fugashi, All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
