import React from 'react';
import { NavLink } from 'react-router-dom';

const Profiles = (props) => {

    return (
        <div>
            <NavLink to={{
                pathname: `${props.match.url}/posts`
            }}>Take me to profile/posts</NavLink>
        </div>
    );
}

export default Profiles;