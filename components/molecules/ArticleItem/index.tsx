import Link from "next/link";

export default function ArticleItem() {
	return (
		<div className="col-lg-4 mt-5">
			<div className="card featured-game-card">
				<img
					src="https://source.unsplash.com/random/1600x900"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the cards content.
					</p>
					<Link href="/articles/detail">
						<a className="btn btn-primary">Go somewhere</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
