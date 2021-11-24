import Head from "next/head";
import Footer from "../../components/organism/Footer";
import Navbar from "../../components/organism/Navbar";

export default function detail() {
	return (
		<>
			<Head>
				<title>Youpay | Detail Article</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar article />
			<div className="container">
				<div className="row">
					<div className="col-lg text-center">
						<h2 className="mb-3">Card title</h2>
						<img
							src="https://source.unsplash.com/random/1600x900"
							width={300}
							height={300}
							className="align-items-center text-center"
							alt="gambar"
						/>
						<p className="text-start mt-3">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
							repellendus accusamus eius sed eum beatae totam dolorum neque
							earum accusantium maiores in quia provident aliquam, quo cum
							perspiciatis consectetur amet delectus doloribus, harum blanditiis
							dicta consequatur ipsum! Molestias neque officiis, hic mollitia
							ipsum, delectus corrupti rerum assumenda dolorum illo autem?
						</p>
						<p className="text-start">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio hic
							earum suscipit natus, dignissimos reiciendis deserunt eum numquam
							ullam mollitia dicta saepe consectetur? Sunt voluptas, odit, natus
							fugiat inventore sed quisquam est officiis dolores mollitia porro
							possimus similique aliquam ipsa ducimus ipsam eaque eligendi amet
							sapiente sequi ex ipsum? Minus blanditiis distinctio consequuntur
							provident voluptate recusandae facilis odit corrupti ad, nobis
							quibusdam ullam magni nisi. Architecto beatae esse veniam eveniet
							cum a temporibus distinctio dolorem! Aut atque omnis vel quo
							velit! Illum omnis voluptatibus, sint ex possimus, a culpa sunt
							dicta nobis non recusandae, id rem nesciunt impedit dolorum
							dolores.
						</p>
						<p className="text-start">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
							consectetur labore vitae nam optio eos, eligendi explicabo!
							Praesentium fugiat vel aliquid sint eum, neque suscipit impedit
							consequatur. Excepturi fugit, iure autem aliquam esse cumque
							libero inventore molestiae ipsum consequatur maxime optio nemo
							exercitationem eum animi quo magnam alias eveniet temporibus,
							commodi minus similique? Ducimus tenetur nesciunt perferendis rem
							reprehenderit numquam optio quod, earum labore at eius veniam nam
							velit incidunt consequatur mollitia nostrum asperiores ipsum.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
