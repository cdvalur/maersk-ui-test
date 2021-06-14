import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import cloneDeep from "lodash/cloneDeep";
import Pagination from "rc-pagination";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../../reducers/universityReducer';
import './styles.css'
import "rc-pagination/assets/index.css";


const tableHead = {
  name: "University Name",
  'state-province': "State",
};

const Table = ({ universities = [] }) => {
  const countPerPage = 10;
  const universityState = useSelector((state) => state.universities);
  const dispatch = useDispatch();
  const currentPage = universityState.currentPage;
  const [collection, setCollection] = React.useState(
    cloneDeep(universities.slice(0, countPerPage))
  );
 useEffect(() => {
     updatePage(currentPage)
 }, [universities])
  const updatePage = p => {
    dispatch(setCurrentPage(p));
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(universities.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return keyD === 'name' ?  <td key={i}><Link to={`/university/${key[keyD]}`}>{key[keyD]}</Link></td> : <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    if(!collection.length){
      return <tr className="loading"><td>Loading.....</td></tr>
    }
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <>
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={universities.length}
      />
    </>
  );
};
export default Table;
