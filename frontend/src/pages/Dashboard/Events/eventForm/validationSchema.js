import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
      title: Yup.string()
            .max(50, 'Maximum length of the title is 50 characters')
            .min(3, 'It would be more informative if you type more than 3 characters')
            .required("Don't forget the title"),
      snippet: Yup.string()
            .min(50, 'Try to provide longer snippet, at least 50 characters')
            .max(90, 'Maximum length of the snippet is 90 characters')
            .required("Don't forget the snippet (short description)"),
      desc: Yup.string()
            .min(100, 'Minimum length of the description is 100 characters')
            .required("Don't forget the description"),
      date: Yup.string()
            .required('Please select the date'),
      picture: Yup.mixed()
            .test('fileSize', 'File size is too large', (value) => {
                if (!value) return true //this allows empty values
                return value.size <= 4 * 1024 * 1024
            })
            .test('fileType', 'Invalid file type', (value) => {
                if (!value) return true
                const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif']
                return allowedFileTypes.includes(value.type)
            }),
})

export default validationSchema