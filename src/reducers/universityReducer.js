import  { createSlice } from '@reduxjs/toolkit';

const universitySlice = createSlice({
    name: 'universities',
    initialState: {
      loading: 'idle',
      universities: [],
      currentPage: 1,
      selectedUniversity: []
    },
    reducers: {
        universitiesLoading(state, action) {
            if (state.loading === 'idle') {
            state.loading = 'pending'
            }
        },
         universitiesReceived(state, action) {
            if (state.loading === 'pending') {
            state.loading = 'idle'
            state.universities = action.payload
            }
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload;
        },
        unversitySelected(state, action){
            state.selectedUniversity = action.payload
        }
    },
  })
  
 const { reducer, actions } = universitySlice;
  export const { universitiesLoading, universitiesReceived, setCurrentPage, unversitySelected } = actions;
  export default reducer;

  
 