import React, {useState} from 'react';

const WordContext = React.createContext([{},()=>{}]);

const WordProvider = (props) => {
  const [state, setState] = useState({
      word: []
  });
  return (
      <WordContext.Provider value={[state, setState]}>
          {props.children}
      </WordContext.Provider>
  )
};

export {WordContext, WordProvider}