import styles from "../../../styles/Footer.module.css";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

const Footer = () => {
  return (
    <section className={styles.footer}>

        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={logo} alt="logo" />
            </Link>
        </div>

      <div className={styles.rights}>
            Developed by P.O.
      </div>

      <div className={styles.socials}>
            <a href="http:intagram.com" target="_blank" rel="noreferrer">
            <svg className="icon">
                <use
                href={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}
                />
            </svg>
            </a>
            <a href="http:facebook.com" target="_blank" rel="noreferrer">
            <svg className="icon">
                <use
                href={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}
                />
            </svg>
            </a>
            <a href="http:youtube.com" target="_blank" rel="noreferrer">
            <svg className="icon">
                <use
                href={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}
                />
            </svg>
            </a>
      </div>
    </section>
  );
};

export default Footer;
