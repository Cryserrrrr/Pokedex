/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Pokedex from 'components/Pokedex'
import styled from 'styled-components';

const key = 'home';

const App = styled.div`
  outline: 0;
  font-family: 'Press Start 2P', cursive;
  &::-webkit-scrollbar {
    background: rgba(186,182,179,255)
  }
`
const Input = styled.input`
  width: 30%;
  border-radius: 20px;
  height: 35px;
  margin-top: 10px;
  text-align: center;
  box-shadow: 0px 5px 5px black;
  border-color: black;
  background-color: rgba(186,182,179,255);
  font-size: 10px;
  position: relative;
`

const Button = styled.button`
  background-color: rgba(170,33,105,255);
  border-radius: 50%;
  height: 90px;
  width: 90px;
  margin-top: 252px;
  margin-left: 1172px;
  border-color: rgba(170,33,105,255);
`

const ButtonD = styled.button`
background-color: rgba(170,33,105,255);
border-radius: 50%;
position: absolute;
height: 90px;
width: 90px;
margin-top: 307px;
margin-left: 1055px;
border-color: rgba(170,33,105,255);
`

export function HomePage({

  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  const [pokemon, setPokemon] = useState("")
  const [value, setValue] = useState(1)

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const reposListProps = {
    loading,
    error,
    repos, 
  };

  return (
    <div>
      <App>
      <form>
        <label>
          <center>
            <Input
              type="text"
              value={pokemon}
              onChange={handleChange}
              placeholder="Entrez le nom d'un pokemon en anglais"
            />
          </center>
        </label>
      </form>
      <div>
        <Pokedex searchText={pokemon} click={value}/>
      </div>
      <div>
        <ButtonD onClick={() => setValue(value - 1)} />
        <Button onClick={() => setValue(value + 1)} />
      </div>
      </App>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
