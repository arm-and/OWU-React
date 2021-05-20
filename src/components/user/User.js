import {useState} from "react";
import "./user-stylesheet.css"
import {Link} from "react-router-dom";

export default function User({item, url}) {

    const [showText, setShowText] = useState(false);

    return (
        <div className={'user-style'}>
            {item.id}-{item.name}
            <button onClick={() => setShowText(!showText)}>User contact</button>
            {showText && <div>
                <hr/>
                Email:{item.email} <br/>Phone:{item.phone}
                <hr/>
                <Link to={url + '/' + item.id}>User {item.id}</Link>
            </div>}
        </div>
    );
}
