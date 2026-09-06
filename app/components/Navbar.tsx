import Image from "next/image";
import logo from "@/public/images/logo.svg";
import user from "@/public/images/user.svg";
import arrow_down from "@/public/images/arrow-down.svg";
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
    <header className="border-b-2 max-h-[76px] md:max-h-[104px]  border-b-user-bg px-6 py-6 sm:px-10 lg:px-16">
      <nav
        className="flex items-center justify-between"
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
      <ul className="hidden lg:flex px-16 py-6">
  <li className="flex mx-auto gap-8">
{links.map((link) => (
  <div key={link.name}>
    <p className="flex items-center gap-2">
      <span
        className={
          link.isHighlighted
            ? "border-b-2 border-[#571244]"
            : ""
        }
      >
        {link.name}
      </span>

      {link.hasDropdown && (
        <Image
          src={arrow_down}
          alt="arrow-down for links"
        />
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
