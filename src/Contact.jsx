import React, { useState } from "react"

const Contact =()=>{

    const [details,setDetails]=useState({
        fname:"",
        phone:"",
        email:"",
        msg:""
    });

    const inputEvent=(event)=>{
            const {name,value}=event.target;
            setDetails((prevValue)=>{
                return{
                    ...prevValue,
                    [name]:value
                }
            });
    }

    const  Submit=(event)=>{
        event.preventDefault();
        alert(JSON.stringify(details));

    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={Submit}>
                            <div class="mb-3">

                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fname" value={details.fname} onChange={inputEvent} placeholder="Enter Your Name"/>

                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput2" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput2" name="phone" value={details.phone} onChange={inputEvent} placeholder="Enter Your Phone Number"/>

                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput3" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput3" name="email" value={details.email} onChange={inputEvent} placeholder="name@example.com"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={details.msg} onChange={inputEvent} rows="3"></textarea>
                            </div>

                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;