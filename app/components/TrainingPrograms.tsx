import Image, { StaticImageData } from "next/image";
import corporate from '@/public/images/corporate.jpg'
import individual from '@/public/images/individual.jpg'
import capacity from '@/public/images/capacity.jpg'
import bolt from '@/public/images/star.svg'
type TrainingProgram = {
  id: number;
  heading: string;
  paragraph: string;
  listItems: string[];
  image: StaticImageData;
  imageAlt: string;
  imageFirst: boolean;
};

const programs: TrainingProgram[] = [
  {
    id: 1,
    heading: "Corporate Trainings ",
    paragraph:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    listItems: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    image: corporate,
    imageAlt: "Corporate training session",
    imageFirst: false,
  },
  {
    id: 2,
    heading: "Personalised Individual Training",
    paragraph:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    listItems: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    image: individual,
    imageAlt: "Individual training session",
    imageFirst: true,
  },
  {
    id: 3,
    heading: "Capacity Development",
    paragraph:
      "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    listItems: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    image: capacity,
    imageAlt: "Capacity development session",
    imageFirst: false,
  },
];

export default function TrainingPrograms() {
  return (
    <section className="flex flex-col gap-6 p-6 md:gap-15 lg:gap-30 mb-5 md:mb-12 lg:mb-16 pb-12 bg-white">
      {programs.map((program) => (
        <div
          key={program.id}
          className="flex md:flex-row flex-col justify-between md:items-center md:gap-[81px] w-full px-6 lg:px-16 md:pt-16"
        >
          <h2 className="md:hidden mb-4 md:mb-2 text-[20px] font-medium">
            {program.heading}
          </h2>

          <Image
            src={program.image}
            alt={program.imageAlt}
            width={556}
            height={400}
            className={`${
              program.imageFirst ? "lg:order-first" : "lg:order-last"
            } object-cover md:w-[40%] h-[229px] md:h-[346px] rounded-[8px] rounded-tl-[33px]`}
          />

          <div
            className={`md:w-[55%] mt-4 md:mt-0 ${
              program.imageFirst ? "lg:order-last" : "lg:order-first"
            }`}
          >
            <h2 className="hidden md:block leading-[150%] tracking-[3%] md:text-2xl lg:text-[40px] font-semibold">
              {program.heading}
            </h2>

            <p className="mt-4 md:mt-0 text-sm md:text-base lg:text-lg text-(--color-text-subdued)">
              {program.paragraph}
            </p>

            <ul className="flex flex-col gap-[10px] mt-4 md:mt-2  md:ms-[30px] text-(--color-text-subdued)">
              {program.listItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-[14px] leading-[150%] text-sm md:text-base lg:text-lg"
                >
                 
                  <Image
                  src={bolt}
                  alt="bolt-icon"
                   />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}