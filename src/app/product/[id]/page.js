import Image from "next/image";
import styles from "../../styles/aeronave.module.css";
import { NextResponse } from "next/server";

export default async function Product({ params }) {
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();

    console.log(data); // Adicionei um console.log para verificar os dados

    return (
        <div>
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
                    <p className={styles.modelo}>Modelo: {data.modelo}</p>
                    <p className={styles.categoria}>Categoria: {data.categoria}</p>
                    <p className={styles.description}>
                        Fabricante: {data.fabricante}
                    </p>
                    <p className={styles.description}>
                        Ano: {data.ano}
                    </p>
                    <p className={styles.preco}>Preço: {data.preco}</p>
                    <p className={styles.horasTotais}>Horas totais: {data.horasTotais}</p>
                    <p className={styles.assentos}>Assentos: {data.assentos}</p>
                    <p className={styles.tipoNegocio}>Tipo de negócio: {data.tipoNegocio}</p>
                    <p className={styles.condicaoDeUso}>Condição de uso: {data.condicaoDeUso}</p>
                    <p className={styles.contato}>Contato do vendedor: {data.contato}</p>
                    <p className={styles.localizacao}>Localização: {data.localizacao}</p>
                </div>
            </main>
        </div>
    );
}
