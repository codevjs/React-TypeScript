import React from 'react';
import Spinner from "../../components/spin";

const Profile: React.FC = () => {

    return (
        <Spinner spinning={true} tip={'loading...'} />
    )
};

export default Profile;
