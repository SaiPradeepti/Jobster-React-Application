import { useState, useEffect } from 'react';
import Logo from '../components/logo';
import Wrapper from '../assets/wrappers/RegisterPage';
import FormRow from '../components/FormRow';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
};

function Register() {
  const [values,setValues] = useState(initialState);

  const handleChange = (e) => {
    const name= e.target.name;
    const value= e.target.value;
    setValues({...values, [name]: value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {name,email,password,isMember} = values;
    if(!email || !password || (!isMember && !name)){
      console.log('Please fill out all the fields')
    }
  }

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  return (
    <Wrapper className='full-page'>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {/* name field */}
        {!values.isMember && <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />}

        {/* email field */}
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />

        {/* password field */}
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />

        <button type='submit' className='btn btn-block'>
          submit
        </button>

        <p>
          {!values.isMember ? 'Already a member?' : 'Not a member yet?'}

          <button type='button' className='member-btn' onClick={toggleMember}>
          {!values.isMember ? 'Login' : 'Register'}
        </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register