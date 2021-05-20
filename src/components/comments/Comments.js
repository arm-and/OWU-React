import {useEffect, useReducer, useState} from "react";
import {getComments} from "../../services/api.service";

// useReducer - це такий собі редакс на мінімалках,який ми можемо юзати з бібліотеки реакту,
//можна так сказати це хук.Ним можна замінити і обєднати декілька useState,якщо їх багато в одну функцію reducer,
//яка робитиме все те ж,через важель керування dispatch. (якщо є можливість підправити буду вдячний:))

function reducer(state, action) {

    switch (action.type) {
        case 'ADD_COMMENTS':
            return {...state, comments: action.payload};
        case 'ADD_COMMENT':
            return {...state, singleComment: action.payload};
    }
}

export default function Comments() {

    const [state, dispatch] = useReducer(reducer, {comments: [], singleComment: null});
    const {comments, singleComment} = state;

    // const [comments, setComments] = useState([]);
    // const [singleComment, setSingleComment] = useState(null);

    useEffect(() => {

        getComments().then(value => {
            // setComments([...value.data])
            dispatch({type: "ADD_COMMENTS", payload: [...value.data]});
        })
    }, []);

    const commentsDetails = (id) => {

        let sc = comments.find(value => value.id == id);
        // setSingleComment(sc);
        dispatch({type: "ADD_COMMENT", payload: sc});
    };

    return (
        <div>
            <div className={'single-comment'}>
                {
                    singleComment && JSON.stringify(singleComment)
                }
            </div>
            <div className={'all-comments'}>
                {
                    comments.map(value => <li>
                            {value.id} - {value.name}
                            <button onClick={() => commentsDetails(value.id)}>details</button>
                        </li>
                    )
                }
            </div>
        </div>
    );
}
