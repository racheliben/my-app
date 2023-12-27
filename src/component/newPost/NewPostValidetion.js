import * as yup from 'yup';

export const validationSchemaNewPost=yup.object({
    title:yup
    .string()
    .required('Required'),
    body: yup
    .string()
    .required('Required'),
})