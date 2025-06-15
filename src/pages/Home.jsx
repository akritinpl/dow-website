import COLORS from '../constants/colors';

function Home() {
  return (
    <section>
      <div style = {{ backgroundColor: COLORS.primary }}>
        <h2 className="text-center text-4xl font-semibold text-[#1C1F33] pt-4"> Doctors On Wheels: On the move, For the Community!</h2>
      </div>
    </section>
  );
}

export default Home;
