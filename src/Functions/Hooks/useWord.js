import {useContext} from 'react';
import { WordContext } from '../../Context/WordContext';

const useWord = () => {
    const [state, setState] = useContext(WordContext);

    function removeLetterByIndex(index){
        let currentWord = [...state.word]

        currentWord.splice(index, 1);

        setState(state => ({
            ...state,
            word: currentWord
        }));
    }

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
        removeLetterByIndex,
        word: state.word
    }
};

export default useWord
