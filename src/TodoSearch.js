import "../src/TodoSearch.css";
import React from 'react';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    console.log('Users search todo of ' 
    + searchValue);
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };



function TodoClick() {
    let [ state, setState] = React.useState(0);
    return (
        <>
        <p>Diste click {Sstate} veces</p>
        <buttom
            onClick ={() => {
                setState(state++)
            }}
            >Click</buttom>
        </>
    );
}



////


