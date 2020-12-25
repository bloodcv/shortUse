import {combineReducers} from 'redux'
import HomeReducer from '../pages/home/store/reducer';

const reducer=combineReducers({
    Home:HomeReducer
})

export default reducer