import styles from "./Display.module.css";
let Display=({DisplayValue})=>{
    return <input type="text" className={styles.display} value={DisplayValue} readOnly />
}
export default Display;