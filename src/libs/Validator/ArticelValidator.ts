import * as Joi from "joi"

export const CreateArticelSchema = Joi.object({
  title: Joi.string().allow(null),
  image: Joi.string().allow(null),
  contect: Joi.string().allow(null),
  Author: Joi.string().allow(null)
})