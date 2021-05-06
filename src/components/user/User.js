import UserAddress from "./UserAddress";

export default function User({item}) {
    return (
        <div>
            <div>
                <h3>
                    {item.id}
                    <br/>
                    {item.name}
                    <br/>
                    {item.email}
                </h3>
            </div>
            <div>
                <UserAddress item={item}/>
            </div>
        </div>
    );
}
