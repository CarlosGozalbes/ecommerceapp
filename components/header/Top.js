import styles from "./styles.module.scss";
import Image from "next/image";
import UserMenu from "./UserMenu";
import {MdSecurity} from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { useState } from "react";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [visible, setVisible] = useState(false)
    return (
      <div className={styles.top}>
        <div className={styles.top__container}>
          <div></div>
          <ul className={styles.top__list}>
            <li className={styles.li}>
              {" "}
              <img
                src="https://img2.freepng.es/20180320/zuw/kisspng-flag-of-spain-iberian-peninsula-computer-icons-spa-free-spain-flag-svg-5ab169262291d9.5791572515215762301416.jpg"
                alt="bandera pais"
              />{" "}
              <span>España / eur</span>{" "}
            </li>
            <li className={styles.li}>
              <MdSecurity />
              <span>Buyer protection </span>
            </li>
            <li className={styles.li}>
              <span>Customer Service</span>
            </li>
            <li className={styles.li}>
              <span>Help</span>
            </li>
            <li className={styles.li}>
              <BsSuitHeart />
              <Link href="/profile/whishlist">
                <span>Whislist</span>
              </Link>
            </li>
            <li
              className={styles.li}
              onMouseOver={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
            >
              {loggedIn ? (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    <img src="https://i.pravatar.cc/30" />
                    <span>Carlo</span>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              ) : (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    <RiAccountPinCircleLine />
                    <span>Account</span>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              )}
              {visible && <UserMenu loggedIn={loggedIn} />}
            </li>
          </ul>
        </div>
      </div>
    );
}
