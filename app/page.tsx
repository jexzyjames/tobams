import LearningMgt from "./components/LearningMgt";
import Hero from "./components/Hero";
import CorporateTraining from "./components/TrainingPrograms";
import ManagementProgram from "./components/ManagementProgram";
import CallCTA from "./components/CallCTA";
import LearningWithCeo from "./components/LearningWIthCeo";
import ConsultantsTtraining from "./components/ConsultantsTraining";
import CallToConsult from "./components/CallToConsult";
import Testimonials from "./components/Testimonials";


export default function Home() {

  return (

<>
    <Hero />
    <LearningMgt/>
    <CorporateTraining/>
    <ManagementProgram/>
     <LearningWithCeo/>
    <ConsultantsTtraining/>
    <CallToConsult />
    <Testimonials />
    <CallCTA/>
</>
  );
}
