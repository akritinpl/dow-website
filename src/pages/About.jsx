import { COLORS } from "../constants/colors";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; //horizontal
import { Briefcase, CalendarCheck, HeartPulse } from 'lucide-react'; // Example icons, you can adjust

function About() {
  return (
    <div className="m-6 md:m-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.textDark }}>
        About Us
      </h2>
      <p className="max-w-7xl mx-auto text-base md:text-lg leading-relaxed mb-10">
        DOW was launched to contribute towards the upliftment of the people living in rural Nepal 
        in the field of primary health care and to increase awareness about preventive medicine.
      </p>

      <section>
        <Timeline />
      </section>
    </div>
  );
}

function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8" style={{ color: COLORS.textDark }}>
        Our Journey
      </h2>
      <VerticalTimeline lineColor={COLORS.highlight}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#f9f9f9', color: COLORS.textDark, borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: `7px solid ${COLORS.highlight}` }}
          date="January 1, 2012"
          iconStyle={{ background: COLORS.highlight, color: '#fff' }}
          icon={<Briefcase size={20} />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-xl">Foundation of DOW</h3>
          <p className="mt-2 text-base">
            We started our journey with a mission to improve healthcare in rural Nepal.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#f9f9f9', color: COLORS.textDark, borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: `7px solid ${COLORS.highlight}` }}
          date="2020"
          iconStyle={{ background: COLORS.highlight, color: '#fff' }}
          icon={<CalendarCheck size={20} />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-xl">First Health Camp</h3>
          <p className="mt-2 text-base">
            Organized our first health camp in a remote village.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#f9f9f9', color: COLORS.textDark, borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: `7px solid ${COLORS.highlight}` }}
          date="2022"
          iconStyle={{ background: COLORS.highlight, color: '#fff' }}
          icon={<HeartPulse size={20} />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-xl">Expansion of Services</h3>
          <p className="mt-2 text-base">
            Expanded healthcare services to multiple districts.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;
