import React from 'react'
import styles from "../../../styles/Product.module.css"
import { Link } from 'react-router-dom'
import ROUTES from '../../../utils/routes'

const Product = ({images, title, price, describtion}) => {
    const currentImage = images[0]
    const sizes = [36,38,40,42,44,46,48,50,52,54]
  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>
        <div className={styles["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={styles.current}
              style={{ backgroundImage: `url(${image})` }}
              onClik={() => {}}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span>Green
        </div>
        <div className={styles.size}>
          <span>Size:</span>
          <div className={styles.list}>
            {sizes.map((size) => (
              <div key={size} className={styles.size} onClick={() => {}}>
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{describtion}</p>
        <div className={styles.actions}>
          <button className={styles.add}>Add to Cart</button>
          <button className={styles.favourite}>Add to favourite</button>
        </div>
        <div className={styles.bottom}>
            <div>19 people pourchase</div>

            <Link to={ROUTES.HOME}>Return to Home</Link>
        </div>
      </div>
    </section>
  );
}

export default Product