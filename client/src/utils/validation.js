import { VALIDATION_HANDLERS, VALIDATION_RULES } from "../data/validation";

export const validate = (params) => {
  const rules = VALIDATION_RULES[params.name];

  if (!rules) {
    return "valid_field";
  }

  for (const k in rules) {
    const v = rules[k];
    if (VALIDATION_HANDLERS[k]({rule: v, ...params})) {
      return `invalid_${params.name}_${k}`;
    }
  }

  return "valid_field";
};
