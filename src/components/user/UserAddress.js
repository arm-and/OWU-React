export default function UserAddress({item}){
    return(
        <div>
            <h3>
                <h5>Address:</h5>
                <hr/>
                City: {item.address.city}
                <hr/>
                Street: {item.address.street}
                <hr/>
            </h3>
        </div>
    );
}
