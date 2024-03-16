import { IUser } from "../../Core/Interfaces/IUser"
import styles from "./styles.module.scss"

export interface IUserCardProps {
    user: IUser
}

export const UserCard = (props: IUserCardProps) => {
    return (
        <div className={styles['userCard']}>
            <div className={styles['userCardInner']}>
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
                        <p>{props.user.cell}</p>
                        {/* TODO: сделать дату */}
                        <p>{new Date(props.user.dob.date).toDateString()}</p>
                        <p>{props.user.location.city}, {props.user.location.state}, {props.user.location.country}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}