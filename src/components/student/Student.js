import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { FetchStudentReports } from "../../services"
import { getFromLocalStorageAsJSON, TOKEN_PROFILE_LOCAL_STORAGE } from '../../utils';
import { connect } from 'react-redux';
import { selector } from '../../redux/reducers/profileReducer';
import CONFIG from '../../config';



const Student = ({ profile }) => {

    useEffect(() => {
        console.log("STUDENT: Making an API Call with the new token", new Date());
        FetchStudentReports()
    }, [])

    // const profile = JSON.parse(getFromLocalStorageAsJSON(TOKEN_PROFILE_LOCAL_STORAGE))
    if (profile.role !== CONFIG.ROLES.STUDENT) {
        return <Redirect to="/not-authorized" />
    }
    return (
        <>
            <h4>Welcome to Student Portal</h4>
            <pre>{JSON.stringify(profile, null, 4)}</pre>
        </>
    )
}





const mapStateToProps = (state) => ({
    profile: selector.fetchProfile(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Student)

