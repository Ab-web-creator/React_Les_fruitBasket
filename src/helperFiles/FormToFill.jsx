import React from 'react'
import { useState } from "react";
import './FormToFill.css'

const FormToFill = () => {


  const [formState, setFormState] = useState(
    {
      firstName: "",
      lastName: "",
      age: "",
      postCode: "",
      deliveryFrequency: 'weekly',
      timeSlot: "morgen",
      comments: "",

      terms: false,
    }
  )



  function changeHandler(e) {
    if (e.target.type === 'radio' && e.target.name === 'terms') {
      setFormState({
        ...formState,
        [e.target.name]: e.target.checked
      });
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value
      });
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
  }


  return (
    <div className='form-container'>
      <h1 className='company-name'>Form To Fill</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor=""> Voornaame:

        </label>
        <input type="text" name="firstName" value={formState.firstName} onChange={changeHandler} placeholder='your first name' />

        <label htmlFor=""> Achternaam:
        </label>
        <input type="text" name="lastName" value={formState.lastName} onChange={changeHandler} placeholder='your surname' />

        <label htmlFor=""> Leeftijd:
        </label>
        <input type="text" name="age" value={formState.age} onChange={changeHandler} placeholder='your age' />

        <label htmlFor=""> Post code:
        </label>
        <input type="text" name="postCode" value={formState.postCode} onChange={changeHandler} placeholder='your zip code' />

        <label >Bezorgfrequentie</label>


        <select name="deliveryFrequency" id="deliveryFrequency" onChange={changeHandler} value={formState.deliveryFrequency}>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>

        <div className='radio-label'>
          <label className='radio-btn' htmlFor='morgen'>
            <div className='radio-label'>
              <input
                type='radio'
                name='timeSlot'
                id='morgen'
                value='morgen'
                checked={formState.timeSlot === 'morgen'}
                onChange={changeHandler}
              />
              <p className='radio_words'>Overdag</p>
            </div>
          </label>

          <label className='radio-btn' htmlFor='evening'>
            <div className='radio-label'>
              <input
                type='radio'
                name='timeSlot'
                id='evening'
                value='evening'
                checked={formState.timeSlot === 'evening'}
                onChange={changeHandler}
              />
              <p className='radio_words'> s' Avonds</p>
            </div>
          </label>
        </div>



        <label htmlFor="">Opmerking</label>
        <textarea value={formState.comments} onChange={changeHandler} name="comments" id="" cols="30" rows="6"></textarea>



        <label className='radio-btn' htmlFor='terms'>
          <div className='radio-label'>
            <input className='termsStuff'
              type='radio'
              name='terms'
              id='terms'
              value={true}
              checked={formState.terms === true}
              onChange={changeHandler}
            />
            <p> Accept Terms and Conditions</p>
          </div>
        </label>


        <button className='send-btn' type='submit'>Send</button>
      </form>
    </div>
  )
}

export default FormToFill