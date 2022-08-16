import { VALIDATION_HANDLERS, VALIDATION_RULES } from "../constants/validation.constants";

export const validate = (params) => {
  const rules = VALIDATION_RULES[params.name];

  if (!rules) {
    return [true, null];
  }

  for (const k in rules) {
    const v = rules[k];
    if (VALIDATION_HANDLERS[k]({rule: v, ...params})) {
      return [false, `invalid_${params.name}_${k}`];
    }
  }

  return [true, null];
};
