import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <style jsx>{`
        nav {
          background-color: teal;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
