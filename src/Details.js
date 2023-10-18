import jason from './jason0.jpg'

function Details() {
    return (
        <div className='flex flex-row'>
            <div className='basis-1/2 md:basis-full'>
                <img src={jason} alt="Jason" className="object-scale-down"/>
            </div>
            <div className='basis-1/2 xs:basis-full py-3'>
                <h2 className="funky-font text-center">DETAILS</h2>
                <p>
                    <strong className='funky-font'>Timings:</strong><br></br>
                    Saturday 9th December from 6pm till midnight
                </p>
                <p>
                    <strong className='funky-font'>Location:</strong><br></br>
                    <p>
                        115 Chancery Lane <br></br>
                        London, WC2A 1PP
                    </p>
                    <p>
                        Underground: <br></br>
                        Chancery Lane (6 min walk) <br></br>
                        Temple (7 min walk)
                    </p>
                </p>
                <p>
                    <strong className='funky-font pt-2'>Dress Code:</strong><br></br>
                    Your best sparkly party gear!
                </p>
                <p>
                    <strong className='funky-font'>Catering:</strong><br></br>
                    There will be food, wine and a <italic>cheeky cocktail</italic> for all
                </p>
                <p>
                    <strong className='funky-font'>Gifts:</strong><br></br>
                    Please don't bring any birthday gifts - your presence is the present!
                </p>
                <p>
                    <strong className='funky-font'>RSVP Deadline:</strong><br></br>
                    Please send in your RSVP responses by the 15th November. Scroll down to submit your RSVP
                </p>
            </div>
        </div>
    )
}

export default Details;