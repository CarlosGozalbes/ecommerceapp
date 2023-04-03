import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="">
            <img src="../../../images/pagosHeader.webp" />
          </Link>
        </li>
        <li>
          <Link href="">
            <img src="../../../images/garantiaHeader.webp" />
          </Link>
        </li>
        <li>
          <Link href="">
            
            <img src="../../../images/servicioHeader.webp" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
