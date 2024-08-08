import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ExpedienteState {
	data: string[];
}

const reducer = (state: ExpedienteState, action: Action): ExpedienteState => {
	switch (action.type) {
		case ActionType.PROCURAR_EXPEDIENTE:
			return {data: []};
		default:
			return state;
	}
};

export default reducer;