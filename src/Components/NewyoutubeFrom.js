import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray
} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError';
const initialValues ={
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNumbers:['',''],
    phNumbers:['']
}
const savedValues ={
    name:'kamana',
    email:'kama@gmail.com',
    channel:'kamu',
    comments:'Welcome to kamana',
    address:'gongaubu',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNumbers:['',''],
    phNumbers:['']
}
const onSubmit= values=>{
    console.log('Form-data',values)
    onSubmitProps.resetForm()

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
    channel: Yup.string().required('Required'),
    // comments:Yup.string().required('Required')
})
const validateComments = value => {
    let error 
    if(!value){
        error ='Required'
    }
    return error
}
function NewyoutubeForm() {
    const[formValues,setFormvalues]=useState(null)
//    console.log('Visited-field',formik.touched)
    return (
        <Formik 
        initialValues={formValues ||initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        >
        {formik =>
         
         {
             console.log('formik-props',formik)
                return (
                    <Form >
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <Field type= 'text' id='name' name='name' placeholder='Enter Your name'  />
               <ErrorMessage name='name' component={TextError} />
            </div>
             <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <Field type= 'email' id='email' name='email' />
                <ErrorMessage name='email'> 
                {
                    (errorMsg) => <div className='error'>{errorMsg}</div>
                }
                
                </ErrorMessage>
             </div>
            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <Field type= 'text' id='channel' name='channel' />
                <ErrorMessage name='channel'/>

               
            </div>
            <div className='form-control'>
                <label htmlFor='comments'>Comments</label>
                <Field  as='textarea'  id='comments' name='comments' validate={validateComments} />
                <ErrorMessage name='comments' ></ErrorMessage>
                
            </div>
            <div className='form-control'>
                <label htmlFor='address'>Address</label>
                <Field  name='address'>
                {(props)=>{
                    const {field,form,meta}=props
                    console.log('Renderprops',props)
                    return <div> <input type='text' id='address' {...field}></input>
                    {meta.touched && meta.error ? <div>{meta.error}</div>: null}
                    </div>

                }}</Field>
                
            </div>
            <div className='form-control'>
                <label htmlFor='facebook'>facebook profile</label>
                <Field  type='text'  id='facebook' name='social.facebook' />
                
            </div>
            <div className='form-control'>
                <label htmlFor='twitter'>Twitter profile</label>
                <Field  type='text'  id='twitter' name='social.twitter' />
                
            </div>
            <div className='form-control'>
                <label htmlFor='primaryph'>Primary Phone phoneNumbers</label>
                <Field  type='text'  id='primaryph' name='phoneNumber[0]' />
                
            </div>
            <div className='form-control'>
                <label htmlFor='secondaryph'>Secoundary Phone Number</label>
                <Field  type='text'  id='secondaryph' name='phoneNumber[1]' />
                
            </div>
            <div className='form-control'>
                <label >List of phone Numbers</label>
                <FieldArray name='phNumbers'>
                    { fieldArrayProps => {
                            console.log('fieldArrayProps',fieldArrayProps)
                            const {push,remove,form}= fieldArrayProps
                            const{values} = form
                            const{phNumbers} = values
                            console.log('form-errors',form.errors)
                            return <div>{
                            phNumbers.map((phNumber,index)=>(
                                <div key={index}
                                >
                                    <Field name={`phNumbers[${index}]`}></Field>
                                    {
                                        index >0 &&
                                    <button type='button' onClick={() => remove(index)} > - </button>
                                    }<button type='button' onClick={() => push(index)} > + </button>
                                </div>
                            ))
                            
                            }</div>
                        }
                    }
                </FieldArray>
                
            </div>
                <button onClick={() => setFormvalues(savedValues)}>Load saved data
                </button>
                <button type='reset'>Reset</button>
                <button type='submit'>Submmit</button>
            
            </Form> 
                )
            }
        }
            
        </Formik>
    )
}

export default NewyoutubeForm
