const Joi = require('@hapi/joi');

export const eventSchema = Joi.object().keys({
  sId: Joi.string().required()
});
