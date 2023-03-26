import styles from "./styles.module.scss";
import Link from "next/link";

export default function UserMenu({loggedIn}) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to EcommerceApp !</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://i.pravatar.cc/30"
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>Carlo</h3>
            <span onClick={() => {}}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => {}}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
}
