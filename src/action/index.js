

export const championFetching = () => {
    return{
        type: 'CHAMPIONS_FETCHING'
    }
}

export const championsFetched = (champion) => {
    return{
        type: 'CHAMPIONS_FETCHED',
        payload: champion
    }
}



export const changeStatusFilter = (status) => {
    return{
        type: 'CHANGE_FILTER_STATUS',
        payload: status
    }

}

