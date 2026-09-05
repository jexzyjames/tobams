import Image from "next/image";
import logo from "@/public/images/logo.svg";
import user from "@/public/images/user.svg";
import arrow_down from "@/public/images/arrow-down.svg";
import menu from "@/public/images/hamburger-menu.svg";
import Link from "next/link";
function Navbar() {
     const links =[
    {
      name:'About',
      hasDropdown:true
  },
    {
      name:'What We Do',
      hasDropdown:true,

  },
    {
      name:'Jobs',
      hasDropdown:true,

  },
    {
      name:'Projects',
      hasDropdown:false
    

  },
    {
      name:'TG ACADEMY',
      hasDropdown:false
      

  },
    {
      name:'Strategic Partnership',
      hasDropdown:false
      

  },
    {
      name:'Pricing',
      hasDropdown:false

  },
    {
      name:'Book a Consultation',
      hasDropdown:false
      

  },
]
  return (
    <header className="border-b-2 max-h-[76px] md:max-h-[104px]  border-b-user-bg px-6 py-6 sm:px-10 lg:px-16">
      <nav
        className="flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/">
          <Image src={logo} alt="Your Company Name" width={165} height={64} />
        </Link>

        <div className="hidden items-center justify-center gap-4 lg:flex">
          <button
            type="button"
            className="flex items-center gap-2 cursor-pointer justify-center rounded-sm bg-user px-4 py-2 text-lg text-white"
          >
            <Image src={user} alt="" width={20} height={20} />

            <span>Account</span>

            <Image src={arrow_down} alt="" width={20} height={20} />
          </button>

          <button
            type="button"
            className="bg-assessment px-5 py-2.5 text-white"
          >
            Take Assessment
          </button>
        </div>

        
        <button
          type="button"
          className="rounded-sm cursor-pointer lg:hidden"
          aria-label="Open navigation menu"
        >
          <Image src={menu} alt="" width={24} height={24} />
        </button>
      </nav>
      <ul className="hidden lg:flex px-16 py-6">
  <li className="flex mx-auto gap-8">
    {links.map((link)=> {
      return(
        <div className=""  key={link.name}>
         <p className="flex item-center">{link.name}{
          link.hasDropdown && (
            <Image 
            src={arrow_down}
            alt="arrow-down for links"
            />
          )}</p> 
        </div>
      )
    })}
  </li>
  </ul>
    </header>
  );
}

export default Navbar;
