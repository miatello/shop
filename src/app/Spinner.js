import Image from "next/image";
import styles from "./page.module.css";

export default function Spinner (){
    return (
        <div className={styles.spinnerContainer}>
        <Image width={100} height={100} alt="" src={"/loading.svg"} />
        </div>
    );
}