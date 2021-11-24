import Link from "next/link";

interface GameItemProps {
	title: string;
	tile: "genshin_tile" | "mlbb_tile" | "valorant_tile" | "coming-soon";
}
export default function GameItem(props: GameItemProps) {
	const { title, tile } = props;
	return (
		<div className="col-lg-3 featured-game mb-30" data-aos="fade-up">
			<div className="card featured-game-card">
				<img src={`/img/${tile}.png`} alt="..." className="img-game" />
				<div className="card-body text-center">
					<h5 className="card-title">{title}</h5>
					<Link href="/detail">
						<a className="btn btn-top-up rounded-pill px-5">Top Up</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
