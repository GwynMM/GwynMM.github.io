import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={styles.navrbar}>
      <h1>Gwyn's Website</h1>
      <nav>
        <Link href="/"> Home </Link>
        <Link href="/about"> About </Link>
        <Link href="/contact"> Contact </Link>
      </nav>
    </header>
  );
}
