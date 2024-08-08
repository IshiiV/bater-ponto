import { ActionType } from "../action-types";
import { Action } from "../actions";

const procurarExpediente = () => {
	return (dispatch: any) => {
		dispatch({
			type: ActionType.PROCURAR_EXPEDIENTE
		});

		try {

		} catch (err) {
			
		}
	}
};