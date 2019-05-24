import jsonPlaceholder from '../apis';
import _ from "lodash";
export const featchPost = () => async dispatch => {
        const promise = await jsonPlaceholder.get('/posts');
        dispatch( {
            type: 'FETCH_POSTS',
            payload: promise.data
        });
    };

// export const fetachUser = (id) => async dispatch => {
//     _fetchUser(id, dispatch);
// }   

// const _fetchUser = _.memoize((id, dispatch)=> {
//     const promise = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: promise.data });
// })

export const fetachUser = (id) => dispatch =>  _.memoize(async(id, dispatch)=> {
    const promise = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: promise.data });
});
