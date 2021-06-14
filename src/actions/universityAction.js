import { universitiesLoading, universitiesReceived, unversitySelected } from '../reducers/universityReducer';

const API_URL = 'http://universities.hipolabs.com/search?country=india';

const fetchUniversities = () => async (dispatch) => {
    dispatch(universitiesLoading())
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(universitiesReceived(data))
}
const fetchUniversityByName = (name) => async (dispatch) => {
    dispatch(universitiesLoading())
    const response = await fetch(`${API_URL}&name=${name}`);
    const data = await response.json();
    dispatch(unversitySelected(data))
}

export  {
    fetchUniversities,
    fetchUniversityByName
}
