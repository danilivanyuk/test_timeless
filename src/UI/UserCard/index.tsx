import { useState } from "react"
import { IUser } from "../../Core/Interfaces/IUser"
import styles from "./styles.module.scss"
import { TrashbinIcon } from "../../assets/Icons/UserCard/Trashbin.Icon"
import { useGlobalState } from "../../Core/StateManager"

export interface IUserCardProps {
    user: IUser
}

export const UserCard = (props: IUserCardProps) => {
    const { state, setState } = useGlobalState()
    const [showTrashbin, setShowTrashbin] = useState(false)
    const arrayWithShiftDelete = (index: number) => {
        let stop = state.users.length - 1;
        while (index < stop) {
            state.users[index] = state.users[++index];
        }
        state.users.pop();
        return state.users
    }    
    const deleteCard = () => {
        var removeIndex = state.users.map(function(item) { return item.login.uuid === props.user.login.uuid }).indexOf(true)
        const stateWithDeletedUser = arrayWithShiftDelete(removeIndex)
        setState({
            users: stateWithDeletedUser
        })
    }
    return (
        <div className={styles['userCard']}>
            <div className={styles['userCardInner']} onClick={() => setShowTrashbin(!showTrashbin)}>
                <div className={styles['cardTop']}>
                    <img src={props.user.picture.thumbnail} alt="" className={styles['userImage']}/>
                    <div className={styles['userTitle']}>
                        <p className={styles['userName']}>{props.user.name.first} {props.user.name.last}</p>
                        <p className={styles['userEmail']}>{props.user.email}</p>
                    </div>
                </div>
                <div className={styles['cardBottom']}>
                    <div className={styles['userAdditionalInfoTitle']}>
                        <p>Phone No</p>
                        <p>Birthday</p>
                        <p>Address</p>
                    </div>
                    <div className={styles['userAdditionalInfo']}>
                        <p>{props.user.phone}</p>
                        {/* TODO: сделать дату */}
                        <p>{new Date(props.user.dob.date).toDateString()}</p>
                        <p>{props.user.location.city}, {props.user.location.state}, {props.user.location.country}</p>
                    </div>
                </div>
                {showTrashbin && 
                    <div onClick={deleteCard} className={styles['trashBin']}>
                        <TrashbinIcon />
                    </div>
                }
            </div>
        </div>
    )
}