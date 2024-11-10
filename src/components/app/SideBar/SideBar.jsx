import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

import styles from "../../../styles/Sidebar.module.css";


const SideBar = () => {

  const { list } = useSelector(({categories}) => categories)

  return (
    <section className={styles.sideBar}>
      <div className={styles.title}>
        Categories
      </div>

      <nav>
        <ul className={styles.menu}>
          
            {list.slice(0,5).map(({id, name})=>(
              <li key={id}>
                <NavLink
                 className={({isActive})=>
                 `${styles.link} ${isActive ? styles.active : ""}`
                 }
                 to={`/categories/${id}`}>
                  {name}
                </NavLink>
              </li>
            ))}
          
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/help" className={styles.link} target="_blank">
          Help
        </a>
        <a href="/terms" className={styles.link} target="_blank" style={{textDecration : 'underline'}}>
          Terms & Condition
        </a>
      </div>

    </section>
  )
};

export default SideBar;
