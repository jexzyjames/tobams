export default function Training() {
  return (
    <section
      className="relative flex min-h-[500px] items-center justify-center
             bg-hero bg-cover bg-center
             px-6 py-20 sm:px-10 lg:min-h-[600px] lg:px-16"
      aria-labelledby="training-heading"
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

    
      <div className="relative z-10 flex max-w-[1312px] flex-col gap-5 items-center text-center">
        <span className="rounded-full bg-white/10 px-8 py-3 text-base text-white sm:px-12 sm:text-lg">
          WHAT WE DO
        </span>

        <h1
          id="training-heading"
          className=" text-4xl font-light lg:font-bold text-white sm:text-5xl lg:text-[54px]"
        >
          Training and Development
        </h1>
        <p className=" font-light lg:font-bold text-white text-lg text-center ">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>
        <button className="bg-user rounded-sm cursor-pointer  px-6 py-3 text-white  ">
            Book a Consultation
        </button>
      </div>
    </section>
  );
}
