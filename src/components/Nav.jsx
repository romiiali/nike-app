import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'


const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <a href='/'>
            <img src={headerLogo} alt='logo' width={130} height={29}>
            </img>
          </a>
          <ul className='flex flex-1 justify-center items-center gap-16 max-xl:hidden text-2xl'>
            {navLinks.map((item) =>(
                <li key={item.label}>
                    <a href={item.href} className='fonts-montserrat leading-normal text-2xl text-slate-gray'>
                        {item.label}
                    </a>
                </li>
            ))}
          </ul>
          <a  href='/' className='text-2xl font-semibold max-xl:hidden'>SignUp/Explore Now</a>
          <div className='hidden max-xl:block'>
            <img src={hamburger} alt='menu' width={25} height={25} />
          </div>
        </nav>
    </header>
  )
}

export default Nav
