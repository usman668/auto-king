import Joi from "joi";

export const validate_user = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().min(2).max(30).required(),
    last_name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

export const validate_login = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password:Joi.string().min(6).required()
    })
    return schema.validate(data)
}