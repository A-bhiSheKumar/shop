import {headerLogo} from "../assets/images";
//Now,this is the three line icon for mobile use
import {hamburger} from "../assets/icons"
import {navLinks} from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img 
                    src={headerLogo}
                    alt="LOGO"
                    width={130}
                    height={29}
                />
            </a>
            {/* Creating a links like home and other stuffs */}
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item)=>{
                    return(
                        <li key={item.label}>
                            <a
                            href={item.href}
                            className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                            >
                             {item.label}
                            </a>
                             {/* add later signup and explore */}
                        </li>
                    )
                })}
            </ul>
            {/* Well this div class */} 
            <div className="hidden max-lg:block">  
                <img 
                    src={hamburger}
                    alt="humburger"
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav