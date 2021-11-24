import Head from "next/head";
import ArticleItem from "../../components/molecules/ArticleItem";
import Footer from "../../components/organism/Footer";
import Navbar from "../../components/organism/Navbar";

export default function Article() {
	return (
		<>
			<Head>
				<title>Youpay | Article</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar article />
			<div className="container-fluid">
				<div className="row">
					<ArticleItem />
					<ArticleItem />
					<ArticleItem />
					<ArticleItem />
					<ArticleItem />
					<ArticleItem />
				</div>
			</div>
			<Footer />
		</>
	);
}
