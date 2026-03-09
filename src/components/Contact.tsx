const Contact = () => {
  return (

     <div className="flex md:flex-col justify-center text-center md:m-auto m-4 border bg-amber-200 md:w-200 mt-10 md:mt-10 p-4 font-medium rounded-2xl">
     <h1 className="m-3">contact us page</h1> 
      <form onSubmit={(e : any ) => {
        e.preventDefault() ;
      }}>
        <input
          type="text"
          className="border border-black m-2 p-2 rounded-lg bg-white"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2 rounded-lg bg-white"
          placeholder="Message"
        />
        <button  className="m-2 p-2 border border-black bg-white rounded-lg cursor-pointer">
          submit
        </button>
      </form>
   
    </div> 
  );
};

export default Contact;
