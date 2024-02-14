import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         });
    //         setBtnText("Enable Light Mode");
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? 'black' : 'white'
    }

    return (
        <div className="container" style={myStyle}>
            <h2 className="my-3">About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong>TextUtils is a versatile tool designed to assist users in manipulating and managing text data effectively.</strong> It encompasses a range of functionalities aimed at streamlining tasks such as text processing, analysis, and formatting.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong>TextUtils is completely free to use, offering a comprehensive suite of text manipulation tools without any cost or subscription fees.</strong> Whether you're a developer, data analyst, or content creator, you can access all of TextUtils' powerful features without any financial constraints. Enjoy unlimited access to string manipulation, formatting and more, all at no charge.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Developer details
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                            <a href="https://www.linkedin.com/in/pratik-patra/">LinkedIn</a>
                            <img width="48" height="48" src="https://img.icons8.com/ios-filled/48/github.png" alt="github"/>
                            <a href="https://github.com/Pratik110/">GitHub</a>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                            <a href="https://www.instagram.com/pro.out">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
            </div> */}
        </div>
    )
}

