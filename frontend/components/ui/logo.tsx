import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link className="block flex justify-items-center items-center" href="/" aria-label="Cruip">
      <Image src={LogoImg} width={38} height={38} priority alt="Stellar" />
      <div className="mr-2" />
      <div className='text-2xl font-semibold' >SQL Go</div>
    </Link>
  )
}