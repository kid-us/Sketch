const Hero = (info) => {
    return (
        <>
            <div className="infos-container d-none d-lg-block">
                <div className={`${info.info.class} infos`}>
                    <h2 className='link-title display-5'>{info.info.name}</h2>
                    <p className='mt-4 fw-semibold small'>{info.info.description}</p>
                    {info.info.slogan
                        ?
                        <>
                            <p className="mt-5 display-6 fw-semibold fs-3">Take look at</p>
                            <span className="bi bi-arrow-right fs-3 "></span>
                        </>

                        :

                        ''
                    }

                    {info.info.id === 'contact'
                        ?
                        <>
                            <div className="text-center mt-5">
                                <a href="https://twitter.com/kidus_29" className="bi bi-twitter text-dark"></a>
                                <a href="https://www.instagram.com/_kid_us_/" className=" bi bi-instagram text-dark ms-4"></a>
                                <a href="https://github.com/kid-us/" className="bi bi-github text-dark mx-4"></a>
                                <a href="https://www.linkedin.com/in/kid-us/" className="bi bi-linkedin text-dark me-4"></a>
                            </div>

                             {/* Display only on large device */}

                            <p className='fw-semibold d-none d-md-block mt-5 bi-code small ms-2' title='Kidus'>
                            Developer 
                                 <a href="https://kidus-w.web.app" className='small text-danger'>
                                    &nbsp; Kidus
                                </a>
                            </p>
                        </>
                        :
                        ''
                    }

                    {info.info.id === 'pricing'
                        ?
                        <>

                            <span className="display-6 fw-semibold">A4</span>
                            <span className="ms-2 fw-semibold"> 500 etb</span> <br />
                            <span className="display-6 fw-semibold">A3</span>
                            <span className="ms-2 fw-semibold"> 1000 etb</span> <br />
                            <span className="display-6 fw-semibold">A2</span>
                            <span className="ms-2 fw-semibold"> 1500 etb</span> <br />

                        </>
                        :
                        ''
                    }

                </div>
            </div >

            <div className="d-lg-none d-lg-block md-info px-3 text-center">
                <div className={`${info.info.class}`}>
                    <h2 className='link-title display-5 text-center'>{info.info.name}</h2>
                    <p className='mt-4 fw-semibold '>{info.info.description}</p>
                    {info.info.id === 'contact'
                        ?
                        <>
                            <div className="text-center mt-5">
                                <a href="https://twitter.com/kidus_29" className="bi bi-twitter text-dark"></a>
                                <a href="https://www.instagram.com/_kid_us_/" className=" bi bi-instagram text-dark ms-4"></a>
                                <a href="https://github.com/kid-us/" className="bi bi-github text-dark mx-4"></a>
                                <a href="https://www.linkedin.com/in/kid-us/" className="bi bi-linkedin text-dark me-4"></a>
                            </div>
                        </>
                        :
                        ''
                    }

                    {info.info.id === 'pricing'
                        ?
                        <>

                            <span className="display-6 fw-semibold">A4</span>
                            <span className="ms-2 fw-semibold"> 500 etb</span> <br />
                            <span className="display-6 fw-semibold">A3</span>
                            <span className="ms-2 fw-semibold"> 1000 etb</span> <br />
                            <span className="display-6 fw-semibold">A2</span>
                            <span className="ms-2 fw-semibold"> 1500 etb</span> <br />

                        </>
                        :
                        ''
                    }
                    <p className="mt-5 display-6 fw-semibold fs-3">Let see what I have got</p>
                    <span className="bi bi-arrow-down fs-3"></span>

                </div>
            </div>
        </>
    );
}

export default Hero;
