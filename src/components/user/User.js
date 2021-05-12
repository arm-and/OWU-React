import "./single-user.css"
export default function User({item, buttonFunction}) {
    return (
        <div className={'single-user'}>
            {item.id}
            <br/>
            {item.name}
            <br/>
            {item.email}
            <button onClick={() => buttonFunction(item.id)}>info</button>
        </div>
    )
}
