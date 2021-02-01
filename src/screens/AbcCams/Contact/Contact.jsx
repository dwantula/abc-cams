import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'shared/components/Button/Button';
import Card from 'shared/components/Card/Card';
import Input from 'shared/components/Input/Input';

import './styles.scss';

function Contact() {
  const { register, handleSubmit, errors } = useForm();

  const [state, setState] = useState({
    personName: '',
    personEmail: '',
    message: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  function getDate() {
    console.log('wysłane');
  }

  return (
    <Card>
      {
        <form className="form">
          <div className="form__placeholder">
            <Input
              name="personName"
              value={state.personName}
              className="card__input"
              type="text"
              onChange={handleChange}
              register={register({ minLength: 3, maxLength: 12 })}
            />
            <div className="form__placeholder-text">
              Name <span className="form__placeholder-star">*</span>
            </div>
          </div>
          {errors.personName && (
            <p className="card__errors">
              This is field required min length of 2 to 12
            </p>
          )}
          <div className="form__placeholder">
            <Input
              name="personEmail"
              value={state.personEmail}
              className="card__input"
              type="email"
              onChange={handleChange}
              register={register({ minLength: 3, maxLength: 12 })}
            />
            <div className="form__placeholder-text">
              Email <span className="form__placeholder-star">*</span>
            </div>
          </div>

          {errors.personEmail && (
            <p className="card__errors">
              This is field required min length of 2 to 12
            </p>
          )}
          <textarea
            placeholder="Message"
            name="message"
            className="card__textarea"
            type="text"
            onChange={handleChange}
            value={state.message}
          />
          <Button onClick={handleSubmit(getDate)} />
        </form>
      }
    </Card>
  );
}

export default Contact;
