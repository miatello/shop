import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="data:image/png;base64,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" />
      <div className={styles.headercontainer}>
        <i class="fi fi-rr-shopping-cart"></i>
        <button className={styles.botaoadc}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
  <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
</svg>Adicionar ao Carrinho</button>
</div>
        <p className={styles.frasemark}>Bem-vindo ao nosso shop! Onde comprar é uma terapia!</p>
    </header>
  );
}
