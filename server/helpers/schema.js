import joi from '@hapi/joi';


export const loginschema = joi.object().keys({
  email: joi.string().trim().email({ minDomainSegments: 2 }).required(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
});
export const signupschema = joi.object().keys({
  firstname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  lastname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  national_id_number: joi.string().regex(/^[0-9]{16}$/).required(),
  Phone: joi.string().regex(/^[0-9]{9}$/).required(),
  email: joi.string().trim().email({ minDomainSegments: 2 }).required(),
  DoB: joi.string().required(),
  status: joi.boolean(),
  password: joi.string().required(),
});
export const Employeeschema = joi.object().keys({
  firstname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  lastname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  national_id_number: joi.string().regex(/^[0-9]{16}$/).required(),
  Phone: joi.string().regex(/^[0-9]{9}$/).required(),
  email: joi.string().trim().email({ minDomainSegments: 2 }).required(),
  DoB: joi.string().required(),
  status: joi.boolean(),
  position: joi.string().required(),
});
export const editSchema = joi.object().keys({
  firstname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  lastname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  national_id_number: joi.string().regex(/^[0-9]{16}$/).required(),
  status: joi.boolean(),
});
export const offchema = joi.object().keys({
  status: joi.boolean(),
});