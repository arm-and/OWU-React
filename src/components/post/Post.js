import {useEffect, useState} from "react";
import "./post-stylesheet.css"
export default function Post({item}) {
    const [showText, setShowText] = useState(false);
    return (
        <div className={'post-style'}>
            {item.id}-{item.title}
            <button onClick={() => setShowText(!showText)}>Info</button>
            {showText && <div><hr/>{item.body}</div>}
        </div>
    );
}
