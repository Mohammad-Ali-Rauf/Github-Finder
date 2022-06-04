import React, { Fragment, useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

// Import Components
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = () => {

    const githubContext = useContext(GithubContext);

    const { getUser, getRepos, repos, user } = githubContext;

    let { loginParam } = useParams();

    useEffect(() => {
        getUser(loginParam);
        getRepos(loginParam);
        // eslint-disable-next-line
    }, [])

    const { name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable  } = user;

    return (
        <Fragment>
            <NavLink to='/' className='btn btn-light'>Back to Home</NavLink>
            Hireable: {hireable ? <i className="fas fa-check-circle text-success"></i> : <i className="fas fa-times-circle text-danger"></i> }
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="Profile" style={{ width: '150px' }} />
                    <h2>{name}</h2>
                    {location && (
                        <Fragment>
                            <h5>Location: {location}</h5>
                        </Fragment>
                    )}
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className='btn btn-dark my-1' target="_blank" rel="noreferrer">Github Profile</a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    Username: {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    Company: {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    Website: {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <div className="card text-center">
                <h2 className='text-primary'>Latest Repositories</h2>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}

export default User
