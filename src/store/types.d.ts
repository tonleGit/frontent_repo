import { StateStatusEnum } from "@/enums/api-status.enum";

export class State {
  status: StateStatusEnum;
  error?: string;
  value: any;
  constructor() {}
}
