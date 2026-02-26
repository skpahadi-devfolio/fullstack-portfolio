import { useState } from 'react'
const Contact = () => {

  const [form, setForm] = useState({name: "", email: "", message: ""})

  const handleChange = (e) => {
      setForm({...form, [e.target.name]:e.target.value})
  }

   const handleClick = async(e) => {
    e.preventDefault()

    if(form.name === "" || form.email === "" || form.message === ""){
      alert("Please Filled Empty column");
    }
    else{
      alert("Form submmited succefuslly!");
      setForm({name: "", email: "", message: ""})
    }
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify(form);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://fullstack-portfolio-yfzd.onrender.com/contact", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

   }
   

  
  return (
    <div>
      <div className="container mx-auto my-9 md:w-5xl w-full relative py-20 text-white h-[80vh] ">
        <div className="title text-center absolute top-5 left-19 md:left-90 md:[&>*:nth-child(2)]:text-3xl [&>*:nth-child(2)]:text-xl m-auto">
          <p>A Simple title prefix</p>
          <p>SEND ME A MESSAGE</p>
        </div>

        <div className="left text-white md:mx-14 absolute bottom-0 left-1 text-center md:absolute md:top-41 text-sm md:text-xl">
          <p>Getting in touch is easy!</p>

          <p className='md:w-64 md:py-4'>RC-881, Vandana Enclave Khora, Shital Vihar, Noida 201001
          </p>
          <p className='flex justify-center items-center gap-5'>+91 9582576788
            <lord-icon
              src="https://cdn.lordicon.com/nnzfcuqw.json"
              trigger="hover"
            >
            </lord-icon>
          </p>
          <p className='flex justify-center items-center gap-5'> sandeepkohli180@gmail.com
            <lord-icon
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="hover"
            >
            </lord-icon>
          </p>
        </div>


        <div className="right flex justify-end md:mx-10">
          <form onSubmit={handleClick} className='flex flex-col gap-2 min-w-60 md:mx-8 my-6 mx-auto'>
            <input onChange={handleChange} className='px-6 py-2 border-2 border-amber-50 mx-5 rounded-xl' type="text" name='name' value={form.name} placeholder='Your Name' />
            <input onChange={handleChange} className='px-6 py-2 border-2 border-amber-50 mx-5 rounded-xl' type="email" name='email' value={form.email} placeholder='Your Email' />
            <textarea onChange={handleChange} className='px-6 border-2 border-amber-50 mx-5 md:min-h-48 min-h-28 rounded-lg' name="message" value={form.message} placeholder='Enter Message'></textarea>
            <button type='submit' className='bg-amber-600 relative -right-1 md:px-15 md:py-3 md:w-fit w-36 md:mx-25 mx-20 px-10 text-center rounded-4xl'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
