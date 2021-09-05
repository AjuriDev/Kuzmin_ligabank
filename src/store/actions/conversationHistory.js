import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  SAVE_CONVERSATION: `conversation/saveConversation`,
  CLEAR_CONVERSATION_HISTORY: `conversation/clearConversationHistory`,
};

const saveConversation = createAction(
    ActionType.SAVE_CONVERSATION,
    (payload) => ({payload})
);

const clearConversationHistory = createAction(
    ActionType.CLEAR_CONVERSATION_HISTORY,
);

export {
    ActionType,
    saveConversation,
    clearConversationHistory,
};
