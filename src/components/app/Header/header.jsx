import { Link } from 'react-router-dom';
import styles from '../../../styles/Header.module.css'
import { ROUTES } from '../../../utils/routes';
import logo from '../../../images/logo.svg';
import avatar from '../../../images/avatar.jpg'

const Header = () => {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.info}>
          <div className={styles.user}>
            <div
              className={styles.avatar}
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>

            <div className={styles.username}>Guest</div>
          </div>

          <form className={styles.form}>
            <div className={styles.icon}>
              <svg>
                <use
                  href={`${process.env.PUBLIC_URL}/sprite.svg#search`}
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}
                />
              </svg>
            </div>
            <div className={styles.input}>
              <input
                type="search"
                name="search"
                placeholder="search..."
                autoComplete="off"
                onChange={() => {}}
                value=""
              />
            </div>
            {false ?? <div className={styles.box}></div>}
          </form>
          <div className={styles.account}>
            <Link to={ROUTES.HOME} className={styles.favourites}>
              <svg className={styles["icon-fav"]}>
                <use
                  href={`${process.env.PUBLIC_URL}/sprite.svg#heart`}
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}
                />
              </svg>
            </Link>

            <Link to={ROUTES.CART} className={styles.cart}>
              <svg className={styles["icon-cart"]}>
                <use
                  href={`${process.env.PUBLIC_URL}/sprite.svg#bag`}
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}
                />
              </svg>
              <span className={styles.count}>2</span>
            </Link>
          </div>
        </div>
      </div>
    );
}
 
export default Header;