import Image from "next/image";
import logo from "@/public/images/logo.svg";
import user from "@/public/images/user.svg";
import arrow_down from "@/public/images/arrow-down-light.svg";
import menu from "@/public/images/hamburger-menu.svg";
import Link from "next/link";
function Navbar() {
  const links = [
  {
    name: "About",
    hasDropdown: true,
    isHighlighted: true,
  },
  {
    name: "What We Do",
    hasDropdown: true,
    isHighlighted: false,
  },
  {
    name: "Jobs",
    hasDropdown: true,
    isHighlighted: false,
  },
  {
    name: "Projects",
    hasDropdown: false,
    isHighlighted: false,
  },
  {
    name: "TG ACADEMY",
    hasDropdown: false,
    isHighlighted: false,
  },
  {
    name: "Strategic Partnership",
    hasDropdown: false,
    isHighlighted: false,
  },
  {
    name: "Pricing",
    hasDropdown: false,
    isHighlighted: false,
  },
  {
    name: "Book a Consultation",
    hasDropdown: false,
    isHighlighted: false,
  },
];

  return (
    <header className=" max-h-[76px] md:max-h-[174px]  bg px-6 py-6 sm:px-10 lg:px-16">
      <nav
        className="flex items-center mb-4 justify-between"
        aria-label="Main navigation"
      >
        <Link href="/">
          <Image className='hidden lg:block' src={logo} alt="Tobams" width={165} height={64} />
          <Image className='lg:hidden' src={logo} alt="Tobams" width={123.85} height={42} />
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
          <Image src={menu} alt="" width={32} height={32} />
        </button>  
      </nav>
   
      <div className="hidden lg:block absolute left-0 right-0 h-[2px] bg-[#571244] opacity-25" />


      
      <ul className="hidden lg:inline-flex px-[64px] py-[20px] ">
  <li className="flex mx-auto gap-8">
{links.map((link) => (
  <div key={link.name}>
    <p className="relative flex items-center gap-2">
      <span className="flex items-center gap-2">
        {link.name}

        {link.hasDropdown && (
          <Image
            src={arrow_down}
            alt="arrow-down for links"
          />
        )}
      </span>

      {link.isHighlighted && (
        <span className="absolute -bottom-2 left-0 hidden h-[2px] w-full bg-[#571244] lg:block" />
      )}
    </p>
  </div>
))}

  </li>
  </ul>
    </header>
  );
}

export default Navbar;
