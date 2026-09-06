
import Image from 'next/image'
import arrow from "@/public/images/arrow-up-right.svg"
export default function ConsultantsTraining() {

    const texts = [
        {
            label: 'Expert-Led learning',
            paragraph: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
        },
        {
            label: 'Comprehensive Curriculum',
            paragraph: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
        },
        {
            label: 'Interactive Workshops',
            paragraph: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
        },
        {
            label: 'Global Recognition',
            paragraph: 'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.'
        }
    ]
    return (
        <section className="bg-consultants py-12 px-6 lg:px-16 mt-8">
            <span className="md:text-[40px] text-user font-semibold text-[24px]">Training the Consultant</span>
            <p className="md:text-[18px] text-user font-semibold text-[16px] mt-2">Maximise Your Potential as a Certified Trainer:</p>

            <p className="md:text-[18px] text-[#151515] font-semibold text-[14px] mt-3">
                With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
            </p>

            <article className="bg-user rounded-[8px] p-6 mt-4 text-white">
                <div className="flex flex-col lg:grid grid-cols-2 grid-row-reverse gap-4 ">
                    {texts.map((text) => {
                        return (
                            <div key={text.label} className="mb-3">
                                <span className="font-medium md:text-[18px] text-[14px]">{text.label}</span>
                                <p className="md:text-[18px] mt-3  text-[14px]">{text.paragraph}</p>

                            </div>
                        )
                    })}
                </div>
            </article>

               <button className="cursor-pointer bg-user rounded-sm mt-4  flex justify-center items-center gap-2 px-6 py-2.5 text-white ">
                    <span>Learn More</span>
                    <Image src={arrow} alt="" width={24} height={24} />
                </button>
        </section>
    )
}
