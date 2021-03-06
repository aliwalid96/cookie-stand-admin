
function Login(props) {

  return (
      <div className="flex justify-center" >
          <div className='flex content-center justify-center p-5 m-20 bg-green-200 border-green-300 w-500'>
              <form className="grid w-full grid-cols-1 grid-rows-5 p-10 justify-items-center" onSubmit={props.logInHandler}>
                  <label htmlFor="user_name">Username</label>
                  <input required type="text" id="user_name" className='w-full p-1 text-gray-300 rounded-xl'/>
                  <label htmlFor="user_name">Password</label>
                  <input required type="password" id="user_name" className='w-full p-1 text-gray-300 rounded-xl' />
                  <br />
                  <button type="botton" className="self-center w-1/2 px-4 py-2 bg-gray-300 justify-self-center "> Login </button>
              </form>
          </div>
      </div>
  )
}

export default Login