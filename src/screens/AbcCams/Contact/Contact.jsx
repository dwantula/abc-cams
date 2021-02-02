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

  function getDate() {
    if (state.personName === '' || state.personEmail === '') {
      alert('Name and Email are required.');
    } else {
      console.log('wysłane');
      reset();
      setState(FORM_DEFAULT_VALUES);
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(getDate)} className="form">
        <Input
          name="personName"
          className="card__input"
          type="text"
          onChange={handleChange}
          register={register({
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'This is field required min length of 2',
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
              message: 'This is field required min length of 2',
            },
            pattern: { value: /@/, message: 'Pattern "@" is required' },
          })}
          placeholder="Email"
          isMandatory={true}
          errors={errors['personEmail']}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="card__textarea"
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
