export const VALIDATION_RULES = {
  email: {
    regex: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  },
  password: {
    min_length: 8,
  },
  first_name: {
    max_length: 255,
  },
  last_name: {
    max_length: 255,
  },
};

interface regexParams {
  rule: string;
  value: string;
};
interface lengthParams {
  rule: number;
  value: string;
};

export const VALIDATION_HANDLERS = {
  regex: (params: regexParams) => !RegExp(params.rule).test(params.value),
  min_length: (params: lengthParams) => params.value.length < params.rule,
  max_length: (params: lengthParams) => params.value.length > params.rule,
};
