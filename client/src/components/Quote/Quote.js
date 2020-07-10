import React, {Component} from 'react';

import axios from 'axios';
import './Quote.css';

import NameIcon from '../Images/Logos/name.svg';
import CallIcon from '../Images/Logos/call.svg';
import MailIcon from '../Images/Logos/mail.svg';
import MessageIcon from '../Images/Logos/message.svg';

class Quote extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            phone: '',
            company: '',
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

        const { name, phone, company, email, message} = this.state

        const form = await axios.post('/api/form', {
            name,
            phone,
            company,
            email,
            message
        })

        
    }



    render() {
        return (
            <div className="Quote">
            <div className="container">
            <div className="firstsentence">
                <p>ASK FOR A QUOTATION
                AND SEE THE DIFFERENCE</p>
            </div>
            <div className="secondsentence">
                <p>Our international experts have a broad range of
                   proven experience across multiple industries and
                   sectors and at the best possible rates.
                </p>
            </div>
            <form onSubmit={this.handleSubmit} ref="form">
	<div className="row input-containers">
			<div className="col-md-6 col-sm-12 myinput">
				<div className="styled-inputs">
                    <div className="flexies">
                    <img src={NameIcon} className="img-fluid" alt=""/>
                    <input 
                    type="text" 
                    name="name"
                    required
                    onChange={this.handleChange}  
                    />
					<label>Name</label>
                    </div> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-inputs">
                    <div className="flexies">
                    <img src={MailIcon} className="img-fluid" alt=""/>
                    <input 
                    type="email"
                    name="email" 
                    required 
                    onChange={this.handleChange}
                    />
					<label>Email</label>
                    </div> 
				</div>
			</div>
    </div>
    <div className="row input-containers">
			<div className="col-md-6 col-sm-12">
				<div className="styled-inputs" style={{float: 'right'}}>
                    <div className="flexies">
                    <img src={CallIcon} className="img-fluid" alt=""/>
                    <input 
                    type="text"
                    name="phone" 
                    required 
                    onChange={this.handleChange}
                    />
					<label>Phone number</label>
                    </div>  
				</div>
			</div>
            <div className="col-md-6 col-sm-12">
				<div className="styled-inputs" style={{float: 'right'}}>
                    <div className="flexies">
                    <img src={MessageIcon} className="img-fluid" alt=""/>
                    <input 
                    type="text"
                    name="company" 
                    required 
                    onChange={this.handleChange}
                    />
					<label id="label">Company</label>
                    </div>  
				</div>
			</div>
    </div>
    <div className="row input-containers">
			<div className="col-xs-12 col-sm-12 col-lg-12">
				<div className="styled-input-text-area" style={{float: 'right'}}>
                    <textarea
                    className="text-area-replace" 
                    required
                    name="message"
                    onChange={this.handleChange}
                    ></textarea>
					<label>Enter your message</label>
				</div>
			</div>
	</div>
    <div className="row input-containers">
            <div className="col-md-3 col-lg-3"/>
			<div className="col-xs-6 col-md-6 col-lg-6">
				<button className="submit-button">Submit</button>
			</div>
            <div className="col-md-3 col-lg-3"/>
            </div>

</form>
            
            
            </div>
            </div>
        );
    }
}

export default Quote;