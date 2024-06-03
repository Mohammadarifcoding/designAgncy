import Navbar from "../../Shared/Navbar/Navbar";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
		<div className="max-w-[1440px] mx-auto">
			<Navbar />
			<main className="main-bg rounded-3xl mx-4">
				<Hero />
			</main>
		</div>
	);
};

export default Home;
