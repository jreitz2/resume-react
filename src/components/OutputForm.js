const OutputForm = (props) => {
    const { info } = props;

    return ( 
        <div className="output-form">
            <div className="personal-info">
                <h2>{info.name}</h2>
                <p>{info.email}</p>
                <p>{info.phone}</p>
            </div>
            <br></br>
            <div>
                <h2>Introduction</h2>
                <p className="intro">{info.intro}</p>
            </div>
            <br></br>
            <div>
                <h2>Experience</h2>
                <div className="job">
                    <p>{info.position} - {info.employer}</p>
                    <p>{info.start} - {info.end}</p>
                </div>
                {props.addJob && (
                    <div className="job">
                        <p>{info.position2} - {info.employer2}</p>
                        <p>{info.start2} - {info.end2}</p>
                    </div>
                )}
            </div>
            <br></br>
            <div>
                <h2>Education</h2>
                <div className="school">
                    <p>{info.degree} - {info.school}</p>
                    <p>{info.graduation}</p>
                </div>
            </div>
            <br></br>
            <div>
                <h2>Skills</h2>
                <p>{info.skills}</p>
            </div>
        </div>
     );
}
 
export default OutputForm;