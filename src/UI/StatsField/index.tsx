import { useEffect } from "react"
import { useGlobalState } from "../../Core/StateManager"
import styles from "./styles.module.scss"
import { IAgeGroup, IGenderGroup } from "../../Core/Interfaces/IState"
export const StatsField = () => {
    const { state, setGroups } = useGlobalState()
    const getGenderGroup = (): IGenderGroup => {
        const male = []
        const female = []
        for (let i = 0; i < state.users.length; i++) {
            if (state.users[i].gender === 'male') {
                male.push(state.users[i])
            }
            if (state.users[i].gender === 'female') {
                female.push(state.users[i])
            }
        }
        const result: IGenderGroup = {
            male: male.length,
            female: female.length
        }
        return result
    }
    const getAgeGroup = (): IAgeGroup => {
        const from11To20 = []
        const from21To30 = []
        const from31To40 = []
        const from41To50 = []
        const from51 = []
        for (let i = 0; i < state.users.length; i++) {
            if (state.users[i].dob.age >= 11 && state.users[i].dob.age <= 20) {
                from11To20.push(state.users[i])
            }
            if (state.users[i].dob.age >= 21 && state.users[i].dob.age <= 30) {
                from21To30.push(state.users[i])
            }
            if (state.users[i].dob.age >= 31 && state.users[i].dob.age <= 40) {
                from31To40.push(state.users[i])
            }
            if (state.users[i].dob.age >= 41 && state.users[i].dob.age <= 50) {
                from41To50.push(state.users[i])
            }
            if (state.users[i].dob.age >= 51) {
                from51.push(state.users[i])
            }
        }
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