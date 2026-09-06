import Image, { StaticImageData } from "next/image";
import aisha from '@/public/images/user-one.png'
import john from '@/public/images/user-two.jpg'
import nonso from '@/public/images/user-three.jpg'
import doe from '@/public/images/user-four.jpg'
import next from '@/public/images/arrow-next.svg'
import prev from '@/public/images/arrow-prev.svg'
 
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
    avatar:doe,
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
                className="w-full md:w-[322.72] lg:w-[370] h-[200px] lg:h-[250px] shrink-0 flex flex-col gap-4 lg:gap-6 p-5 lg:px-6 border-s-2 border-[#EF4353] rounded-lg lg:rounded-2xl bg-white"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="17"
                viewBox="0 0 11 17"
                fill="none"
                aria-hidden={true}
                focusable={false}
              >
                <path
                  d="M3.77067 8.48533L10.3707 15.0853L8.48533 16.972L0 8.48533L8.48533 0L10.3707 1.88533L3.77067 8.48533Z"
                  fill="#EF4353"
                />
              </svg>
              <Image 
              src={prev}
              alt="previous-button to change focused image"
              width={32}
              height={32}
              className=""
              />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="cursor-pointer flex justify-center items-center w-[28px] h-[28px] rounded bg-(--color-secondary-10)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="17"
                viewBox="0 0 11 17"
                fill="none"
                aria-hidden={true}
                focusable={false}
              >
                <path
                  d="M6.60006 8.48533L6.10352e-05 15.0853L1.88539 16.972L10.3707 8.48533L1.88539 0L6.10352e-05 1.88533L6.60006 8.48533Z"
                  fill="#EF4353"
                />
              </svg>
               <Image 
              src={next}
              alt="previous-button to change focused image"
              width={32}
              height={32}
              className=""
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
