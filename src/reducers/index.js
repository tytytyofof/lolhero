const initialState = {
    champions: [],
    loadingStatus: false,
    filterStatus: 'all',

}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case 'CHAMPIONS_FETCHING':
            return{
                ...state,
                loadingStatus: true
            }
        case 'CHAMPIONS_FETCHED':
            return {
                ...state,
                champions: action.payload,
                loadingStatus: false
            }
        case 'CHANGE_FILTER_STATUS':
            return {
                ...state,
                filterStatus: action.payload
            }

        default: return state
    }
}


export default reducer;