import Joi from 'joi';

export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default {
  signup: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .regex(passwordReg)
        .required(),
      firstName: Joi.string().required(),
      lasttName: Joi.string().required(),
      usertName: Joi.string().required(),
    },
  },
};
