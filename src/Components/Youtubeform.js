import React from 'react'
import {useFormik} from 'formik'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

function Youtubeform() {
   const formik = useFormik({
       initialValues:{
           name:'',
           email:'',
           channel:''
       }
   })
   console.log('Form values',formik.values)
    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                <input type= 'text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor='email'>E-mail</label>
                <input type= 'email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='channel'>Channel</label>
                <input type= 'text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

                <button>Submmit</button>
            </form>
        </div>
    )
}

export default Youtubeform
