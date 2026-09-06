import Image, { StaticImageData } from "next/image";
import aisha from "@/public/images/user-one.png";
import john from "@/public/images/user-two.jpg";
import nonso from "@/public/images/user-three.jpg";
import doe from "@/public/images/user-four.jpg";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  review: string;
  avatar: StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    review:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    avatar: aisha,
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    review:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: john,
  },
  {
    id: 3,
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    review:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: nonso,
  },
  {
    id: 4,
    name: "Jane Doe",
    role: "Lorem ipsum dolor sit amet.",
    review:
      "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
    avatar: doe,
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-(--color-gray-30) py-14 lg:py-16 bg-(--color-background)">
      <div className="flex flex-col gap-6 lg:gap-10 px-6 lg:px-16">
        <h2 className="leading-[130%] text-center text-xl md:text-[30px] lg:text-[40px] font-bold">
          Testimonials
        </h2>

        <div>
          <ul className="overflow-hidden flex gap-[23px]">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.id}
                className="w-full md:w-[322.72px] lg:w-[370px] h-[200px] lg:h-[250px] shrink-0 flex flex-col gap-4 lg:gap-6 p-5 lg:px-6 border-s-2 border-[#EF4353] rounded-lg lg:rounded-2xl bg-white"
              >
                <div className="flex items-center gap-[21px]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="object-cover rounded-full w-[44px] h-[44px]"
                  />

                  <div className="flex flex-col gap-1">
                    <p className="text-sm lg:text-base font-semibold">
                      {testimonial.name}
                    </p>

                    <p className="text-xs lg:text-sm text-(--color-text-subdued)">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm lg:text-base">{testimonial.review}</p>
              </li>
            ))}
          </ul>

          <div className="flex justify-end gap-3 mt-10">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="cursor-pointer flex justify-center items-center w-[28px] h-[28px] rounded bg-(--color-secondary-10)"
            >
              <Image 
                src="/images/arrow-prev.svg"
                alt="previous button"
                width={32}
                height={32}
              />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="cursor-pointer flex justify-center items-center w-[28px] h-[28px] rounded bg-(--color-secondary-10)"
            >
              <Image 
                src="/images/arrow-next.svg"
                alt="next button"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
