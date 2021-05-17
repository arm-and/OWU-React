import {useEffect, useState} from "react";
import {getUsers, getUser} from "../../services/api.service";
import User from "../user/User";

export default function Users({match: {url}}) {
    console.log(url)
    const [users, setUsers] = useState([]);


    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, []);


    return (
        <div>
            <div>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        url={url}
                    />)
                }
            </div>
        </div>
    );
}
