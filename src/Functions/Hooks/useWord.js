import {useContext} from 'react';
import { WordContext } from '../../Context/WordContext';
import { useQuery } from './useQuery';

const useWord = () => {
    const [state, setState] = useContext(WordContext);
    const queryData = useQuery();

    function checkIfMatchesWord(array){
        const thereWord = array.join('');

        console.log(queryData.word.toLowerCase() === thereWord.toLowerCase())

        if(typeof queryData.word === "undefined"){
            return false
        }
        else if(queryData.word.toLowerCase() === thereWord.toLowerCase()){
            return true
        }
        else{
            return false
        }
    }


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
            word: currentWord,
            matchesWord: checkIfMatchesWord(currentWord)
        }));
    }



    return {
        addLetterToWord,
        removeLetterByIndex,
        word: state.word,
        matchesWord: state.matchesWord,
    }
};

export default useWord
