import styles from "./styles.module.scss"

export const Search = () => {
    return (
        <div className={styles['searchContainer']}>
            <input type="search" name="" id="" className={styles['searchInput']} placeholder="Search"/>
        </div>
    )
}