

import Image from "next/image";
import Link from "next/link";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 p-6 md:px-16 md:py-8 bg-(--color-purple-100)">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 md:gap-[80px] py-5 md:pb-0 border-b md:border-0 border-(--color-white-6)">
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Image
              src="/tobams-logo.png"
              alt="Tobams Group logo"
              width={188}
              height={72.61}
            />
          </Link>

          <p className="md:tracking-[3%] text-sm md:text-base text-(--color-text-muted)">
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="inline-flex justify-center items-center p-[10px] rounded-full bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="currentColor"
                aria-hidden={true}
                focusable={false}
              >
                <path
                  d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                  fill="#151515"
                />
              </svg>
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="inline-flex justify-center items-center p-[10px] rounded-full bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden={true}
                focusable={false}
              >
                <path
                  d="M11.0286 0.0012304C11.7583 -0.00156983 12.488 0.00576429 13.2176 0.0232305L13.4116 0.0302304C13.6356 0.0382304 13.8566 0.0482304 14.1236 0.0602304C15.1876 0.11023 15.9136 0.278231 16.5506 0.525231C17.2106 0.779231 17.7666 1.12323 18.3226 1.67923C18.831 2.17884 19.2244 2.78318 19.4756 3.45023C19.7226 4.08723 19.8906 4.81423 19.9406 5.87823C19.9526 6.14423 19.9626 6.36623 19.9706 6.59023L19.9766 6.78423C19.9943 7.51342 20.002 8.24283 19.9996 8.97223L20.0006 9.71823V11.0282C20.003 11.758 19.9954 12.4877 19.9776 13.2172L19.9716 13.4112C19.9636 13.6352 19.9536 13.8562 19.9416 14.1232C19.8916 15.1872 19.7216 15.9132 19.4756 16.5502C19.2252 17.218 18.8317 17.8228 18.3226 18.3222C17.8225 18.8306 17.2179 19.224 16.5506 19.4752C15.9136 19.7222 15.1876 19.8902 14.1236 19.9402C13.8566 19.9522 13.6356 19.9622 13.4116 19.9702L13.2176 19.9762C12.4881 19.994 11.7583 20.0017 11.0286 19.9992L10.2826 20.0002H8.97358C8.24384 20.0027 7.5141 19.995 6.78458 19.9772L6.59058 19.9712C6.35319 19.9626 6.11585 19.9526 5.87858 19.9412C4.81458 19.8912 4.08858 19.7212 3.45058 19.4752C2.78326 19.2246 2.17881 18.8311 1.67958 18.3222C1.17062 17.8225 0.776801 17.2178 0.525577 16.5502C0.278577 15.9132 0.110577 15.1872 0.0605769 14.1232C0.0494399 13.8859 0.0394398 13.6486 0.030577 13.4112L0.0255771 13.2172C0.00714068 12.4877 -0.00119355 11.758 0.000577001 11.0282V8.97223C-0.00221397 8.24283 0.00512015 7.51343 0.0225771 6.78423L0.029577 6.59023C0.037577 6.36623 0.047577 6.14423 0.059577 5.87823C0.109577 4.81323 0.277577 4.08823 0.524577 3.45023C0.77595 2.78285 1.17054 2.17868 1.68058 1.68023C2.17947 1.17098 2.78354 0.776803 3.45058 0.525231C4.08858 0.278231 4.81358 0.11023 5.87858 0.0602304L6.59058 0.0302304L6.78458 0.0252306C7.51376 0.00680338 8.24316 -0.00153085 8.97258 0.000230468L11.0286 0.0012304ZM10.0006 5.00123C9.33808 4.99186 8.68033 5.11425 8.06555 5.3613C7.45077 5.60834 6.89122 5.97511 6.41942 6.44029C5.94762 6.90546 5.57298 7.45977 5.31726 8.07099C5.06155 8.68222 4.92987 9.33817 4.92987 10.0007C4.92987 10.6633 5.06155 11.3192 5.31726 11.9305C5.57298 12.5417 5.94762 13.096 6.41942 13.5612C6.89122 14.0264 7.45077 14.3931 8.06555 14.6402C8.68033 14.8872 9.33808 15.0096 10.0006 15.0002C11.3267 15.0002 12.5984 14.4734 13.5361 13.5358C14.4738 12.5981 15.0006 11.3263 15.0006 10.0002C15.0006 8.67415 14.4738 7.40238 13.5361 6.4647C12.5984 5.52701 11.3267 5.00123 10.0006 5.00123ZM10.0006 7.00123C10.3991 6.99389 10.7951 7.06603 11.1654 7.21344C11.5357 7.36085 11.8729 7.58057 12.1574 7.85978C12.4418 8.13898 12.6678 8.47206 12.822 8.83957C12.9763 9.20708 13.0558 9.60165 13.0558 10.0002C13.0559 10.3988 12.9766 10.7934 12.8224 11.1609C12.6683 11.5285 12.4424 11.8617 12.1581 12.141C11.8737 12.4203 11.5366 12.6401 11.1663 12.7876C10.796 12.9352 10.4001 13.0074 10.0016 13.0002C9.20593 13.0002 8.44287 12.6842 7.88026 12.1216C7.31765 11.5589 7.00158 10.7959 7.00158 10.0002C7.00158 9.20458 7.31765 8.44152 7.88026 7.87891C8.44287 7.3163 9.20593 7.00023 10.0016 7.00023L10.0006 7.00123ZM15.2506 3.50123C14.928 3.51414 14.6229 3.65138 14.3992 3.8842C14.1755 4.11702 14.0506 4.42736 14.0506 4.75023C14.0506 5.0731 14.1755 5.38344 14.3992 5.61626C14.6229 5.84908 14.928 5.98632 15.2506 5.99923C15.5821 5.99923 15.9 5.86753 16.1345 5.63311C16.3689 5.39869 16.5006 5.08075 16.5006 4.74923C16.5006 4.41771 16.3689 4.09977 16.1345 3.86535C15.9 3.63093 15.5821 3.49923 15.2506 3.49923V3.50123Z"
                  fill="#151515"
                />
              </svg>
            </Link>

            <Link
              href="#"
              aria-label="X"
              className="inline-flex justify-center items-center p-[10px] rounded-full bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden={true}
                focusable={false}
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <nav aria-labelledby="what-we-do" className="flex flex-col gap-4">
            <h5
              id="what-we-do"
              className="leading-[150%] lg:leading-[100%] text-lg md:text-xl font-bold text-white"
            >
              What We Do
            </h5>

            <ul className="flex flex-col gap-3">
              {whatWeDo.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="leading-[150%] lg:tracking-[3%] text-sm lg:text-base text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="company" className="flex flex-col gap-4">
            <h5
              id="company"
              className="leading-[150%] lg:leading-[100%] text-lg md:text-xl font-bold text-white"
            >
              Company
            </h5>

            <ul className="flex flex-col gap-3">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="leading-[150%] lg:tracking-[3%] text-sm lg:text-base text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="solution" className="flex flex-col gap-4">
            <h5
              id="solution"
              className="leading-[150%] lg:leading-[100%] text-lg md:text-xl font-bold text-white"
            >
              Solution
            </h5>

            <ul className="flex flex-col gap-3">
              {solution.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="leading-[150%] lg:tracking-[3%] text-sm lg:text-base text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:mt-8 p-4 lg:p-6 rounded-lg bg-(--color-white-6)">
        <div className="flex flex-col gap-[10px] order-2 lg:order-1 w-full w-[70%]">
          <h5 className="leading-[150%] lg:leading-[100%] text-lg lg:text-xl font-bold text-white">
            Registered Offices
          </h5>

          <div className="flex flex-col lg:flex-row gap-4">
            <div>
              <p className="text-sm lg:text-base font-semibold text-secondary">
                United Kingdom
              </p>

              <p className="text-base text-white">
                07451196 (Registered by Company House) Vine Cottages, 215 North
                Street, Romford, Essex, United Kingdom, RM1 4QA
              </p>
            </div>

            <div className="lg:px-6 lg:border-s border-(--color-white-6)">
              <p className="text-sm lg:text-base font-semibold text-secondary">
                Nigeria
              </p>

              <p className="text-sm lg:text-base text-white">
                RC 1048722 (Registered by the Corporate Affairs Commission) 4,
                Muaz Close, Angwari-Rimi
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 order-1 lg:order-2 w-full lg:w-[30%] px-0 lg:px-6 lg:border-s border-(--color-white-6)">
          <h5 className="leading-[150%] lg:leading-[100%] text-lg md:text-xl font-bold text-white">
            Contact Information
          </h5>

          <div className="flex flex-col gap-[10px] lg:gap-3">
            <span className="flex flex-shrink-0 gap-4 leading-[150%] tracking-[3%] text-sm lg:text-base text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                aria-hidden={true}
                focusable={false}
              >
                <path
                  d="M4 20.5273C3.45 20.5273 2.979 20.3313 2.587 19.9393C2.195 19.5473 1.99934 19.0767 2 18.5273V6.52735C2 5.97735 2.196 5.50635 2.588 5.11435C2.98 4.72235 3.45067 4.52668 4 4.52735H20C20.55 4.52735 21.021 4.72335 21.413 5.11535C21.805 5.50735 22.0007 5.97801 22 6.52735V18.5273C22 19.0773 21.804 19.5483 21.412 19.9403C21.02 20.3323 20.5493 20.528 20 20.5273H4ZM12 13.5273L20 8.52735V6.52735L12 11.5273L4 6.52735V8.52735L12 13.5273Z"
                  fill="#EF4353"
                ></path>
              </svg>
              theteam@tobamsgroup.com
            </span>

            <span className="flex flex-shrink-0 gap-4 leading-[150%] tracking-[3%] text-sm lg:text-base text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                aria-hidden={true}
                focusable={false}
              >
                <path
                  d="M19.2291 15.7891L16.6891 15.4991C16.3904 15.464 16.0877 15.4971 15.8036 15.5958C15.5196 15.6945 15.2616 15.8563 15.0491 16.0691L13.2091 17.9091C10.3703 16.4653 8.06284 14.1579 6.61906 11.3191L8.46906 9.46906C8.89906 9.03906 9.10906 8.43906 9.03906 7.82906L8.74906 5.30906C8.69237 4.82124 8.45826 4.3713 8.0913 4.04491C7.72434 3.71852 7.25017 3.53848 6.75906 3.53906H5.02906C3.89906 3.53906 2.95906 4.47906 3.02906 5.60906C3.55906 14.1491 10.3891 20.9691 18.9191 21.4991C20.0491 21.5691 20.9891 20.6291 20.9891 19.4991V17.7691C20.9991 16.7591 20.2391 15.9091 19.2291 15.7891Z"
                  fill="#EF4353"
                ></path>
              </svg>
              +447886600748
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-6 md:pt-8 border-t border-(--color-white-6)">
        <p className="order-2 lg:order-1 leading-[24px] tracking-wide text-sm lg:text-base text-center lg:text-start font-light text-white">
          Copyright ⓒ Tobams Group, 2024. All rights reserved.
        </p>

        <nav
          aria-label="Legal links"
          className="order-1 lg:order-2 flex flex-col md:flex-row items-center gap-2 lg:gap-10"
        >
          <Link
            href="#"
            className="order-2 lg:order-1 text-nowrap text-center underline font-light leading-[36px] text-sm lg:text-base text-white"
          >
            Terms and Conditions
          </Link>

          <div className="flex gap-4 lg:gap-8 order-1 lg:order-2">
            <Link
              href="#"
              className="basis-2/4 text-nowrap underline font-light text-sm lg:text-base text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="basis-2/4 text-nowrap underline font-light text-sm lg:text-base text-white"
            >
              Cookies Policy
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
