import Image from "next/image";
import Auth from "./Auth";
import Menu from "./Menu";
import ToogleButton from "./ToogleButton";

export default function Navbar() {
	return (
		<section>
			<nav className="navbar navbar-expand-lg navbar-light pt-lg-40 pb-lg-40 pt-30 pb-50">
				<hr />
				<div className="container-fluid">
					<a className="navbar-brand" href="/#">
						<Image
							src="/icon/youpay1-02.jpg"
							width={70}
							height={70}
							className="rounded-circle"
						/>
					</a>
					<p className="logo-brand">YouPay</p>
					<ToogleButton />
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
							<Menu title="Home" active />
							<Menu title="Games" />
							<Menu title="Rewards" />
							<Menu title="Discover" />
							<Auth />
						</ul>
					</div>
				</div>
			</nav>
		</section>
	);
}
