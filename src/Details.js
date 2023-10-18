import jason from './jason0.jpg'

function Details() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 content-center'>
            <div className='p-3'>
                <img src={jason} alt="Jason" className="img-thumbnail img-fluid rounded"/>
            </div>
            <div className='p-3'>
                <p className="funky-font text-center py-3 mt-2 text-xl">DETAILS</p>
                <p className='pb-3'>
                    <strong className='funky-font py-3'>Timings:</strong><br></br>
                    Saturday 9th December from 6pm till midnight
                </p>
                <p className='pb-3'>
                    <strong className='funky-font py-3'>Location:</strong><br></br>
                    <a href='https://baranis.co.uk/' target='_blank'>Baranis</a>
                    <p>
                        115 Chancery Lane <br></br>
                        London, WC2A 1PP
                    </p>
                    <p>
                        Underground: <br></br>
                        Chancery Lane (6 min walk) <br></br>
                        Temple (7 min walk)
                    </p>
                    <a href='https://goo.gl/maps/v5LiI' target='_blank'>Google Maps</a>
                </p>
                <p className='pb-3'>
                    <strong className='funky-font py-3'>Dress Code:</strong><br></br>
                    Your best sparkly party gear!
                </p>
                <p className='pb-3'>
                    <strong className='funky-font py-3'>Catering:</strong><br></br>
                    There will be food, wine and a <italic>cheeky cocktail</italic> for all
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