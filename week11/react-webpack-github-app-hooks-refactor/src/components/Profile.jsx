import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Profile.css';

const BASE_URL = 'https://api.github.com/users';
const AUTH_TOKENS = '?client_id=4ec1b8f9c149f7c46ffd&client_secret=a05ec287c29ebd9633131b5a08298530709130e9';

const Profile = props => {

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const loadGitHubData = () =>  {
    const { user } = props.match.params;

    axios.get(`${ BASE_URL }/${ user }${ AUTH_TOKENS }`)
      .then(res => {
        console.log(res);
        setUser(res.data);
      })
      .catch(err => console.warn('Error loading user info:', err));

      axios.get(`${BASE_URL}/${user}/repos${AUTH_TOKENS}`)
        .then( res => setRepos(res.data))
        .catch( err => console.warn(err));
  } // loadGitHubData()

  useEffect( loadGitHubData, []);

  useEffect( loadGitHubData, [props.match.params.user]);

  return (
    <div>
      <h1>Profile for {props.match.params.user}</h1>

      <UserInfo user={ user } />
      <UserRepos repos={ repos } />

    </div>
  );
};

const UserRepos = props => {

  let reposList;

  if ( props.repos === null ) {
    reposList = <div>Loading...</div>;
  } else {
    reposList = props.repos.map( repo => (
      <li key={repo.id}>
        <a href={ repo.html_url } target="_blank">{ repo.name }</a>
      </li>
    ));
  }

  return (
    <div className="reposInfo">
      <ul>
        { reposList }
      </ul>
    </div>
  );

}; // UserRepos()

const UserInfo = (props) => {

  let infoContent;

  if ( props.user === null ) {
    infoContent = <div>Loading...</div>;
  } else {

    const { avatar_url, followers, following, public_repos, public_gists, html_url, login } = props.user;

    infoContent = (
      <div>
        <img src={ avatar_url }  alt= { login }/>
        <p>Followers: { followers }</p>
        <p>Following: { following }</p>
        <p>Repos: { public_repos }</p>
        <p>Gists: { public_gists }</p>
        <p>
          <a href={ html_url } target="_blank">View on GitHub</a>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3>Stats</h3>
      { infoContent }
    </div>
  );

}; // UserInfo()

export default Profile;
