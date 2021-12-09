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
      <section className="detail">
        <div className="container container-fluid">
          <div className="row">
            <div className="col text-center">
              <Image src="/img/genshin.jpeg" width={500} height={300} alt="" />
              <h2 className="text-4xl fw-bold color-palette-1 text-center mt-10">
                Genshin Impact
              </h2>
              <hr />
              <p className="text-start text-lg mt-10">
                Genshin Impact adalah permainan free-to-play action RPG dunia
                terbuka yang dikembangkan oleh miHoYo. Game ini dirilis pada
                tanggal 28 September 2020 di platform Android, iOS, Windows, dan
                PlayStation 4, serta 28 April 2021 di platform PlayStation 5.
                <br />
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
              <hr />
            </div>
          </div>
          <div className="text-center text-lg mt-3">
            <p>
              Mau Top up Genesis Crystal?
              <br />
              silahkan pilih ecommerce dibawah ini ya:)
            </p>
            <a
              target="_blank"
              href="https://shopee.com"
              type="submit"
              className="btn btn-submit rounded-pill "
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
        </div>
      </section>
      <Footer />
    </>
  );
}
