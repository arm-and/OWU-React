import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "../user/User";

export default function Users({match: {url}}) {

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
