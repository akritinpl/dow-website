import {COLORS} from '../constants/colors';

function Home() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col p-20" style={{ backgroundColor: '#05203d'}}>
        <h2 className="text-center text-3xl font-semibold pt-4" style={{ color: COLORS.textLight }}>On the move, For the Community!</h2>
    </section>
  );
}

export default Home;
