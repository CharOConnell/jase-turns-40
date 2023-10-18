import { useForm } from "react-hook-form";

function RsvpForm () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input {...register("firstName", { required: true, maxLength: 20 })} />
        //     <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        //     <input type="number" {...register("age", { min: 18, max: 99 })} />
        //     <input type="submit" />
        // </form>
        <div className='grid grid-cols-1 content-center mb-12'>
            <hr className='flex border-black w-1/2 mx-auto'></hr>
            <p className="funky-font text-center py-3 mt-2 text-xl">RSVP</p>
            <hr className='flex border-black w-1/2 mx-auto mb-3'></hr>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium">Your (and your guest's) name:</label>
                <div className="grid grid-cols-1">
                    <div className="mb-2">
                        <input className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-yellow-300 focus:border-yellow-300 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300" 
                        placeholder="Your name"
                        {...register("firstName", { required: true, maxLength: 20 })} />
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
                    <div className="w-1/2 mx-auto">
                        <div>
                            <label htmlFor="yes">  
                            <input className="justify-start" {...register("attendance")} type="radio" value="yes" id="attendanceYes"/> Yes</label>
                        </div>
                        <div>
                            
                            <label htmlFor="no">
                            <input {...register("attendance")} type="radio" value="no" id="attendanceNo"/>  No</label>
                        </div>
                    </div>
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

                <input type="submit" className="baranis-yellow funky-font text-lg md:w-1/6 mx-auto hover:bg-yellow-500 
                focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm sm:w-2/4 
                px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"/>
            </form>
        </div>
    );
}

export default RsvpForm;