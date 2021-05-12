import {useEffect, useState} from "react";
import User from "../user/User";
import "./user.css"

export default function Users() {
    const [users, setUsers] = useState([]);
    const [usersNumber,setUsersNumber]=useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            });
    }, []);

    const getInfo = (id) => {
        let findUserNum = users.find(value => value.id === id)
        setUsersNumber(findUserNum)
    };

    return (<div className={'main'}>
            <div className={'user-info'}>
                {
                    users.map(value => <User key={value.id} item={value} buttonFunction={getInfo}/>)
                }
            </div>
            <div className={'user-number'}>
                {
                    usersNumber && (<h2>PHONE NUMBER: {usersNumber.phone}</h2>)
                }
            </div>
    </div>

    )
}
