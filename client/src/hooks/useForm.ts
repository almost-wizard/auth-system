import { IFormData } from "../types/auth/IFormData";

interface formFields {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}

export const useForm = (formData: IFormData) => {
  let is_form_valid = true
  for (const field in formData) {
    const field_state = formData[field as keyof IFormData];
    if (field_state?.is_valid !== true) {
      is_form_valid = false;
    }
  }

  let fields: formFields = {};

  for (const field in formData) {
    fields = {...fields, [field]: formData[field as keyof IFormData]?.value}
  }

  return { ...fields, is_form_valid };
};
