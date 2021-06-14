import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUniversityByName } from '../../actions/universityAction';
import Card from './Card';
import './styles.css';

const UniversityDetailsComponent = () => {
    const { name } = useParams();
    const universityState = useSelector((state) => state.universities);
    const universityList = universityState.universities
    let selectedUniversity = universityList.filter(university => university.name === name);
    const dispatch = useDispatch();
    useEffect(() => {
        if(!selectedUniversity.length){
            dispatch(fetchUniversityByName(name));
        }
    }, [name])
    if(!selectedUniversity.length){
     selectedUniversity = universityState.selectedUniversity;
    }
    if(!selectedUniversity.length){
        return(<div className="loading">Loading.....</div>)
    }
    return(
        <div>
            <div  className="back"><Link to="/university"><div className="long-arrow-left"></div> Back</Link></div>
            <Card {...selectedUniversity[0]}/>
        </div>
    )
};

export default UniversityDetailsComponent;
