// import Circle from 'react-circle';
// import { useEffect, useState } from "react";
// import { useEffect, useReducer } from "react";
// import axios from 'axios';
// import { skillReducer, initialState, actionTypes } from '../reducers/skillReducer';
import { requestStates } from "../constants";
import { useSkills } from '../customHooks/useSkills';

const _url = 'https://api.github.com/users/yutowac/repos'

export const Skills = () => {
    const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();
    // const [state, dispatch] = useReducer(skillReducer, initialState);
    // useEffect(() => { 
    //     dispatch({ type: actionTypes.fetch });
    //     axios.get(_url)
    //         .then((response) => {
    //             const languageList = response.data.map(res => res.language)
    //             const countedLanguageList = generatedLanguageCountObj(languageList)
    //             console.log(countedLanguageList);
    //             dispatch({ type: actionTypes.success, payload: { languageList:countedLanguageList} });
    //         })
    //         .catch(() => {
    //             dispatch({type: actionTypes.error});
    //         });
    // },[]);

    // const generatedLanguageCountObj = (allLanguageList) =>{
    //     const notNullLanguageList = allLanguageList.filter(language => language != null);
    //     const uniqueLanguageList = [...new Set(notNullLanguageList)];
    //     return uniqueLanguageList.map(item => {
    //         return {
    //             language: item,
    //             count: allLanguageList.filter(language => language===item).length
    //         }
    //     });
    // };

    // const converseCountToPercentage = (count) => {
    //     if (count > 10) {return 100;}
    //     return count * 10
    // };
    // console.log(state.requestState)
    
    // const sortedLanguageList = () => (
    //     state.languageList.sort((firstLang, nextLang) => nextLang.count - firstLang.count)
    // )

    return (
        <div id='skills'>
            <div className = 'container'>
                <div className="heading">
                    <h2>Skills</h2>
                </div>
                <div className="skills-container">
                    {
                        fetchRequestState === requestStates.loading && (
                        // state.requestState === requestStates.loading && (
                            <p className="description">取得中</p>
                        )
                    }
                    {
                        fetchRequestState === requestStates.success && (
                        // state.requestState === requestStates.success && (
                            sortedLanguageList().map((item, index)=> (
                                <div className="skill-item" key={index}>
                                    <p className="description"><strong>{item.language}</strong></p>
                                    {/* <Circle
                                        animate
                                        progress={converseCountToPercentage(item.count)}
                                    /> */}
                                    <div className="circlepretend">{converseCountToPercentage(item.count)}</div>
                                </div>
                            ))
                        )
                    }
                    {
                        fetchRequestState === requestStates.error && (
                        // state.requestState === requestStates.error && (
                            <p className="description">エラーが発生しました</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
