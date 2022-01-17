import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/organism/Navbar";
import GameItem from "../../components/molecules/GameItem";
import Footer from "../../components/organism/Footer";
import { getFeaturedGame } from "../../services/player";
import { GameItemTypes } from "../../services/data-type";

export default function games() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
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
            {gameList.map((item: GameItemTypes) => (
              <GameItem
                key={item.product._id}
                title={item.product.game}
                tile={`${API_IMG}/${item.product.icon}`}
                id={item._id}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
