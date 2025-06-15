import { COLORS } from "../constants/colors";

function About() {
  return (
    <div>
      <h2 className = "text-center text-3xl font-semibold" style={{color: COLORS.textDark}}>About Us</h2>
      <p className = "pt-4">DOW was launched to contribute towards the upliftment of the people living in rural Nepal in the field of primary health care and increase awareness about preventive medicine.</p>
    </div>
  )
}

export default About;