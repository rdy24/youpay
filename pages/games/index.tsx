import Head from "next/head";
import Navbar from "../../components/organism/Navbar";
import GameItems from "../../components/molecules/GameItems";
import Footer from "../../components/organism/Footer";

export default function games() {
  return (
    <>
      <Head>
        <title>Youpay | Games</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar games />
      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <div className="row game-item">
            <GameItems title="Genshin Impact" tile="genshin_tile" />
            <GameItems title="Mobile Legend" tile="mlbb_tile" />
            <GameItems title="Valorant" tile="valorant_tile" />
            <GameItems title="Coming Soon" tile="coming-soon" />
            <GameItems title="Coming Soon" tile="coming-soon" />
            <GameItems title="Coming Soon" tile="coming-soon" />
            <GameItems title="Coming Soon" tile="coming-soon" />
            <GameItems title="Coming Soon" tile="coming-soon" />
            <GameItems title="Coming Soon" tile="coming-soon" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
