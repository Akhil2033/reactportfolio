import React from "react";


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: [],
        };
    }
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => 
            {
                this.setState({
                    contactData: json.contact
                });
            })
    }

    render() {
        const { contactData } = this.state;
        return (
            <div className="contactDiv">
                <h2 className="contactTitle">Contact Me</h2>
                <div className="contactInfo">
                    {contactData.map(c => (
                        <div key={c.id}> 
                            <span>{c.title}</span>
                            <span>{c.Ph_no}</span> 
                            <span>{c.email}</span> 
                        </div>
                    ))
                    }
                </div>
            </div>
        );
    }

}
export default Contact;