import { useEffect } from "react"
import { useGlobalState } from "../../Core/StateManager"
import styles from "./styles.module.scss"
import { IAgeGroup, IGenderGroup } from "../../Core/Interfaces/IState"
export const StatsField = () => {
    const { state, setState } = useGlobalState()
    const getGenderGroup = (): IGenderGroup => {
        const result: IGenderGroup = {
            male: state.users?.filter(user => user.gender.startsWith('m')).length || 0,
            female: state.users?.filter(user => user.gender.startsWith('f')).length|| 0
        }
        return result
    }
    const getAgeGroup = (): IAgeGroup => {
        const result: IAgeGroup = {
            '11-to-20': state.users?.filter(user => user.dob.age >= 11 && user.dob.age <= 20).length || 0,
            '21-to-30': state.users?.filter(user => user.dob.age >= 21 && user.dob.age <= 30).length || 0,
            '31-to-40': state.users?.filter(user => user.dob.age >= 31 && user.dob.age <= 40).length || 0,
            '41-to-50': state.users?.filter(user => user.dob.age >= 41 && user.dob.age <= 50).length || 0,
            '51+': state.users?.filter(user => user.dob.age >= 51).length || 0,
        }
        return result
    }
    const setGroups = () => {
        // TODO: replace with ...
        setState({users: state.users, groups: {ageGroup: getAgeGroup(), genderGroup: getGenderGroup()}})
    }
    useEffect(() => {
        setGroups()
    }, [state.users])
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
                            {/* TODO: user/users */}
                            <p>{state.groups?.ageGroup["11-to-20"]} users</p>
                            <p>{state.groups?.ageGroup["21-to-30"]} users</p>
                            <p>{state.groups?.ageGroup["31-to-40"]} users</p>
                            <p>{state.groups?.ageGroup["41-to-50"]} users</p>
                            <p>{state.groups?.ageGroup["51+"]} users</p>
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
                            <p>{state.groups?.genderGroup.male}</p>
                            <p>{state.groups?.genderGroup.female}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}