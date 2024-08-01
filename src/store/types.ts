import { StateStatusEnum } from "@/enums/api-status.enum";
export interface StateInterface {
  status?: StateStatusEnum;
  error?: any;
  value?: any;
}

export class State implements StateInterface {
  status: StateStatusEnum;
  error?: any;
  value?: any;

  constructor(init?: StateInterface) {
    this.status = init?.status || StateStatusEnum.idle;
    this.value = init?.status;
    this.error = init?.error;
  }
}
