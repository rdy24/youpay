import GameItem from "./../../molecules/GameItem/index";

export default function FeaturedGame() {
	return (
		<section className="featured-game pt-50 pb-50">
			<div className="container-fluid">
				<h2 className="text-4xl fw-bold color-palette-1 mb-30">
					Our Featured
					<br /> Games This Year
				</h2>
				<div className="row game-item" data-aos="fade-up">
					<GameItem title="Genshin Impact" tile="genshin_tile" />
					<GameItem title="Mobile Legend" tile="mlbb_tile" />
					<GameItem title="Valorant" tile="valorant_tile" />
					<GameItem title="Coming Soon" tile="coming-soon" />
				</div>
			</div>
		</section>
	);
}
