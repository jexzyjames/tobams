export default function Training() {
  return (
    <section
      className="relative flex min-h-[400px] items-center justify-center
             bg-hero bg-cover bg-center
             px-6  sm:px-10 lg:min-h-[500px] lg:px-16"
      aria-labelledby="training-heading"
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

    
      <div className="relative z-10 flex max-w-[1312px] flex-col gap-3 items-center text-center">
        <span className="rounded-full bg-white/10 px-8 py-3 text-base text-white sm:px-12 sm:text-lg">
          WHAT WE DO
        </span>

        <h1
          id="training-heading"
          className="lg:block hidden font-bold text-white text-[56px]"
        >
          Training and Development
        </h1>
         <h1
          id="training-heading"
          className="lg:hidden text-2xl  font-medium text-white "
        >
          Learning and Development
        </h1>
        <p className=" md:max-w-[327px] w-full  md:max-w-[1100px] lg:font-semibold text-white text-[14px] md:text-lg text-center ">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>
        <button className="bg-user mt-[15px] rounded-sm cursor-pointer  px-6 py-3 text-white  ">
            Book a Consultation
        </button>
      </div>
    </section>
  );
}
