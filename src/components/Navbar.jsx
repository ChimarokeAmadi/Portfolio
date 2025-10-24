import logo from "/Initials.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
	return (
		<div className="container mb-0 flex items-center justify-between py-0">
			<div className="flex flex-shrink-0 items-center">
				<img src={logo} alt="" className="size-10 mx-2" />
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<a href="https://www.linkedin.com/in/chimaroke-amadi/">
					<FaLinkedin />
				</a>
				<a href="https://github.com/ChimarokeAmadi">
					<FaGithub />
				</a>
				<a href="https://www.instagram.com/drealchizzy?igsh=OXN5ZXUyZGQxNGk4&utm_source=qr">
					<FaInstagram />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
