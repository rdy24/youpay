import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/organism/Navbar";
import Footer from "../../components/organism/Footer";

export default function Detail() {
	return (
		<>
			<Head>
				<title>Youpay | Detail</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar games />
			<section className="detail pt-lg-60 pb-50">
				<div className="container-xxl container-fluid">
					<div className="row">
						<div className="col-xl-4 col-lg-5 col-md-5 pb-30 pb-md-0 text-md-start">
							<div className="row align-items-center">
								<div className="col-md-12 col-5 text-center">
									<Image
										src="/img/genshin_tile.png"
										width={250}
										height={250}
										className="img-fluid text-center"
										alt=""
									/>
									<p className="text-start text-sm mt-10">
										Mau top up Genshin Impact?
										<br />
										Beli Genesis Crystals dengan mudah dan cepat!
										<br />
										Caranya mudah!
										<br />
										Cukup masukan ID, dan email lalu pilih shopee atau
										tokopedia, pilih jumlah Genesis Crystals yang diinginkan,
										lakukan pembayaran, lalu Genesis Crystals akan langsung kamu
										dapatkan di dalam inventory Genshin Impact kamu.
									</p>
								</div>
								<div className="col-md-12 col-7 d-md-none d-block">
									<h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
										Genshin Impact
									</h2>
								</div>
							</div>
						</div>
						<div className="col-xl-8 col-lg-7 col-md-7 ">
							<div className="d-md-block d-none">
								<h2 className="text-4xl fw-bold color-palette-1 text-start mt-10">
									Genshin Impact
								</h2>
							</div>
							<hr />
							<p className="text-start text-lg mt-10">
								Genshin Impact adalah permainan free-to-play action RPG dunia
								terbuka yang dikembangkan oleh miHoYo. Game ini dirilis pada
								tanggal 28 September 2020 di platform Android, iOS, Windows, dan
								PlayStation 4, serta 28 April 2021 di platform PlayStation 5.
							</p>
							<p className="text-start text-lg mt-10">
								Jelajahi luasnya semesta penuh dengan petualangan dalam game
								open-world terbaru dari miHoYo. Masuklah ke Tevyat, dunia yang
								penuh dengan kehidupan dan berbagai kekuatan. Kamu dan saudaramu
								sampai ke dunia ini dari semesta lain. Terpisahkan oleh Dewa
								yang masih menjadi misteri, kekuatanmu dirampas, dan dibuang ke
								dalam tidur yang sangat lelap, kemudian terbangun di dalam dunia
								yang sangat berbeda. Lalu kamu memulai petualanganmu melewati
								Teyvat untuk mencari jawaban dari Sang Ketujuh - Dewa dari
								segala elemen. Dalam perjalanan, persiapkan diri untuk menyusuri
								setiap sudut dunia yang menakjubkan, gabungkan kekuatan berbagai
								tipe karakter, dan ungkap misteri demi misteri Teyvat untuk
								menjawab semuanya.
							</p>
							<form action="./checkout.html" method="POST">
								<input
									type="text"
									className="form-control rounded-pill mb-30"
									id="ID"
									name="ID"
									aria-describedby="verifyID"
									placeholder="Enter your ID"
								/>
								<input
									type="text"
									className="form-control rounded-pill mb-30"
									id="email"
									name="email"
									aria-describedby="VerifyEmail"
									placeholder="Enter your Email"
								/>
								<div className="d-flex">
									<a
										target="_blank"
										href="https://shopee.com"
										type="submit"
										className="btn btn-submit rounded-pill me-4"
										rel="noreferrer"
									>
										Continue to shopee
									</a>
									<a
										target="_blank"
										href="https://tokopedia.com"
										type="submit"
										className="btn btn-submit rounded-pill"
										rel="noreferrer"
									>
										Continue to Tokopedia
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
