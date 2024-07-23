import Image from "next/image";
import styles from "../styles/header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src={"/logo-paper-plane.jpeg"}
                        width={100}
                        height={30}
                        alt={"Imagem da logo"}
                    />
                </Link>
            </div>
            <div>
                <p className={styles.frase}>Paper Plane, onde você encontrará a sua aeronave!</p>
            </div>
        </header>
    )
}