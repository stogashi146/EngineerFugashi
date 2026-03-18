import Link from 'next/link'
import { PRIVACY_POLICY_PAGE } from '@/data/constants'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-accent py-[20px]">
      <div className="mx-auto max-w-[1440px] px-[17px] text-center md:px-[120px]">
        <Link
          href={PRIVACY_POLICY_PAGE}
          className="font-noto text-[12px] font-medium leading-[normal] text-white underline md:text-[14px]"
        >
          プライバシーポリシー
        </Link>
        <p className="mt-[8px] font-noto text-[12px] font-medium leading-[normal] text-white md:text-[14px]">
          ©{new Date().getFullYear()} Engineer fugashi, All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
