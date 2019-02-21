import React from 'react';
import { NavLink } from 'react-router-dom';

import Card from '../hoc/card'
import Auth from '../hoc/auth'

const Profiles = (props) => {

    return (
        <Auth>
            <Card>
                <NavLink to={{
                    pathname: `${props.match.url}/posts`
                }}>Take me to profile/posts</NavLink>
            </Card>
        </Auth>
    );
}

export default Profiles;