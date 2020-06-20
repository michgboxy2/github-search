import React from 'react';


const Profile = ({profileInfo}) => {
    const {avatar_url, login, name, email, location, following, followers, public_repos, bio, company} = profileInfo;
    return (
        <div className="user-profile-details">
        <div className="user-img">
            <img src={avatar_url} alt="user-avatar"/>
        </div> 
        <div className="follow-user">
            <h4>{login}</h4>
            <p>{name}</p>
            <button type="button">Follow</button>
            <h5>Block or report user</h5>
            <div className="user-icons">
                <i className="fal fa-location"><span>{location}</span></i>
                <i className="fas fa-building"><span>{company}</span></i>
                <i className="far fa-envelope"><span>{email}</span></i>
                <i className="far fa-user"><span>{bio}</span></i>
            </div>
            <div className="activities">
            <ul>
               <li>Overview </li>
               <li>Repositories <span>{public_repos}</span></li>
               <li>Followers <span>{followers}</span></li>
               <li>Following <span>{following}</span></li>
           </ul>
            </div>
        </div>              
    </div>
    )
}

export default Profile;