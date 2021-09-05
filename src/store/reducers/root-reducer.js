import { combineReducers } from 'redux';
import { conversationHistory } from './conversationHistory';
import { StoreNameSpace } from '../../assets/js/const';

export default combineReducers({
  [StoreNameSpace.CONVERSATION_HISTORY]: conversationHistory,
});
