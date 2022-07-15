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

export const VALIDATION_HANDLERS = {
  regex: (params) => !RegExp(params.rule).test(params.value),
  min_length: (params) => params.value.length < params.rule,
  max_length: (params) => params.value.length > params.rule,
};
