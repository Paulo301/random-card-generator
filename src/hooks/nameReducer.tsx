export type State = {
  name: string;
}

type Action =
 | { type: 'SET_NAME', payload: string }
 | { type: 'REMOVE_NAME'}

export const NameReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_NAME':
        return { name: action.payload };
    case 'REMOVE_NAME':
        return { name: "" };
    default:
        return state;
  }
};