const Contact = () => {
  return (

     <div className="flex flex-col justify-center text-center m-auto border bg-amber-200 w-200 mt-10 p-4 font-medium rounded-2xl">
     <h1 className="m-3">contact us page</h1> 
      <form>
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
        <button className="m-2 p-2 border border-black bg-white rounded-lg cursor-pointer">
          submit
        </button>
      </form>
   
    </div> 
  );
};

export default Contact;
