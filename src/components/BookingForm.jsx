import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  resDate: Yup.date().required("Date is required"),
  resTime: Yup.string().required("Time is required"),
  guests: Yup.number()
    .typeError("Guests must be a number")
    .required("Number of guests is required")
    .min(1, "Minimum 1 guest required")
    .max(10, "Maximum 10 guests allowed"),
  occasion: Yup.string().required("Occasion is required"),
})

const MyForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert("Reservation dated")
      setSubmitting(false)
    }, 400)
  }

  return (
    <div>
      <h1 className='text-3xl text-center'>Make Your Reservation</h1>
      <Formik
        initialValues={{
          resDate: "",
          resTime: "17:00",
          guests: 1,
          occasion: "Birthday",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-4 py-8 max-w-[400px]'>
            <label htmlFor='resDate'>Choose date</label>
            <Field type='date' id='resDate' name='resDate' />
            <ErrorMessage name='resDate' component='div' className='error' />
            <label htmlFor='resTime'>Choose time</label>
            <Field as='select' id='resTime' name='resTime'>
              <option value='17:00'>17:00</option>
              <option value='18:00'>18:00</option>
              <option value='19:00'>19:00</option>
              <option value='20:00'>20:00</option>
              <option value='21:00'>21:00</option>
              <option value='22:00'>22:00</option>
            </Field>
            <ErrorMessage name='resTime' component='div' className='error' />
            <label htmlFor='guests'>Number of guests</label>
            <Field type='number' id='guests' name='guests' min='1' max='10' />
            <ErrorMessage name='guests' component='div' className='error' />
            <label htmlFor='occasion'>Occasion</label>
            <Field as='select' id='occasion' name='occasion'>
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
            </Field>
            <ErrorMessage name='occasion' component='div' className='error' />
            <button
              className='bg-[#495E57] rounded-md text-yellow-500'
              type='submit'
              disabled={isSubmitting}
            >
              Make Your Reservation
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default MyForm
