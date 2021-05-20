import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service";
import Post from "../post/Post";

export default function Posts({match: {url}}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, []);

    return (
        <div>
            <div>
                {
                    posts.map(value => <Post
                        key={value.id}
                        item={value}
                        url={url}
                    />)
                }
            </div>
        </div>
    );
}
