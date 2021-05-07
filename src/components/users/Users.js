import User from "../user/User";
import usersData from "../data/UsersData"
import {useState} from "react";

export default function Users() {
    // let [users, setUsers] = useState([...usersData]);       // TODO оголошуй через const як в рядку нижче, це дозволить запобігати прямій зміні стану
    const [users, setUsers] = useState([...usersData]);


    // const popUser = () => {
    //     users.pop();
    //     setUsers([...users])
    // }
    const handleOnChange = (item) => {
        // if (item !== 'shift' && item !== 'pop') return;     // TODO цей рядок без потреби тому що ти не маєш якогось іншого варіанту крім 'shift' та 'pop'
        const newUserData = [...users];
        item === 'shift'
            ? newUserData.shift()
            : newUserData.pop();
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
