import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="flex flex-col md:flex-row justify-between md:items-center gap-6 lg:gap-[10px] mt-5 md:mt-0 p-6 lg:px-16 lg:py-10 border-b-1 lg:border-b-2 border-[#C4C4C4] bg-[#1D0617]">
      <div className="flex flex-col gap-4 lg:gap-[10px] text-white">
        <p className="text-sm lg:text-lg">
          Ready to be a part of something extraordinary?
        </p>

        <h2 className="leading-[130%] text-xl lg:text-[32px] font-semibold">
          Let's work together to create a difference
        </h2>
      </div>

      <Link
        href="#"
        className="inline-flex justify-center items-center w-fit px-[22px] lg:px-6 py-[11.5px] lg:py-3 rounded-sm leading-[120%] text-sm lg:text-lg font-semibold text-white bg-user"
      >
        Get In Touch
      </Link>
    </section>
  );
}
