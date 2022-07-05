function Form(props) {
  return (
    <form onSubmit={props.formHandler}>
      <div className="m-40 my-8 text-center bg-white rounded-md w-97 h-96">
        <div>
          <h2 className="m-10 text-xl text-green-500 ">
            Create Cookie Stand
          </h2>
        </div>

        <div className="m-5  ">
          <p className="mx-1 text-green-400 bg-gray-200">Location:</p>
          <label className="text-green-400 col-flex">
            <input
              htmlFor="location"
              id="location"
              type={"text"}
              className="mx-5 w-96"
            />
          </label>
        </div>

        <div className="flex p-5 mx-20 my-5 text-green-400 rounded-md justify-evenly">
          <label className="flex-col ">
            Minimum Customers Per Hour
            <input
              htmlFor="min"
              id="min"
              type={"number"}
            />
          </label>
          <label className="felx-col">
            Maximum Customers Per Hour
            <input
              htmlFor="max"
              id="max"
              type={"number"}
            />
          </label>
          <label className="flex-col">
            Average Cookies Per Sale
            <input
              htmlFor="avg"
              id="avg"
              type={"number"}
            />
          </label>
        </div>

        <div className="mx-20 bg-gray-300">
          <button
            className="float-right p-3 text-center text-white bg-gray-400 rounded-md "
            type="submit"
          >
            Create!
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
