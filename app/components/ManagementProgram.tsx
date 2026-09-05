
import Image from "next/image"
import development from '@/public/images/mgt-program.jpg'
import bolt from '@/public/images/bolt.svg'
import { title } from "process"
export default function ManagementProgram(){

    const lists = [

        {
            title:"Enhanced Leadership Skills", 
        },
        {
            title:  "Improved Employee Engagement",
        },
        {
            title: "Stronger Organisational Culture",
        },
        {
          title:"Sustainable Growth"
        }
        
      
       
        
    ]

    return(

        <section className="p-6 m-8 flex flex-col  lg:grid grid-cols-2 gap-10 bg-user rounded-[20px] w-full-">
            <span className="text-[16px] text-white   lg:hidden">Management Development Program</span>
         <article className="flex w-full h-full items-center">
            <Image 
             src={development} 
             alt="managers chatting"
             width={592}
             priority
             className="w-full h-full object-fit rounded-[8px]"
             height={639}
             />
         </article>

         <article className="text-white">
            <span className="text-[40px] hidden lg:block">Management Development Program</span>
            <p>Tobams Group offers a comprehensive Management
Development Program designed to equip corporate
organisations with the high
-performing leaders they need to
thrive.
<br /> <br />
Our program includes workshops, seminars, coaching
sessions, online courses, and experiential learning
opportunities designed to improve leadership, strategic
thinking, communication, and other essential managerial
competencies for corporate organisations.</p>

<ul className="mt-5">
    <li className="text-white flex flex-col gap-3">
   {lists.map((list)=> {
    return(
        <div className="flex leading-[10px]  items-center gap-2 bg-purple rounded-[5px] text-[14px] md:text-[18px] px-3 py-2" key={list.title}>
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

         </article>
        </section>

    )
}