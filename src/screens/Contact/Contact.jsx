import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'shared/components/Button/Button';
import Card from 'shared/components/Card/Card';
import Input from 'shared/components/Input/Input';

import './styles.scss';

const FORM_DEFAULT_VALUES = {
  personName: '',
  personEmail: '',
  message: '',
};

function Contact() {
  const { register, handleSubmit, reset, errors } = useForm({
    defaultValues: FORM_DEFAULT_VALUES,
  });

  const [state, setState] = useState(FORM_DEFAULT_VALUES);

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  function getData() {
    console.log('wysłane');
    reset();
    setState(FORM_DEFAULT_VALUES);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(getData)} className="form">
        <Input
          name="personName"
          className="card__input"
          type="text"
          onChange={handleChange}
          register={register({
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'The minimum field length is 2 letters',
            },
          })}
          placeholder="Name"
          isMandatory={true}
          value={state.personName}
          errors={errors['personName']}
        />
        <Input
          name="personEmail"
          value={state.personEmail}
          className="card__input"
          type="text"
          onChange={handleChange}
          register={register({
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'The minimum field length is 2 letters',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          errors={errors['personEmail']}
          placeholder="Email"
          isMandatory={true}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          cols="50"
          className="form__textarea"
          type="text"
          onChange={handleChange}
          value={state.message}
        />
        <Button type="submit" text="SEND" />
      </form>
    </Card>
  );
}

export default Contact;
