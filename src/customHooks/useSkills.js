import { useEffect, useReducer } from "react";
import axios from "axios";

import { skillReducer, initialState, actionTypes } from '../reducers/skillReducer';

const _url = 'https://api.github.com/users/yutowac/repos'

export const useSkills = () => {
    const [state, dispatch] = useReducer(skillReducer, initialState);
    useEffect(() => { 
        dispatch({ type: actionTypes.fetch });
        axios.get(_url)
            .then((response) => {
                const languageList = response.data.map(res => res.language)
                const countedLanguageList = generatedLanguageCountObj(languageList)
                console.log(countedLanguageList);
                dispatch({ type: actionTypes.success, payload: { languageList:countedLanguageList} });
            })
            .catch(() => {
                dispatch({type: actionTypes.error});
            });
    },[]);

    const generatedLanguageCountObj = (allLanguageList) =>{
        const notNullLanguageList = allLanguageList.filter(language => language != null);
        // ...は配列やオブジェクトを展開して使える
        const uniqueLanguageList = [...new Set(notNullLanguageList)];
        return uniqueLanguageList.map(item => {
            return {
                language: item,
                count: allLanguageList.filter(language => language===item).length
            }
        });
    };

    const converseCountToPercentage = (count) => {
        if (count > 10) {return 100;}
        return count * 10
    };
    console.log(state.requestState)
    
    const sortedLanguageList = () => (
        state.languageList.sort((firstLang, nextLang) => nextLang.count - firstLang.count)
    )
    return [sortedLanguageList, state.requestState, converseCountToPercentage];
}
