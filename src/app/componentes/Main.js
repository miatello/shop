import Image from "next/image";
import styles from "../page.module.css";

export default async function Main(){
    const respose = await fetch("https://fakestoreapi.com/products");
    const data = await respose.json();

    return(
        <main className={styles.main}>
            <h1 className={styles.titulo}>Produtos em destaque</h1>
            <div className={styles.produtos}>
            {data.map((product)=> 
                <div key={product.id} className= {styles.card}>
                    <h2 className={styles.titulop}>{product.title}</h2>
                    <Image src={product.image} width={100} height={100} className={styles.imagemp}/>
                    <p className={styles.precop}>{product.price}</p>
                    <p className={styles.descricaop}>{product.description}</p>
                    <p className={styles.categoriap}>{product.category}</p>
                    <p className={styles.countp}>{product.count}</p>
                </div>
            )}
            </div>
        </main>
    );
}