import { createReducer } from '@reduxjs/toolkit';
import {
  saveConversation,
  clearConversationHistory
} from '../actions/conversationHistory';

import { HISTORY_LENGTH } from '../../assets/js/const';

const initialState = {
  items: [],
};

const conversationHistory = createReducer(initialState, (builder) => {
  builder.addCase(saveConversation, (state, action) => {
    const updatedItems = [...state.items];
    updatedItems.unshift(action.payload);
    state.items = updatedItems.slice(0, HISTORY_LENGTH - 1);
  });

  builder.addCase(clearConversationHistory, (state, action) => {
    state.items = initialState.items;
  });

});

export { conversationHistory };
