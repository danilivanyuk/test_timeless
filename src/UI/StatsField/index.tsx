import { useEffect } from "react"
import { useGlobalState } from "../../Core/StateManager"
import styles from "./styles.module.scss"
import { IAgeGroup, IGenderGroup } from "../../Core/Interfaces/IState"
export const StatsField = () => {
    const { state, setGroups } = useGlobalState()
    const getGenderGroup = (): IGenderGroup => {
        const result: IGenderGroup = {
            male: state.users?.filter(user => user.gender.startsWith('m')).length || 0,
            female: state.users?.filter(user => user.gender.startsWith('f')).length|| 0
        }
        return result
    }
    const getAgeGroup = (): IAgeGroup => {
        const from11To20 = []
        const from21To30 = []
        const from31To40 = []
        const from41To50 = []
        const from51 = []
        state.users?.filter(user => {
            if (user.dob.age >= 11 && user.dob.age <= 20) {
                from11To20.push(user)
            }
            if (user.dob.age >= 21 && user.dob.age <= 30) {
                from21To30.push(user)
            }
            if (user.dob.age >= 31 && user.dob.age <= 40) {
                from31To40.push(user)
            }
            if (user.dob.age >= 41 && user.dob.age <= 50) {
                from41To50.push(user)
            }
            if (user.dob.age >= 51) {
                from51.push(user)
            }
        })
        const result: IAgeGroup = {
            '11-to-20': from11To20.length,
            '21-to-30': from21To30.length,
            '31-to-40': from31To40.length,
            '41-to-50': from41To50.length,
            '51+': from51.length,
        }
        return result
    }
    const setGroupsState = () => {
        setGroups({ageGroup: getAgeGroup(), genderGroup: getGenderGroup()})
    }
    const showAmountOfUsers = (amount: number | undefined): string => {
        if (amount === undefined) {
            return ''
        }
        if (amount > 1 || amount === 0) {
            return `${amount} users`
        }
        else {
            return `${amount} user`
        }
    }
    useEffect(() => {
        setGroupsState()
    }, [state.users, state.users.length])
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
                            <p>{showAmountOfUsers(state.groups?.ageGroup["11-to-20"])}</p>
                            <p>{showAmountOfUsers(state.groups?.ageGroup["21-to-30"])}</p>
                            <p>{showAmountOfUsers(state.groups?.ageGroup["31-to-40"])}</p>
                            <p>{showAmountOfUsers(state.groups?.ageGroup["31-to-40"])}</p>
                            <p>{showAmountOfUsers(state.groups?.ageGroup["51+"])}</p>
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
                            <p>{showAmountOfUsers(state.groups?.genderGroup.male)}</p>
                            <p>{showAmountOfUsers(state.groups?.genderGroup.female)}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}