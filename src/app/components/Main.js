"use client"

import { useEffect, useState } from "react";
import Carregando from './Carregando';
import Image from "next/image";
import styles from "../styles/main.module.css";
import Link from "next/link";


export default function Main() {

  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost:3000/api", {
          cache: "no-cache",
        });

        const data = await response.json();

        setListProduct(data);
        setListComplete(data);
      }
      catch {
        setIsError(true);
      }
    }
    getProduct();
  }, []);


  if (isError == true){
    return <p>Deu erro</p>
  }

  if (listComplete[0] == null) {
    return (
      <main className={styles.main}>
        <Carregando />
      </main>
    )
  }

  return (
    <>
      <main className={styles.main}>
        {listProduct.map((aeronaves) => (
          <div className={styles.card} key={aeronaves.id}>
            <p>{aeronaves.modelo}</p>

            <Image width={300} height={300} src={aeronaves.image} alt={aeronaves.modelo} />

            <p>{aeronaves.categoria}</p>

            <p className={styles.description}>
              {aeronaves.fabricante} - {aeronaves.ano} </p>

            <p>{aeronaves.preco}</p>

            <Link href={"/product/" + aeronaves.id}>
              <button>Ver Mais</button>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}