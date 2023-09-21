import * as yup from 'yup';

export const hiringValidationSchema = yup.object().shape({
  job_id: yup.string().nullable(),
  freelancer_id: yup.string().nullable(),
});
