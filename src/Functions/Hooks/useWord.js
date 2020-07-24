import {useContext} from 'react';
import { WordContext } from '../../Context/WordContext';

const useWord = () => {
    const [state, setState] = useContext(WordContext);

    function addLetterToWord(letter){

        let currentWord = [...state.word]

        currentWord.push(letter)

        setState(state => ({
            ...state,
            word: currentWord
        }));
    }



    return {
        addLetterToWord,
        word: state.word
    }
};

export default useWord
