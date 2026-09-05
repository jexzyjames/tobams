
import Image from "next/image"
import bolt from "@/public/images/bolt-light.svg"
import image from "@/public/images/learn-ceo.jpg"
import arrow from "@/public/images/arrow-up-right.svg"
export default function LearningWithCeo(){
     const lists = [

        {
            title:"Strategic Career Guidance", 
        },
        {
            title:  "Leadership Development",
        },
        {
            title: "CV Development",
        },
        {
          title:"Sustainability Leadership"
        },
        {
          title:"Communication Skills"
        },
        {
          title:"Business Model"
        },
        
        
      
       
        
    ]
    return (
        <section className="  p-10 mt-8 bg-ceo ">
            <span className="font-medium text-blue text-[14px] md:text-[20px] mb-2">Learning With Our CEO:</span>
            <span className="text-user text-[20px] md:text-[32px] block font-medium italic">Transformation Hub With Jite Newton</span>
            <p className="text-[14px] md:text-[18px]  text-[#151515] mt-2">Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.</p>
       
       <section className="mt-5 flex flex-col lg:flex-row gap-10 ">
        
        <article className="flex w-full h-full items-center">
            <Image 
             src={image} 
             alt="managers chatting"
             width={560}
             priority
             className="w-full  object-fit rounded-[8px]"
             height={340}
             />
         </article>

         <article className="flex flex-col bg-bg p-5 w-full rounded-[8px] ">
            <ul className="w-full h-full">
                <li className="text-white mt-6 w-full flex flex-col lg:grid grid-cols-2 gap-5">
   {lists.map((list)=> {
    return(
        <div className="flex leading-[20px] gap-2 bg-white text-[#151515] items-center rounded-[12px] text-[14px] md:text-[17px] p-3 md:p-5" key={list.title}>
         <Image 
        src={bolt}
        alt="bolt-icon"
        width={19}
        height={24}
        />
        {list.title}
        
        </div>
    )
   })}
    </li>
            </ul>

           <button className=" block max-w-[173px] cursor-pointer bg-user rounded-sm mt-4  flex justify-center items-center gap-2 px-6 py-2.5 text-white ">
            <span>Learn More</span>
            <Image src={arrow} alt="" width={24} height={24} />
          </button>
         </article>
       </section>
        </section>
    )
}
