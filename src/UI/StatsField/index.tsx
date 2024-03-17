import styles from "./styles.module.scss"
export const StatsField = () => {
    return (
        <div className={styles['statsContainer']}>
            <div className={styles['statsInnerContainer']}>
                <div className={styles['statsHeader']}>
                    <p>AmountOfUsers</p>
                </div>
                <div className={styles['divider']}></div>
                <div className={styles['group']}>
                    <p className={styles['groupTitle']}>Age Groups</p>
                    <div className={styles['table']}>
                        <div className={styles['leftCell']}>
                            <p>11 to 20</p>
                            <p>21 to 30</p>
                            <p>31 to 40</p>
                            <p>41 to 50</p>
                            <p>51+</p>
                        </div>
                        <div className={styles['rightCell']}>
                            <p>52 users</p>
                            <p>642 users</p>
                            <p>108 users</p>
                            <p>197 users</p>
                            <p>1 user</p>
                        </div>
                    </div>
                </div>
                <div className={styles['divider']}></div>
                <div className={styles['group']}>
                    <p className={styles['groupTitle']}>Gender Groups</p>
                    <div className={styles['table']}>
                        <div className={styles['leftCell']}>
                            <p>Male</p>
                            <p>Female</p>
                        </div>
                        <div className={styles['rightCell']}>
                            <p>52 users</p>
                            <p>642 users</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}