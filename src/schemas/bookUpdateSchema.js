import * as yup from 'yup'

export const bookUpdateSchema = yup.object().shape({
  title: yup.string(),
  pages: yup.mixed().test('isNumber', 'Apenas número', value => value === '' || !isNaN(value)),
  isbn: yup.mixed().test('isNumber', 'Apenas número', value => value === '' || !isNaN(value)),
  publisher: yup.string(),
  sumary: yup.string()
})