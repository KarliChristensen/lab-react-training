import React, { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordStrong = () => {
    return password.length >= 8;
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 shadow">
      <input
        type="email"
        placeholder='Your email'
        value={email}
        onChange={handleEmailChange}
        className={`border p-2 mb-4 rounded-lg ${
          isEmailValid() ? 'border-green-500' : 'border-red-500'
        }`}
      />
      {isEmailValid() ? null : <p className="text-red-500">Your email is invalid</p>}
      <br />
      <input
        type="password"
        placeholder='Your password'
        value={password}
        onChange={handlePasswordChange}
        className={`border p-2 mb-4 rounded-lg ${
          isPasswordStrong() ? 'border-green-500' : 'border-red-500'
        }`}
      />
      {isPasswordStrong() ? null : <p className="text-red-500">Your password is too weak</p>}
      <br />
      <select
        value={nationality}
        onChange={handleNationalityChange}
        className="border p-2 mb-4 rounded-lg"
      >
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>
      <br />
      <p>
        {nationality === 'en'
          ? 'Hello'
          : nationality === 'de'
          ? 'Hallo'
          : nationality === 'fr'
          ? 'Bonjour'
          : ''}
      </p>
      <p>Your email is {email}</p>
    </div>
  );
}

export default SignupPage;
