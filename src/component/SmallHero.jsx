const SmallHero = (info) => {
    return (
        <div className="d-block d-md-none md-info px-3 text-center">
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
                {info.info.slogan
                    ?
                    <>
                        <p className="mt-5 display-6 fw-semibold fs-3">Let see what I have got</p>
                        <span className="bi bi-arrow-down fs-3"></span>
                    </>

                    :

                    ''
                }

            </div>
        </div>
    );
}

export default SmallHero;