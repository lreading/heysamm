// src/components/SammForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SammForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      question1: '',
      notes1: '',
      // Add more questions as needed
    },
    validationSchema: Yup.object({
      question1: Yup.string().required('Required'),
      notes1: Yup.string(),
      // Add validation for more questions
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission, e.g., send data to the backend
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4 space-y-4">
      <div>
        <label htmlFor="question1" className="block text-sm font-medium text-gray-700">
          SAMM Question 1
        </label>
        <input
          id="question1"
          name="question1"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.question1}
          className="input input-bordered w-full"
        />
        {formik.touched.question1 && formik.errors.question1 ? (
          <div className="text-red-500 text-sm">{formik.errors.question1}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="notes1" className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          id="notes1"
          name="notes1"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.notes1}
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SammForm;

