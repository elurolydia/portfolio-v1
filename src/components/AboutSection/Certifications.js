const Certifications = () => {
    const myCert = [
        {text : "What is Programming?"},
        {text : "HTML, CSS, JavaScript: The Big Picure"},
        {text : "HTML Fundamentals"},
        {text : "Intrduction to CSS"},
        {
            // eslint-disable-next-line no-script-url
            text : "JavaScript: Getting Stared"
        },
        {text : "CSS Positioning"},
        {text : "Introduction to CSS for Designers"},
        {text : "Git: The Big Picture"},
        {text : "Mobile First Responsive Web Design"}
    ]

    return (
        <div className="about_card Education">
            <h3>Certifications</h3>
                    <p>Certificate of Course Completion in Google Africa Developers Training Program</p>
                    <p>The courses include:</p>
                    {myCert.map(cert => 
                        <ul className="no_bullet">
                            <li>{cert.text}</li>
                        </ul>
                    )}
                    <span>and more...</span>
        </div>
    )
}

export default Certifications
