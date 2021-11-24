import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/organism/Footer";
import Navbar from "../../components/organism/Navbar";

export default function About() {
	return (
		<>
			<Head>
				<title>Youpay | About Us</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar about />
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
							<div className="position-relative">
								<img src="./img/Header-1.png" className="img-fluid" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<h1 className="header-title fw-bold">Follow Us</h1>
						<div className="d-flex">
							<a
								href="https://www.instagram.com/youpay.id/"
								target="_blank"
								rel="noreferrer"
								className="me-4"
							>
								<Image src="/icon/instagram.png" width={70} height={70} />
							</a>
							<a
								href="https://web.telegram.org/"
								target="_blank"
								rel="noreferrer"
								className="me-4"
							>
								<Image src="/icon/telegram.png" width={70} height={70} />
							</a>
							<a
								href="https://web.facebook.com/"
								target="_blank"
								rel="noreferrer"
								className="me-4"
							>
								<Image src="/icon/facebook.png" width={70} height={70} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
