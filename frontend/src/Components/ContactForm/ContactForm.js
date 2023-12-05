import React, {useState} from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import triangles from '../../assets/contact-form.svg'
import {PopUpSuccess, PopUpFail} from '../PopUp/PopUp.styled'
import Loader from '../Loader/Loader.styled'

const ContactForm = ({className}) => {

  const [showPopup, setShowPopup] = useState(false)
  const [showFailure, setShowFailure] = useState(false)
  const [respMessage, setRespMessage] = useState('')
  const [loading, setLoading] = useState(false)


  // background graphic
   let bgPos
   const w = window.innerWidth
  if (w >= 1020){bgPos = '327px -30px'}
  if (w <= 1019 && w >= 966){bgPos = '277px -30px'}
  if (w <= 965 && w >= 835){bgPos = '207px -30px'}
  if (w <= 834 && w >= 800){bgPos = '177px -30px'}
  if (w <= 799 && w >= 732){bgPos = '127px -10px'}
  if (w <= 731 && w >= 688){bgPos = '180% 50%'}
  if (w <= 687 && w >= 641){bgPos = '250% 50%'}
  if (w <= 640 && w >= 0){bgPos = '50% 50%'}



  // contact form logic 
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
          .max(30, 'Maximum lenght is 30 characters')
          .min(3, 'Minimum length is 3 characters')
          .required('Required'),
      email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      subject: Yup.string()
          .max(60, 'Subject is too long, max length is 60 characters')
          .required('Required'),
      message: Yup.string()
          .min(20, 'Please provide me more details about your booking or enquiry')
          .max(400, 'Your message is too long, we can handle up to 400 characters')
          .required('Required')
    }),
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const response = await axios.post('http://localhost:3003/api/message', formik.values)
        if (response.status === 200) {
          setRespMessage(response.data.message)
          setShowPopup(true)
          setLoading(false)
          formik.resetForm()
        } else {
          setRespMessage(response.data.message)
          setShowFailure(true)
          setLoading(false)
        }
        
      } catch (error) {
        console.error(error)
        setRespMessage('An error occured')
        setShowFailure(true)
        setLoading(false)
      }
    }
  })

  return (
    <div id='contact-form' className={className} style={{
            background: `url(${triangles})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: bgPos
        }}>
        <p>I am exited to hear from you!</p>
        <p>Don't hesitate to contact me.</p>
 
      <form onSubmit={formik.handleSubmit}>
        <h2>Contact</h2>

        <input 
          type="text" 
          name="name" id="name" 
          placeholder='Full name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

        {formik.touched.name && formik.errors.name ? <span className='err'>{formik.errors.name}</span> : null}
        

        <input 
          type="text" 
          name="email" id="email" 
          placeholder='Email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <span className='err'>{formik.errors.email}</span> : null}
        
        <input 
          type="text" 
          name="subject" id="subject" 
          placeholder='Subject'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
        />
        {formik.touched.subject && formik.errors.subject ? <span className='err'>{formik.errors.subject}</span> : null}
        
        <textarea 
          name="message" 
          rows='5' cols='50' 
          placeholder='Message'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        ></textarea>
        {formik.touched.message && formik.errors.message ? <span className='err'>{formik.errors.message}</span> : null}
        <button type='submit'>Send</button>
      </form>
      <PopUpSuccess show={showPopup} content={respMessage} onClose={() => {setShowPopup(false)}} />
      <PopUpFail show={showFailure} content={respMessage} onClose={() => {setShowFailure(false)}} />
      <Loader loading={loading}/>

    </div>
  )
}

export default ContactForm
