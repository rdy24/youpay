import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Footer from "../../components/organism/Footer";
import Navbar from "../../components/organism/Navbar";
import { getDetailArticle } from "../../services/player";

export default function detail() {
  const { query, isReady } = useRouter();
  const [dataArticle, setDataArticle] = useState({
    judul: "",
    body: "",
    image: "",
  });

  const getDetailArticleAPI = useCallback(async (id) => {
    const response = await getDetailArticle(id);
    setDataArticle(response);
  }, []);

  useEffect(() => {
    if (isReady) {
      getDetailArticleAPI(query.id);
    }
  });
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
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
            <h2 className="mb-3">{dataArticle.judul}</h2>
            <img
              src={`${API_IMG}/${dataArticle.image}`}
              width={300}
              className="align-items-center text-center"
              alt="gambar"
            />
            <div
              className="text-start text-lg mt-3"
              dangerouslySetInnerHTML={{ __html: dataArticle.body }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
