import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'


const HamburgerMenu = () => (<div className='relative p-2'>
    <Menu customBurgerIcon={<HamburgerIcon />} width={'auto'} className='left-0 top-12' >
        <Links />
    </Menu>
</div>)

const HamburgerIcon = () => (<div className='p-1/2'><svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div>)

export const Links = () => (<>
    <Link href="/"><a className='font-bold p-4'>Početna</a></Link>
    <Link href="/usluge/laserska-epilacija"><a className='font-bold p-4'>Usluge</a></Link>
    <Link href="/centri"><a className='font-bold p-4'>Centri</a></Link>
    <Link href="/tehnologije"><a className='font-bold p-4'>Tehnologije</a></Link>
    <Link href="/kozmeticki-proizvodi"><a className='font-bold p-4'>Kozmetički proizvodi</a></Link>
    <Link href="/blog"><a className='font-bold p-4'>Blog</a></Link>
    <Link href="/faq/laserska-epilacija-fotoepilacija-ipl-shr"><a className='font-bold p-4'>FAQ</a></Link>
    <Link href="/otkrijte-nase-ponude-i-promocije"><a className='font-bold p-4'>Promocije</a></Link>
   
</>)

export default HamburgerMenu