import { UiState } from "./interfaces";

const UI_ACTION_TYPES = {
  IS_TYPING: "@uiReducer/IS_TYPING",
};

const INITIAL_STATE: UiState = {
  isTyping: false,
};

export default function uiReducer(state = INITIAL_STATE, action): UiState {
  switch (action.type) {
    case UI_ACTION_TYPES.IS_TYPING: {
      return {
        ...state,
        isTyping: action.payload.isTyping,
      };
    }

    default:
      return state;
  }
}

export function updateIsTyping(isTyping: boolean) {
  return {
    type: UI_ACTION_TYPES.IS_TYPING,
    payload: {
      isTyping: isTyping,
    },
  };
}
