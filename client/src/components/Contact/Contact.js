import React, {Component} from 'react';

import axios from 'axios';
import './Contact.css';

import NameIcon from '../Images/Logos/name.svg';
import CallIcon from '../Images/Logos/call.svg';
import MailIcon from '../Images/Logos/mail.svg';
import MessageIcon from '../Images/Logos/message.svg';

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            phone: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })}
    
    async handleSubmit(e) {
        e.preventDefault()
        this.refs.form.reset();

        const { name, phone, email, message} = this.state

        const form = await axios.post('/api/form', {
            name,
            phone,
            email,
            message
        })

        
    }



    render() {
        return (
            <div className="Contact">
            <div className="container">
            <div className="firstsentence">
                <p>SO GET IN
                    TOUCH</p>
            </div>
            <div className="secondsentence">
                <p>Simply let us know a bit
                    about what you are looking
                    for and your business need,
                    and we got it covered.
                </p>
            </div>
            <form onSubmit={this.handleSubmit} ref="form">
	
			<div className="col-md-12 col-sm-12 input-container row">
				<div className="styled-input">
                    <div className="flexie">
                    <img src={NameIcon} className="img-fluid" alt=""/>
                    <input 
                    type="text" 
                    name="name"
                    required
                    onChange={this.handleChange}  
                    />
					<label>Enter Name</label>
                    </div> 
				</div>
			</div>
			<div className="col-md-12 col-sm-12 input-container row">
				<div className="styled-input">
                    <div className="flexie">
                    <img src={MailIcon} className="img-fluid" alt=""/>
                    <input 
                    type="email"
                    name="email" 
                    required 
                    onChange={this.handleChange}
                    />
					<label>Enter Email</label>
                    </div> 
				</div>
			</div>
    
			<div className="col-md-12 col-sm-12 input-container row">
				<div className="styled-input" style={{float: 'right'}}>
                    <div className="flexie">
                    <img src={CallIcon} className="img-fluid" alt=""/>
                    <input 
                    type="text"
                    name="phone" 
                    required 
                    onChange={this.handleChange}
                    />
					<label>Enter Phone number</label>
                    </div>  
				</div>
			</div>

    <div className="row input-container">
			<div className="col-xs-9 col-sm-9 col-lg-8">
				<div className="styled-input-area" style={{float: 'right'}}>
                <div className="flexie-text-area">
                <img src={MessageIcon} className="img-fluid" alt=""/>    
                    <textarea 
                    required
                    name="message"
                    onChange={this.handleChange}
                    ></textarea>
					<label>Enter your message</label>
                    </div>
				</div>
			</div>
            <div className="col-xs-3 col-sm-3 col-lg-3"/>
	</div>
    <div className="row input-container">
            <div className="col-md-1 col-lg-1"/>
			<div className="col-xs-4 col-md-6 col-lg-6">
				<button className="submit-btn">Submit</button>
			</div>
            <div className="col-md-5 col-lg-5"/>
            </div>

</form>
            
            
            </div>
            </div>
            
        );
    }
}

export default Contact;