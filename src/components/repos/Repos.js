import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map( repo => <RepoItem key={repo.id} repo={repo} />)
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos
