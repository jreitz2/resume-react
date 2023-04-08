import { useState } from "react";

const InputForm = (props) => {

    const handleChange = e => {
        const {name, value} = e.target;
    
        props.setInfo(prevState => ({
                ...prevState,
                [name]: value
        }))
      }
      
    
    const handleAddJob = () => {
        props.setAddJob(true);
    };

    return ( 
        <div className="input-form">
            <h2>Personal Info</h2>
            <form>
                <label>Full name:</label>
                <input 
                    type="text"
                    name="name"
                    value={props.name}
                    onChange={handleChange}
                />

                <label>Email:</label>
                <input 
                    type="email"
                    name="email"
                    value={props.email}
                    onChange={handleChange}
                />

                <label>Phone:</label>
                <input 
                    type="tel" 
                    name="phone"
                    value={props.phone}
                    onChange={handleChange}
                />

                <label>Introduction:</label>
                <br></br>
                <textarea
                    name="intro"
                    rows={4}
                    cols={40}
                    value={props.intro}
                    onChange={handleChange}
                 />
            </form>
            
        <h2>Experience</h2>
            <form>
                <label>Exployer:</label>
                <input 
                    type="text"
                    name="employer"
                    value={props.employer}
                    onChange={handleChange}
                />
                <label>Position:</label>
                <input 
                    type="text"
                    name="position"
                    value={props.position}
                    onChange={handleChange} 
                />
                <label>Start:</label>
                <input 
                    type="date"
                    name="start"
                    value={props.start}
                    onChange={handleChange}
                />
                <label>End:</label>
                <input 
                    type="date"
                    name="end"
                    value={props.end}
                    onChange={handleChange}
                />

                {props.addJob && (
                    <>
                    <br></br>
                    <label>Exployer:</label>
                    <input 
                        type="text"
                        name="employer2"
                        value={props.employer}
                        onChange={handleChange}
                    />
                    <label>Position:</label>
                    <input 
                        type="text"
                        name="position2"
                        value={props.position}
                        onChange={handleChange} 
                    />
                    <label>Start:</label>
                    <input 
                        type="date"
                        name="start2"
                        value={props.start}
                        onChange={handleChange}
                    />
                    <label>End:</label>
                    <input 
                        type="date"
                        name="end2"
                        value={props.end}
                        onChange={handleChange}
                    />
                    </>
                )}
                
            </form>

            <button onClick={handleAddJob}>Add job</button>
        <h2>Education</h2>
            <form>
                <label>Degree:</label>
                <select name="degree" onChange={handleChange}>
                    <option value="Ph.D">Doctorate</option>
                    <option value="M.A.">Masters</option>
                    <option value="Bachelor">Bachelors</option>
                    <option value="High School Diploma">High School</option>
                </select>
                <label>School Name:</label>
                <input 
                    type="text" 
                    name="school"
                    value={props.school}
                    onChange={handleChange}
                />
                <label>Gradutation Date:</label>
                <input 
                    type="date"
                    name="graduation"
                    value={props.graduation}
                    onChange={handleChange}
                />
            </form>
        <h2>Skills</h2>
            <form>
                <textarea 
                    cols="40" 
                    rows="4"
                    name="skills"
                    value={props.skills}
                    onChange={handleChange}
                ></textarea>
            </form>

        </div>
     );
}
 
export default InputForm;