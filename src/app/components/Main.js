"use client"

import { useEffect, useState } from "react";
import Carregando from './Carregando';
import Image from "next/image";
import styles from "../styles/main.module.css";
import ErrorFetch from "./ErrorFetch";
import Link from "next/link";


export default function Main() {

  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [textSearch, setTextSearch] = useState("");
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

  const orderAz = () => {
    const listAux = [...listProduct].sort((a, b) => a.modelo.localeCompare(b.modelo));

    setListProduct(listAux);
  }

  const orderZa = () => {
    let listAux = [...listProduct].sort((a, b) => a.modelo.localeCompare(b.modelo));
    listAux = listAux.reverse();

    setListProduct(listAux);
  }

  const search = (text) => {
    setTextSearch(text);

    if (text.trim() == "") {
      setListProduct(listComplete);
      return
    }
    const newList = listProduct.filter((product) => product.modelo.toUpperCase().includes(textSearch.toUpperCase().trim()));
    setListProduct(newList);
  }

  if (isError == true){
    return <ErrorFetch/>
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
    <div className={styles.barra}>
    <input type="text" value={textSearch} placeholder="Pesquise um produto" onChange={(event) => search(event.target.value)} />
    </div>
    <div className={styles.filters}>
        <div>
          <button onClick={orderAz}>A-Z</button>
          <button onClick={orderZa}>Z-A</button>
        </div>
      </div>

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