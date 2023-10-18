import jason from './jason0.jpg'

function Details() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 content-center'>
            <div className='p-4'>
                <img src={jason} alt="Jason" className="img-thumbnail img-fluid rounded"/>
            </div>
            <div className='p-4'>
                <hr className='flex border-black w-1/2 mx-auto md:border-0'></hr>
                <p className="funky-font text-center py-3 mt-2 text-xl">DETAILS</p>
                <hr className='flex border-black w-1/2 mx-auto mb-3'></hr>
                <p className='pb-3'>
                    <strong className='funky-font py-3'>Timings:</strong><br></br>
                    Saturday 9th December from 6pm till midnight
                </p>
                <div className='pb-3'>
                    <p><strong className='funky-font pt-2'>Location:</strong></p><br></br>
                    <a href='https://baranis.co.uk/' target='_blank' rel='noreferrer' className='btn border-2 rounded border-black p-1'>Baranis</a>
                    <p className='pt-2'>
                        115 Chancery Lane <br></br>
                        London, WC2A 1PP
                    </p>
                    <p className='pb-3'>
                        Underground: <br></br>
                        Chancery Lane (6 min walk) <br></br>
                        Temple (7 min walk)
                    </p>
                    <a href='https://goo.gl/maps/v5LiI' target='_blank' rel='noreferrer' className='btn border-2 rounded border-black p-1'>Google Maps</a>
                </div>
                <p className='pb-3'>
                    <strong className='funky-font py-3'>Dress Code:</strong><br></br>
                    Your best sparkly party gear!
                </p>
                <p className='pb-3'>
                    <strong className='funky-font py-3'>Catering:</strong><br></br>
                    There will be food, wine and a <strong>cheeky cocktail</strong> for all
                </p>
                <p className='pb-3'>
                    <strong className='funky-font py-3'>Gifts:</strong><br></br>
                    Please don't bring any birthday gifts - your presence is the present!
                </p>
                <p className='pb-3'>
                    <strong className='funky-font py-3'>RSVP Deadline:</strong><br></br>
                    Please send in your RSVP responses by the 15th November. Scroll down to submit your RSVP
                </p>
            </div>
        </div>
    )
}

export default Details;