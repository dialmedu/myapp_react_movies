import React from 'react';
import FancyBorder from '../components/FancyBorder';


const GlobalContext = React.createContext();

//Este esel provider que nos permitira acceder al contexto global
const GlobalProvider = props => {
  const [data, setData] = React.useState("data");

  const setDataFunction = (data) => {
    setData(data);
  }

  return (
    <GlobalContext.Provider value={{data, setDataFunction}}>
      {props.children}
    </GlobalContext.Provider>
  );
}

//Este es un ejemplo de como podemos utilizar el contexto global
function WelcomeDialog() {
  const {data} = React.useContext(GlobalContext);
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft! {data}
      </p>
    </FancyBorder>
  );
}

export {GlobalProvider, WelcomeDialog };
