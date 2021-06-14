import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUniversities } from '../../actions/universityAction';
import Table from '../UniversityTableComponent';
import './styles.css';

const UniversityList  = () => {
    const universities = useSelector((state) => state.universities);
    const universityList = universities.universities;
    const dispatch = useDispatch();
    useEffect(() => {
        if(!universityList.length){
            dispatch(fetchUniversities());
        }
    }, [])
    return (
        <div className="container">
            <h3 className="heading">Universities</h3>
            <div className="university-table-container">
                <Table universities={ universityList }/>
            </div>
        </div>
    )
}

export default UniversityList;
