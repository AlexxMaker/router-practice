import React from 'react';
import { NavLink } from 'react-router-dom';

const Profiles = (props) => {
    const redir =  () => {
       props.history.push('/') 
    }

    return (
        <div>
            <NavLink to={{
                pathname: `${props.match.url}/posts`
            }}>Take me to profile/posts</NavLink>

            {redir()}
        </div>
    );
}

export default Profiles;