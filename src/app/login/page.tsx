'use client'
import React from 'react'

enum MODE {
    LOGIN = "LOGIN",
    REGISTER = 'REGISTER',
    RESET_PASSWORD = 'RESET_PASSWORD',
    EMAIL_VERIFICATION = 'EMAIL_VERIFICATION'
};
const Login = () => {
    const [mode, setMode] = React.useState(MODE.LOGIN);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')    ;
    const [emailCode, setEmailCode] = React.useState('')    ;
    const [userName, setUserName] = React.useState('')    ;
    const [isLoading, setIsLoading] = React.useState(false)    ;
    const [error, setError] = React.useState('')    ;

    const formTitle = mode===MODE.LOGIN ? 'Log in' : mode===MODE.REGISTER ? 'Register' : mode===MODE.RESET_PASSWORD ? 'Reset Password' : 'Email Verification';
    const buttonTitle = mode===MODE.LOGIN ? 'Login' : mode===MODE.REGISTER ? 'Register' : mode===MODE.RESET_PASSWORD ? 'Reset' : 'Verity';


  return (
    <div className='h-[calc(100vh-80px)] px-8 md:px-16 lg:px-32 xl:px-64'>
        <form className="flex flex-col gap-8 " >
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="john"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        ) : null}
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Verification Code</label>
            <input
              type="text"
              name="emailCode"
              placeholder="Code"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Forgot Password?
          </div>
        )}
        {/* SUBMIT BUTTON */}
        <button
          className="bg-pink-500 text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>
        {error && <div className="text-red-600">{error}</div>}  
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.REGISTER)}
          >
            {"Don't"} have an account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Have and account?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go back to Login
          </div>
        )}
        {/* {message && <div className="text-green-600 text-sm">{message}</div>} */}
      </form>
        
        
    </div>
  )
}

export default Login