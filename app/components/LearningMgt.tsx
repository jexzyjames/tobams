import Image from "next/image";
import image from "@/public/images/Image.jpg";
import arrow from "@/public/images/arrow-up-right.svg";
export default function LearningMgt() {
  return (
    <div className="bg-learnmgt-bg relative lg:flex-row flex flex-col justify-between gap-10 items-center   px-16 py-14 max-w-7xl ">


  <p className="absolute left-11 top-4  text-2xl font-medium text-user sm:left-11 sm:text-3xl lg:hidden">
    Learning Management System
  </p>




      <div className="flex flex-wrap">
    <div className="">
 <div className="h-97.5 w-97.5 mt-4 shrink-0">
  <Image
    src={image}
    width={327}
    height={327}
    alt="An adult male and female learner smiling, dressed in corporate wear"
    className=" h-full w-full rounded-full object-cover"
  />
</div>

</div>

      </div>

      <div className="flex-col flex relative mb-10 ">
        <p className="text-user font-medium mb-5 text-3xl lg:text-4xl lg:block hidden  ">
          Learning Management System{" "}
        </p>
       
        <div className=" bg-learnmgt-bg p-6 relative rounded-lg  ">
          <p className="text-[#151515]  text-sm lg:text-lg">
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can
            enhance their skills and stay ahead in today's competitive tech
            landscape.
          </p>
          <p className="text-user font-medium mt-4  ">
            Some of our courses include:{" "}
          </p>
          <ul className="list-disc relative pl-4 mt-2 max-w-150  grid sm:grid-cols-1 lg:grid-cols-3 ">
            <li>Business Analysts</li>
            <li>Design Thinking</li>
            <li>Effective Communication</li>
            <li>Entrepreneurship</li>
            <li>Career Development</li>
            <li>Business Model</li>
          </ul>
          <button className="lg:hidden cursor-pointer bg-user rounded-sm mt-4  flex justify-center items-center gap-2 px-6 py-2.5 text-white ">
            <span>Learn More</span>
            <Image src={arrow} alt="" width={24} height={24} />
          </button>

          <button className="hidden absolute top-89 left-0 cursor-pointer  bg-user rounded-sm  lg:flex justify-center items-center gap-2 px-6 py-2.5 text-white ">
            <span>Learn More</span>
            <Image src={arrow} alt="" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
