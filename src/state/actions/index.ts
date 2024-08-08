import { ActionType } from "../action-types";

interface ProcurarExpedienteAction {
	type: ActionType.PROCURAR_EXPEDIENTE;
}

export type Action = ProcurarExpedienteAction;