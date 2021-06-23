import React, { useEffect } from 'react';
import { FetchTeacherReports } from "../../services"
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selector } from '../../redux/reducers/profileReducer';
import config from '../../config';

const Teacher = ({ profile }) => {


    useEffect(() => {
        console.log("TEACHER: Making an API Call with the new token", new Date());
        FetchTeacherReports()
    }, [])


    // const profile = JSON.parse(getFromLocalStorageAsJSON(TOKEN_PROFILE_LOCAL_STORAGE))
    if (profile.role !== config.ROLES.TEACHER) {
        return <Redirect to="/not-authorized" />
    }
    else
        return (
            <>
                <h4>Welcome to Teacher Portal</h4>
                <pre>{JSON.stringify(profile, null, 4)}</pre>
            </>
        )
}

const mapStateToProps = (state) => ({
    profile: selector.fetchProfile(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Teacher)


