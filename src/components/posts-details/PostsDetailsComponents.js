import {MyContext} from "../../App";

export default function PostsDetailsComponents({postId}) {

    return (
        <div>
            <div>
                Post Details {postId}
            </div>
            <div>
                <MyContext.Consumer>
                    {
                        value => {
                            console.log(value)
                        }
                    }
                </MyContext.Consumer>
            </div>
        </div>
    );
}
