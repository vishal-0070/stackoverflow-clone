export const currentUser=(data)=>{
    return {
        type: 'FETCH_USER',
        payload : data,
    }
}