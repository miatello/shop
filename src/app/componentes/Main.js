"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Spinner from "../Spinner";

export default function Main() {
  const [listProduct, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, []);

  const orderAz = () => {
    const listAux = [...listProduct].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setProduct(listAux);
  };

  const orderZa = () => {
    let listAux = [...listProduct].sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    listAux = listAux.reverse();
    setProduct(listAux);
  };

  const orderPMenor = () => {
    const listAuxPreco = [...listProduct].sort((a, b) => a.price - b.price);
    setProduct(listAuxPreco);
  };

  const orderPMaior = () => {
    let listAuxPreco = [...listProduct].sort((a, b) => a.price - b.price);

    listAuxPreco = listAuxPreco.reverse();
    setProduct(listAuxPreco);
  };

  if ( listProduct[0] == null) {
    return <Spinner />;
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.titulo}>Produtos em destaque</h1>
        <div className={styles.filters}>
          <button onClick={orderAz}>Az</button>
          <button onClick={orderZa}>Za</button>
          <button onClick={orderPMenor}>Preço Menor</button>
          <button onClick={orderPMaior}>Preço Maior</button>
        </div>
        <div className={styles.produtos}>
          {listProduct.map((product) => (
            <div key={product.id} className={styles.card}>
              <h2 className={styles.titulop}>{product.title}</h2>
              <Image
                src={product.image}
                width={100}
                height={100}
                className={styles.imagemp}
              />
              <p className={styles.precop}>{product.price}</p>
              <p className={styles.descricaop}>{product.description}</p>
              <p className={styles.categoriap}>{product.category}</p>
              <p className={styles.countp}>{product.count}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
