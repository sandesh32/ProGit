import React, {useState} from 'react';
import axios from 'axios';
import {Showdet} from './showdet';

export const Finddet = () => {
    const [findInput, setFindInput] = useState('');
    const [repos, setRepos] = useState([]);

    const goChange=(e)=>{
        setFindInput(e.target.value);
    }
    const goClick=async()=>{
        console.log(findInput);
        try{
        const details =await axios(`https://api.github.com/users/${findInput}/repos`);
        setRepos(details);
        }
        catch(e){
            console.log("error occurred");
        }
    };
    return (
        <>
        <div className="search">
            <input type="text" placeholder="Type the Username Here!" value={findInput} onChange={goChange} />
            <br />
            <button onClick={goClick}>Search</button>
        </div>
        <div className="result">
        <Showdet repos={repos} naming={findInput}/>
        </div>
        </>
    )
}
