import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
    return(
    <footer className={styles.footer}>
        <Image
                        src={"/logo-paper-plane.jpeg"}
                        width={100}
                        height={30}
                        alt={"Imagem da logo"}
                    />
        <p>Ajudando negócios serem fechados desde 2012</p>
    </footer>
    )
}