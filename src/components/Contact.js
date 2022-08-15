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
            <div id="conLink" className="contactDiv">
                <h2 className="contactTitle">Contact Me</h2>
                <div className="contactInfo">
                    {contactData.map(c => (
                        <div key={c.id}> 
                            <div id="cInfo">{c.title}</div>
                            <div id="cInfo">{c.Ph_no}</div> 
                            <div id="cInfo">{c.email}</div> 
                        </div>
                    ))
                    }
                </div>
            </div>
        );
    }

}
export default Contact;