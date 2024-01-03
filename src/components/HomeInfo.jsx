import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => {
   return <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
         {text}
      </p>
      <Link to={link} className="neo-brutalism-white neo-btn">
         {btnText}
         <img src={arrow} alt="arrow" />
      </Link>
   </div>
};

const renderContent = {
   1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
         Hi, I am <span className="font-semibold">Minh Quan</span>
         <br />
         A Software Engineer from Vietnam
      </h1>
   ),
   2: (
      <InfoBox
         text={'Worked with many companies and picked up many skills along the way'}
         link={'/about'}
         btnText={'Learn more'}
      />
   ),
   3: (
      <InfoBox
         text={'Led multiple projects and contributed to many open source projects'}
         link={'/projects'}
         btnText={'Visit my projects'}
      />
   ),
   4: (
      <InfoBox
         text={'Need a project done or looking for a dev?'}
         link={'/contact'}
         btnText={"Let's talk"}
      />
   )
};

const HomeInfo = ({ currentStage }) => {
   return renderContent[currentStage] || null;
}

export default HomeInfo