import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {DashPopUpSuccess, DashPopUpFail} from '../../Components/PopUp/PopUp.styled'
import Loader from '../../Components/Loader/Loader.styled'
import ConfirmWindow from '../../Components/ConfirmWindow/ConfirmWindow.styled'

const Classes = ({className}) => {
  // States
  const [showPopup, setShowPopup] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [classToDelete, setClassToDelete] = useState(null);
  const [respMessage, setRespMessage] = useState('')
  const [fail, setFail] = useState(false)
  const [loading, setLoading] = useState(false)

  // list of classes
    const [classes, setClasses] = useState([])
    const fetchClasses = async () => {
        try {
            const response = await axios.get('http://localhost:3003/api/dashboard/classes-list')
            setClasses(response.data)
        } catch (error) {
            console.log('Error fetching classes', error)
        }
    }
    useEffect(() => {
    //     const fetchClasses = async () => {
    //     const response = await axios.get('http://localhost:3003/api/dashboard/classes-list')
    //     setClasses(response.data)
    // }
    fetchClasses()
  }, [])

  //form 
    const formik = useFormik({
        initialValues: {
            title: '',
            desc: '',
            day: '',
            index: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(50, 'Maximum length of the title is 50 characters')
                .min(3, 'It would be more informative if you type more than 3 characters')
                .required('Required'),
            desc: Yup.string()
                .max(1000, 'Wooha, I can handle more than 1000 characters')
                .min(20, 'It would be more informative if you type more than 20 characters')
                .required('Required'),
            day: Yup.string()
                .max(30, 'Maximum legth of this fiel is 20 characters')
                .min(5, 'Try something like Friday 20:30 pm')
                .required('Required'),
            index: Yup.number()
                .max(30, 'Wooha, you have more than 30 classes here?')
                .required('Required')
        }),
        onSubmit: async (values) => {
            setLoading(true)
            try {
                const response = await axios.post('http://localhost:3003/api/dashboard/classes-list', formik.values)
                if (response.status === 200) {
                    console.log(response.data.message)
                    setRespMessage(`${response.data.message}`)
                    setShowPopup(true)
                    setLoading(false)
                    fetchClasses()
                    formik.resetForm()
                } else {
                    setRespMessage(response.data.message)
                    setFail(true)
                    setLoading(false)

                }
            } catch (error) {
                setRespMessage('An error occured, try again')
                setFail(true)
                setLoading(false)
            }
        }
    })

  // deletion modal
  const handleDeleteClick = (classs) => {
    setClassToDelete(classs);
    setShowDeleteModal(true)
  }
  const handleDeleteConfirm = async () => {
    // delete class from database
        const response = await axios.delete('http://localhost:3003/api/dashboard/classes-list/' + classToDelete._id)
        if (response.status === 200) {
            console.log(response.data.message)
        }
        setClasses((prevClasses) => {
            return prevClasses.filter((item) => item._id !== classToDelete._id
            )
        })
        setShowDeleteModal(false)
    
  }
  const handleModalClose = () => {
    setShowDeleteModal(false)
  }

    
  return (
    <section className={className}>
      
     
        <div className="left">
            <h2>Classes</h2>
            <div className="classes">
                {classes && classes.map((classs, index) => {
                    
                    return (
                        <div key={classs._id} className="item">
                            <h3>{classs.title}</h3>
                            <p className="date">{classs.day}</p>
                            <p className="desc">{classs.desc}</p>
                            <p>index: {classs.index}</p>
                            <div className="buttons">
                                <button>Edit</button>
                                <button onClick={() => handleDeleteClick(classs)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
                {showDeleteModal ? <ConfirmWindow 
                                        onClose={handleModalClose}
                                        onDelete={handleDeleteConfirm}
                                        content={classToDelete}
                                            /> : null}
            </div>
        </div>
        <div className="right">
            <h2>Add a new class</h2>
                <form onSubmit={formik.handleSubmit}>
                    
                    <input 
                        type="text" 
                        name="title" id="title" 
                        placeholder='Title'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title ? <span className='err'>{formik.errors.title}</span> : null}
                    
                    <input 
                        type="text" name="day" id="day" 
                        placeholder='Date and time'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.day}
                    />
                    {formik.touched.day && formik.errors.day ? <span className='err'>{formik.errors.day}</span> : null}

                    <textarea 
                    name="desc" id="desc" 
                    cols="30" rows="10" 
                    placeholder='Description'
                    onChange={formik.handleChange} onBlur={formik.handleBlur}
                    value={formik.values.desc}
                    ></textarea>
                    {formik.touched.desc && formik.errors.desc ? <span className='err'>{formik.errors.desc}</span> : null}

                    <input 
                        type="number" name="index" id="index" 
                        placeholder='Index'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.index}
                    />
                    <span>You can use index value to specify order of the displayed classes</span>
                    
                    <button type="submit" >Submit</button>
                </form>

                <DashPopUpSuccess show={showPopup} content={respMessage} onClose={() => {setShowPopup(false)}}/>
                <DashPopUpFail show={fail} content={respMessage} onClose={() => setShowPopup(false)}/>
                <Loader loading={loading}/>
                
                
        </div>
     
    </section>
  )
}

export default Classes
