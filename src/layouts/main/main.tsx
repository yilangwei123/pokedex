import React, { FormEvent, useEffect, useState } from 'react';
import { AppState } from '../../redux/rootReducer';
import { connect, useSelector } from 'react-redux';
import styles from './main.module.scss';
import { IPokemonBrief } from '../../redux/allPokemon/allPokemonReducer';

const Main = () => {
  const storeData = useSelector(mapStateToProps);
  const [allPokemon, setAllPokemon] = useState<IPokemonBrief[]>([]);
  const [matchListSample, setMatchListSample] = useState<IPokemonBrief[]>([]);
  const [showDataList, setShowDatalist] = useState(false);
  useEffect(() => {
    const { allPokemon } = storeData.allPokemon;
    setAllPokemon(allPokemon);
  }, [storeData]);

  const handleSearchInput = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value === null || e.currentTarget.value === '') {
      setShowDatalist(false);
    } else {
      let matchList: IPokemonBrief[] = allPokemon
        .filter((a) => a.name.includes(e.currentTarget.value))
        .filter((_, i) => {
          return i < 15;
        });
      if (
        matchList.length === 1 &&
        matchList[0].name === e.currentTarget.value
      ) {
        matchList = [];
      }
      setMatchListSample(matchList);
      setShowDatalist(true);
    }
  };
  return (
    <div className={`${styles.containerBorder} container`}>
      <label style={{ fontSize: '1.5rem' }}>
        Please enter the name or id to search a pokemon:
      </label>
      <input
        type="text"
        className="form-control"
        style={{width: '250px'}}
        list="browsers"
        name="myBrowser"
        onChange={(e) => {
          handleSearchInput(e);
        }}
      />
      {showDataList && (
        <datalist id="browsers" style={{ maxHeight: '200px' }}>
          {matchListSample.map((item, index) => (
            <option value={item.name} key={'dataListOption' + index} />
          ))}
        </datalist>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  allPokemon: state.allPokemonReducer,
});

export default connect(mapStateToProps, null)(Main);
