interface IFieldState {
  value: string;
  is_valid: null | boolean;
  msg: null | string;
}

export interface IFormData {
  [key: string]: any;
  email?: IFieldState;
  first_name?: IFieldState;
  last_name?: IFieldState;
  password?: IFieldState;
}
