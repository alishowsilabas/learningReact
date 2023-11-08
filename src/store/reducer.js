import { INCREMENTA, REDUZ } from "./action";

export const reducer = (prevState, action) => {
  if (action.type === INCREMENTA) {
    return {
      contador: prevState.contador + action.payload.valor,
    };
  }
  if (action.type === REDUZ) {
    return {
      contador: prevState.contador - action.payload.valor,
    };
  }
  return prevState;
};

export const inititalState = {
  contador: 0,
};

export default reducer;
