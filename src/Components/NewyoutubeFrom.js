import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
const initialValues ={
    name:'',
    email:'',
    channel:''
}
const onSubmit= values=>{
    console.log('Form-data',values)

}
const validate =values=>{
    let errors = {}
     if(!values.name){
         errors.name='Required'
     }
     if(!values.email){
         errors.email='Required'
     }else  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email ='Invalid email format'
     }
     if(!values.channel){
         errors.channel='Required'
     }
     return errors
     }
const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
    channel: Yup.string().required('Required')
})
function NewyoutubeForm() {
   
//    console.log('Visited-field',formik.touched)
    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <Form >
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <Field type= 'text' id='name' name='name'  />
               <ErrorMessage name='name'/>
            </div>
             <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <Field type= 'email' id='email' name='email' />
                <ErrorMessage name='email'/>
             </div>
            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <Field type= 'text' id='channel' name='channel' />
                <ErrorMessage name='channel'/>

                <button type='submit'>Submmit</button>
            </div>
            </Form>
        </Formik>
    )
}

export default NewyoutubeForm
