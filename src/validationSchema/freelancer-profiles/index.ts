import * as yup from 'yup';

export const freelancerProfileValidationSchema = yup.object().shape({
  skills: yup.string().required(),
  experience: yup.number().integer().required(),
  portfolio_link: yup.string().nullable(),
  name: yup.string().required(),
  freelancer_id: yup.string().nullable().required(),
});
