import React, { useEffect} from 'react';
import { getAllPokemon } from './redux/allPokemon/allPokemonActions';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Main from './layouts/main/main';

const App =({getAllPokemon}: ReturnType<typeof mapDispatchToProps>)  => {
  useEffect(() => {
    getAllPokemon();
  }, [getAllPokemon])

  return (
      <Main/>

  );
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
      {
        getAllPokemon,
      },
      dispatch
  );
};

export default connect(null, mapDispatchToProps)(App);
