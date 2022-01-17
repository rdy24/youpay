import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../components/organism/Navbar";
import Footer from "../../components/organism/Footer";
import { getDetailGame } from "../../services/player";
import DetailItem from "../../components/DetailItem";

export default function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    title: "",
    backdrop: "",
    description: "",
    item: "",
    product: {
      game: "",
    },
  });

  const getDetailGameAPI = useCallback(async (id) => {
    const response = await getDetailGame(id);
    setDataItem(response);
  }, []);

  useEffect(() => {
    if (isReady) {
      getDetailGameAPI(query.id);
    }
  });
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
              <DetailItem data={dataItem} />
            </div>
          </div>
          <div className="text-center text-lg mt-3">
            <p>
              Mau Top up {dataItem.item}?
              <br />
              silahkan pilih ecommerce dibawah ini ya
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
