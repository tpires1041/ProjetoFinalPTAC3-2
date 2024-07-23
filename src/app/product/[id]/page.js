import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/aeronave.module.css";
import { NextResponse } from "next/server";

export default async function Product({ params }) {
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();

    console.log(data); // Adicionei um console.log para verificar os dados

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.imageContainer}>
                <Image
                        src={data.image}
                        alt={data.modelo}
                        layout="responsive"
                        width={300}
                        height={300}
                        objectFit="cover"
                    />
                </div>
                <div className={styles.details}>
                    <p className={styles.modelo}>{data.modelo}</p>
                    <p className={styles.categoria}>{data.categoria}</p>
                    <p className={styles.description}>
                        {data.fabricante} - {data.ano}
                    </p>
                    <p className={styles.preco}>{data.preco}</p>
                    <p className={styles.horasTotais}>{data.horasTotais}</p>
                    <p className={styles.assentos}>{data.assentos}</p>
                    <p className={styles.tipoNegocio}>{data.tipoNegocio}</p>
                    <p className={styles.condicaoDeUso}>{data.condicaoDeUso}</p>
                    <p className={styles.contato}>{data.contato}</p>
                    <p className={styles.localizacao}>{data.localizacao}</p>
                </div>
            </main>
        </div>
    );
}
