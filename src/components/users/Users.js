import User from "../user/User";
import usersData from "../data/UsersData"
import {useState} from "react";

export default function Users() {
    let [users, setUsers] = useState([...usersData]);


    // const popUser = () => {
    //     users.pop();
    //     setUsers([...users])
    // }
    const handleOnChange = (item) => {
        if (item !== 'shift' && item !== 'pop') return;
        const newUserData = [...users];
        item === 'shift' ? newUserData.shift() : newUserData.pop();
        setUsers(newUserData);
    }


    return (
        <div>
            <button onClick={() => handleOnChange('shift')}>SHIFT USER</button>
            <button onClick={() => handleOnChange('pop')}>POP USER</button>
            {
                users.map(value => (<User key={value.id} item={value}/>))

            }
        </div>
    );
}
