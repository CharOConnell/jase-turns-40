import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";


function RsvpForm () {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const sendEmail = (formData) => {
        emailjs
          .send("gmail", "jason", formData, "GzsslZiu8VpD9iAUS")
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        reset();
        document.getElementById("successToast").innerHTML = "Thank you for your RSVP";
    };
    
    return (
        <div className='grid grid-cols-1 content-center mb-12'>
            <hr className='flex border-black w-1/2 mx-auto'></hr>
            <p className="funky-font text-center py-3 mt-2 text-xl">RSVP</p>
            <hr className='flex border-black w-1/2 mx-auto mb-3'></hr>
            <form onSubmit={handleSubmit(sendEmail)}>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium">Your (and your guest's) name:</label>
                <div className="grid grid-cols-1">
                    <div className="mb-2">
                        <input className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-yellow-300 focus:border-yellow-300 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300 
                        ${errors.firstName ? 'border-red-600':''}" 
                        placeholder="Your name"
                        {...register("firstName", { required: true, maxLength: 20 })} />
                        {errors.firstName && <p className="text-sm text-red-600">Please enter your name</p>}
                    </div>
                    <div className="mb-3">
                        <input className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-yellow-300 focus:border-yellow-300 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300" 
                        placeholder="Your guest's name"
                        {...register("secondName", { required: false, maxLength: 20 })} />
                    </div>
                </div>
                <div className="grid grid-cols-1 my-4">
                    <label htmlFor="attendance" className="block mb-2 text-sm font-medium">Will you be attending?</label>
                    <select {...register("attendance", { required: true })} 
                    className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-yellow-300 focus:border-yellow-300 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 my-3">
                    <div className="my-3">
                        <label htmlFor="dietary" className="block mb-2 text-sm font-medium">Any dietary requirements?</label>
                        <input className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-yellow-300 focus:border-yellow-300 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300" 
                        placeholder="Your dietary requirements"
                        {...register("dietary", { required: false, maxLength: 20 })} />
                    </div>
                </div>
                <div id="successToast" className="text-red-500 py-4"></div>
                <input type="submit" className="baranis-yellow funky-font text-lg md:w-1/6 mx-auto hover:bg-yellow-500 
                focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm sm:w-2/4 
                px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"/>
            </form>
        </div>
    );
}

export default RsvpForm;