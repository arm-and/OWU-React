import "./single-post.css"
export default function Post({item}) {
    return (
        <div className={'single-post'}>
            {item.id}-
            {item.title}
            {item.body}
        </div>
    )
}
