import React from 'react'
import cx from 'classnames'
import './input.css'

interface InputPropsI {
  sizes?: 'sm' | 'md' | 'lg'
  label?: string
  prefix?: any
  error?: string
}

const Input: React.FC<InputPropsI & React.HTMLProps<HTMLInputElement>> =
  (props)
    : React.ReactElement => {
    const {sizes, error, prefix, label, ...rest} = props
    return (
      <div
        className={cx('app-input-group', {
          sm: sizes === 'sm',
          md: sizes === 'md',
          lg: sizes === 'lg',
          prefix: !!prefix,
          error: !!error
        })}
      >
        <label>{label}</label>
        <input {...rest} /> {error && <span className='input-error-msg'>{error}</span>}
        {prefix && <i className='app-input-prefix'>{prefix}</i>}
      </div>
    )

  }

export default Input