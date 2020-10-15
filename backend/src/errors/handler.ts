import { ValidationError } from 'yup'
import { ErrorRequestHandler } from 'express'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHanlder: ErrorRequestHandler = (error, request, respoonse, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {}

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return respoonse.status(400).json({ message: 'Validation fails', errors })
  }
  console.error(error)

  return respoonse.status(500).json({ message: 'Internal server error' })
}

export default errorHanlder
