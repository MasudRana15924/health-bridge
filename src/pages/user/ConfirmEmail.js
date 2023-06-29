import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ConfirmEmail = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("")


  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("password", password);
    dispatch();

  };
  const registerDataChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="mt-5 mb-5 text-2xl font-medium mb-4 text-start">Confirm Email</h2>
          <form onSubmit={registerSubmit}>
            <div class="mb-4">
              <input class="border border-gray-200 w-full h-10 rounded p-3 mb-3" type="text" id="userpassword"
                name="password"
                value={password}
                onChange={registerDataChange}
                placeholder="Enter Your 6 Digit Code"
                required
              />
              <button class="border-2 border-teal-700 bg-teal-700 text-white py-1 w-full rounded-md  font-semibold h-10 bg-teal-700 mt-5" type="submit">Confirm</button>
            </div>


          </form>
        </div>
      </div>

    </div>
  );
};

export default ConfirmEmail;