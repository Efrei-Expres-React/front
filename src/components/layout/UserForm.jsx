import React from 'react'
import Input from '../atoms/Input'

const UserForm = ({handleSubmit, formData, handleInputChange, button, inputPasswords}) => {
  return (
    <form onSubmit={handleSubmit}>
    <Input 
        id="firstName"
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="Enter your first name"
        title="First Name"
        required
      />
        <Input 
        id="lastName"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Enter your last name"
        title="Last name"
        required
      />
        <Input 
        id="birthDate"
        name="birth"
        type="date"
        value={formData.birth}
        onChange={handleInputChange}
        placeholder="Enter your birth date"
        title="Birth Date"
        required
      />

      {inputPasswords && 
        <>
        <Input 
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
        title="Email"
        required
      />
        <Input 
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
        title="Password"
        required
      />
        <Input 
        id="verifyPassword"
        name="verifyPassword"
        type="password"
        value={formData.verifyPassword}
        onChange={handleInputChange}
        placeholder="Enter your again your password"
        title="Verify password"
        required
      />
      </>
      }

    <Input 
        id="bio"
        name="bio"
        type="textarea"
        value={formData.bio}
        onChange={handleInputChange}
        placeholder="Enter a little presentation"
        title="Bio"
        rows={5}
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {button}
      </button>
    </form>
  )
}

export default UserForm
