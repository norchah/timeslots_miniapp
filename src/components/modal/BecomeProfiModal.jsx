import React from 'react';
import ProfiRegistrationForm from "../../components/forms/ProfiRegistrationForm.jsx";

export default function BecomeProfiModal() {
  return (
    <div className="flex flex-col justify-center px-5">
      <h1 className='text-xl'>Что бы начать оказывать услуги заполните форму ниже</h1>
      <ProfiRegistrationForm navigate={navigate}/>
    </div>
  );
}