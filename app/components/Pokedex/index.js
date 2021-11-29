import React, { useEffect, memo } from "react";
import { createStructuredSelector } from 'reselect';
import { makeSelectPokename } from './selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { searchPokename } from './actions';
import Typist from 'react-typist'
import { makeSelectPokecard } from "./PokeSelectors";
import { SearchPokecard } from './PokeActions';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Img = styled.img`
  width: 150px;
  padding-top: 10px;
  filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);

  @media(max-width: 1800px) {     
    width: 150px;
    padding-top: 10px;
  }

  @media(max-width: 1520px) { 
    width: 150px;
    padding-top: 10px;
  }

  @media(max-width: 1280px) { 
    width: 150px;
    padding-top: 10px;
  }

  @media(max-width: 1050px) {
  width: 150px;
  padding-top: 10px;
  }

`

const Imgi = styled.img`
width: 180px;
padding-top: 0px;
filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
`

const Table = styled.div`
  font-size: 20px;

  @media screen and (max-width: 1800px) {     
    padding-top: 0px;
    font-size: 10px;
  }

  @media screen and (max-width: 1520px) { 
    padding-top: 0px;
    font-size: 10px;
  }

  @media screen and (max-width: 1280px) { 
    padding-top: 0px;
    font-size: 10px;
  }

  @media screen and (max-width: 1050px) {
    padding-top: 0px;
  }
`

const Tablei = styled.div`
  font-size: 15px;

  @media screen and (max-width: 1800px) {     
    padding-top: 0px;
    font-size: 10px;
  }
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 750px 0px 780px;

  @media screen and (max-width: 1800px)
{
  padding: 10px 650px 0px 670px
}

@media screen and (max-width: 1520px)
{
  padding: 10px 530px 0px 550px
}

@media screen and (max-width: 1280px)
{
  padding: 10px 400px 0px 420px
}

@media screen and (max-width: 1050px)
{
  padding: 10px 300px 0px 320px
}
@media screen and (max-width: 820px)
{
  padding: 10px 200px 0px 200px
}

@media screen and (max-width: 600px)
{
  padding: 10px 50px 0px 90px
}

@media screen and (max-width: 300px)
{
  padding: 10px 0px 0px 0px
}
`

const TableRowi = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 750px 0px 750px;

  @media screen and (max-width: 1800px)
  {
    padding: 10px 650px 0px 670px
  }
  
  @media screen and (max-width: 1520px)
  {
    padding: 10px 530px 0px 550px
  }
  
  @media screen and (max-width: 1280px)
  {
    padding: 10px 400px 0px 420px
  }
  
  @media screen and (max-width: 1050px)
  {
    padding: 10px 300px 0px 320px
  }
  @media screen and (max-width: 820px)
  {
    padding: 10px 200px 0px 200px
  }
  
  @media screen and (max-width: 600px)
  {
    padding: 10px 50px 0px 90px
  }
  
  @media screen and (max-width: 300px)
  {
    padding: 10px 0px 0px 0px
  }
`

const Pokedex = (props) => {

  useEffect(() => {
    props.onSearchPokecard(props.click)
    console.log('click', props.click)

  },[props.click])

  useEffect(() => {
    console.log('useffect pokecard', props.pokecard)
  }, [props.pokecard])

  useEffect(() => {
    props.onSearchPokename(props.searchText);
  },[props.searchText]);

  useEffect(() => {
    console.log("useffect pokename",props.pokename)
  },[props.pokename]);


  return(
    props.pokename ?
    <center>
        <div>
          {props.pokename.map((data) => {
            return(
            <div>
              <div>
              <Img alt="Pokemon" src={data.sprites["front_default"]} />
              </div>
              <Typist>
                <Table>
                  <div>
                    <div>
                      <TableRow>
                        <div>Type :</div>
                        <div>{data.types[0].type.name}</div>  
                      </TableRow>
                    </div>
                    <div>
                      <TableRow>
                        <div>Taille :</div>
                        <div>{data.height.toString()}m</div>  
                      </TableRow>
                    </div>
                    <div>
                      <TableRow>
                        <div>Poids :</div>
                        <div>{data.weight.toString()}kg</div>  
                      </TableRow>
                    </div>
                    <div>
                      <TableRow>
                        <div>Nombre de combat :</div>
                        <div>{data.game_indices.length.toString()}</div>  
                      </TableRow>
                    </div>
                  </div>
                </Table>
              </Typist>
            </div>
            );
          })}
        </div>
    </center>
    :
    <div>
      {props.pokecard && props.pokecard.map((data) =>
      <center>
        <div>
        <Imgi className="imgi" alt="Pokemoni" src={data.sprites["front_default"]} />
        </div>
          <Tablei>
            <div>
              <div>
                <TableRowi>
                  <div className="divTableCelli">Nom :</div>
                  <div className="divTablechildi">{data.name}</div>  
                </TableRowi>
              </div>
              <div>
                <TableRowi>
                  <div className="divTableCelli">Type :</div>
                  <div className="divTablechildi">{data.types[0].type.name}</div>  
                </TableRowi>
              </div>
              <div>
                <TableRowi>
                  <div className="divTableCelli">Taille :</div>
                  <div className="divTablechildi">{data.height.toString()}m</div>  
                </TableRowi>
              </div>
              <div>
                <TableRowi>
                  <div className="divTableCelli">Poids :</div>
                  <div className="divTablechildi">{data.weight.toString()}kg</div>  
                </TableRowi>
              </div>
              <div>
                <TableRowi>
                  <div className="divTableCelli">Nombre de combat :</div>
                  <div className="divTablechildi">{data.game_indices.length.toString()}</div>  
                </TableRowi>
              </div>
            </div>
          </Tablei>
      </center>
      )}
    </div>
  )
  
};


Pokedex.propTypes = {
  pokename: PropTypes.array,
  pokecard: PropTypes.array,
  onSearchPokecard: PropTypes.func,
  onSearchPokename: PropTypes.func,
  searchText: PropTypes.string
}


const mapStateToProps = createStructuredSelector({
  pokename: makeSelectPokename(),
  pokecard: makeSelectPokecard(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSearchPokename: toto => {
      console.log("onSearch", toto);
       searchPokename(toto, dispatch);
    },
    onSearchPokecard: e => {
      console.log('e', e)
      SearchPokecard(e, dispatch)
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Pokedex);

