import { COLORS } from "../constants/colors";
import { Chrono } from "react-chrono";
import './chrono-overrides.css';
import { useState, useRef } from "react";

const About = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const scrollRef = useRef(null);

  // Drag-to-scroll logic
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
    scrollRef.current.classList.add('dragging');
  };
  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove('dragging');
  };
  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove('dragging');
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const items = [
    {
      title: 'Jan 7, 2012',
      cardTitle: 'Flag + Logo of DOW ',
      cardDetailedText: `
        Logo of the Association: The logo shall contain a combination of eagle wings laterally, a wheel in the center and the snake shaft below and behind the wheel. The color shall be Red symbolizing blood and thus life.

        Eagle:
        Eagle wings symbolizes eagle spirit i.e. Confidence, Fearlessness and Sovereign
        Solidarity: Like an Eagle that doesn’t depend on external source to fly high in the sky, we depend on our own genuine ideas, creativity and solidarity to produce the power for our wheels helping us to be on the move with an Eagle spirit.
        Non alignment: Like an eagle that moves ahead beyond boundaries with full confidence without submitting to any kind of pressure, sovereign and fearless, we are always on the move without being influenced by any party politics and government. 

        Wheel:
        Wheel symbolizes the basic belief of the association which is: DOW is not only an association of medical persons as a mobile health unit but also an association of people moving ahead with new ideas, ingenuity, creativity and solidarity.

        Snake shaft:
        It denotes the medical Profession.
        Snake sheds its old skin and renews it with the new one so it symbolizes the dual nature of medical person which has to deal with life and death. The venom of the snake symbolizes the nature of the drugs which can be harmful but also useful.
        Shaft symbolizes the support a medical person gives to the needy ones.
      `,
    },
    {
      title: 'Jan 7, 2012',
      cardTitle: 'Declaring Directors',
      cardDetailedText: `
        1. Dinesh Duwal 2. Rohini Nepal 3. Shirish K.C. 4. Vikram Tiwari`,
    },
    {
      title: 'Jan 7, 2012',
      cardTitle: 'Core Executive Board of Directors (CEBOD)',
      cardDetailedText: `
        Shirish K.C. - Director General
        Vikram Tiwari - Director
        Dinesh Duwal - Director
        Rohini Nepal - Director
      `,
    },
    {
      title: 'Feb 14, 2024',
      cardTitle: 'Docs to Doctors: The Reorganization - 14 FEB 2024 Nepal Registration as a Non-Profit Company',
      media: {
        type: "IMAGE",
        name: "Docs to Doctors: The Reorganization - 14 FEB 2024", 
        source: {
          url: "/images/nepal_registration.png", 
        },
      },
    },
    {
      title: 'Feb 17, 2024',
      cardTitle: "DOW's Core Areas of Focus moving forward",
      cardDetailedText: `
        1. Public health promotion and delivery management: 

        We will continue to conduct health camps in remote areas of Nepal and set up telemedicine unit. A stronger and more sustainable plan for running the telemedicine unit will be prepared. One of the next steps will be to procure a vehicle and equip it with all the basic health and diagnosis essentials, which can be used in one of our health camps. 

        Ultimately, the plan is to be able to manage and run a remote health post. 

        2. Clinical Research

        We plan to promote research practice in young doctors, nurses, and health professionals by guiding them in publishing case reports and observational studies. After a certain point, we plan to bid for the implementation of international clinical trials in Nepal. 

      3. Health Volunteer and Observership in Nepal and the USA

      We will promote local businesses and health organizations as potential spots for foreign volunteers to come and donate their time and money in exchange for hosting them in Nepal. On the other hand, we will set up observership oppertunities for Nepali medical graduates in health institutes in the USA. 

      4. Fundraising

      As a non-profit company, we can only survive by the donations of charitable donors. Thus, fundraising for different projects and the company will be a continuous focus. This will be done by seeking donations and grants and bidding for projects that can help make DOW self-sustainable. 
      `,
    }
  ];

  return (
    <div className="pt-16 px-4" style={{ background: COLORS.pageBackground }}>
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
        About Us
      </h2>
      <p className="max-w-7xl mx-auto text-base md:text-lg leading-relaxed mb-10">
        DOW was launched to contribute towards the upliftment of the people living in rural Nepal 
        in the field of primary health care and to increase awareness about preventive medicine.
      </p>

      <div
        className="w-full overflow-x-auto cursor-grab"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ userSelect: 'none' }}
      >
        <div className="about-timeline w-full max-w-5xl h-[28rem] mx-auto">
          <Chrono
            items={items}
            mode="HORIZONTAL"
            hideControls={false}
            theme={{
              primary: COLORS.primary,
              secondary: COLORS.pageBackground,
              cardBgColor: COLORS.white,
              cardForeColor: COLORS.textDark,
              titleColor: COLORS.primary,
              titleColorActive: COLORS.primary,
            }}
            cardHeight={220}
            cardWidth={360}
            slideShow={false}
            disableClickOnCircle={false}
            enableKeyboardNavigation
            activeItemIndex={activeItemIndex}
            onItemSelected={(item, idx) => setActiveItemIndex(idx)}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

