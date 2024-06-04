import Header from "../../Shared/Header/Header";
import Hero from "./Hero/Hero";
import Navbar from './../../Shared/Navbar/Navbar';

const Home = () => {
  return (
		<div className="max-w-[1440px] mx-auto">
      <div>
        <Navbar></Navbar>
      </div>
			<Header />
			<main className="main-bg rounded-3xl mx-4">
				<Hero />
			</main>
		</div>
	);
};

export default Home;
