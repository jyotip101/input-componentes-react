import React from 'react'

const Input = ({ defaultText, labelColor, text, iconstart, icon, cName }) => {
  return (
    <>
      <div className='ip-contant'>
        <p>{`${defaultText ? defaultText : ''}`}</p>
        <div className='ip-control'>
          <label className={`${labelColor}`} htmlFor='name'>
            Label
          </label>
          <input
            className={`ip ${cName}`}
            id='name'
            name='name'
            type='text'
            placeholder='Placeholder'
          />
        </div>
      </div>
    </>
  )
}

export default Input
