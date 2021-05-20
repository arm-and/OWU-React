import {useState} from "react";
import "./post-stylesheet.css";
import {Link} from "react-router-dom";

export default function Post({item, url}) {

    const [showText, setShowText] = useState(false);

    return (
        <div className={'post-style'}>
            {item.id}-{item.title}
            <button onClick={() => setShowText(!showText)}>Info</button>
            {showText && <div>
                <hr/>
                {item.body}
                <Link to={url + '/' + item.id}>Post {item.id}</Link>
            </div>}
        </div>
    );
}
