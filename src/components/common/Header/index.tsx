import Nav from "../Navigation";
import styles from "./header.module.css";

const Header = () => {
	return (
		<header className={styles.Header}>
			<h1>LOGO</h1>
			<Nav />
		</header>
	);
};

export default Header;
