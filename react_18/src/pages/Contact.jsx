import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn }
  from 'mdb-react-ui-kit';
import { BsPerson } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BiBookOpen } from 'react-icons/bi';
import { SlNote } from 'react-icons/sl';
import { FiPhoneCall } from 'react-icons/fi';
import { BiHome } from 'react-icons/bi';



  

function Contact() {
    return (
        <main className='container'>
            <div className='contact row'>
                <div className='promo col-6' style={{backgroundColor: '#FF8298'}}>
                    <h1>Get in Touch</h1>
                    <p>Irure elit excepteur do excepteur quis velit adipisici aliqua minim quis ad do excepteur quis velit adipisicing id culpa.</p>
                    <div className='info row'>
                        <BiHome className="icon-touch"/><h4>Visit Us:</h4>
                        <AiOutlineMail className="icon-touch"/><p>Jalan Kp. Pamahan Np. 60 RT.03 / RW.009,Jatiasih Kec.Jatiasih,Kota Bekasi,Jawa Barat</p>
                        <FiPhoneCall className="icon-touch"/><p>DREWHITEOFFICIAL@GMAIL.COM</p>
                    </div>
                </div>
                <div className='feedback col-6'>
                   
                    <div className="form-floating">
                                <input type="text" className="form-control form-feedback" id="floatingInput" placeholder="kakak slim"></input>
                                <label for="floatingInput"><BsPerson className="icon-custom"/>Name</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control form-feedback" id="floatingInput" placeholder="name@example.com"></input>
                                <label for="floatingInput"><AiOutlineMail className="icon-custom"/>Email</label>
                            </div>
         
                            <div className="form-floating">
                                <input type="text" className="form-control form-feedback" id="floatingInput" placeholder="089234456"></input>
                                <label for="floatingInput"><FaPhoneAlt className="icon-custom"/>Phone</label>
                            </div>
                        <div className="form-floating">
                            <input type="text" className="form-control form-feedback" id="floatingInput" placeholder="Password"></input>
                            <label for="floatingInput"><BiBookOpen className="icon-custom"/>About</label>
                        </div> 
                        <div className="form-floating">
                            <input type="text" className="form-control form-feedback"style={{width: '399px', height: '136px'}} id="floatingInput" placeholder="Password"></input>
                            <label for="floatingInput"><SlNote className="icon-custom"/>Tell us Here</label>
                        </div>
                        <button className="form-floating btn-feedback p-2 mb-2" size="lg" style={{backgroundColor: '#DA2A52', color: '#fff'}}>Send Feedback</button>

                </div>

            </div>

        </main>
        );
    }
    

export default Contact;
