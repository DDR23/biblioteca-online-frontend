import * as yup from 'yup'

export const bookSchema = yup.object().shape({
  id: yup.number().typeError('Campo obrigatorio, apenas número').required('Campo obrigatório'),
  title: yup.string().required('Campo obrigatório'),
  pages: yup.number().typeError('Campo obrigatorio, apenas número').required('Campo obrigatório'),
  isbn: yup.number().typeError('Campo obrigatorio, apenas número').required('Campo obrigatório'),
  publisher: yup.string().required('Campo obrigatório'),
  sumary: yup.string()
})