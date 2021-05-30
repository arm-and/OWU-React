import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { onAddToBad, onRemoveFromBad, onUsersLoaded } from "../redux/action-creators";
import userServices from "../services/user.service";

const PhotosList = () => {

    const dispatch = useDispatch();

    const users = useSelector(({userReducer: {users}}) => users);
    const badEmployees = useSelector(({userReducer: {badEmployees}}) => badEmployees);

    const fetchPhotos = async () => {
        const resp = await userServices.getUsersPhotos();
        const json = await resp.json();

        dispatch(onUsersLoaded(json.data));
    }

    useEffect(() => {
        if (!users.length) {
            fetchPhotos();
        }
    }, []);

    return (
        <div>
            {
                users.map(value => (
                        <img
                            style={{
                                filter: badEmployees.includes(value.id) ? 'grayscale(1)' : ''
                            }}
                            onClick={() => {
                                const alreadyInList = badEmployees.includes(value.id);

                                const answer = !alreadyInList && window.confirm('Are you sure?');

                                if (answer) {
                                    return dispatch(onAddToBad(value.id))
                                }
                                alreadyInList && dispatch(onRemoveFromBad(value.id))
                            }}
                            key={value.id}
                            src={value.picture}
                            alt={value.title}
                        />
                    )
                )
            }
        </div>
    );
};

export default PhotosList;
