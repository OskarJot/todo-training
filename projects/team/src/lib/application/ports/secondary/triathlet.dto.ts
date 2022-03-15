import { DepartmentDTO } from "./department.dto";

export interface TriathletDTO {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly department: DepartmentDTO;
}
