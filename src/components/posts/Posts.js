import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
            });
    }, []);

    return (<div className={'main-posts'}>
            <div className={'post'}>
                {
                    posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
        </div>

    )
}
