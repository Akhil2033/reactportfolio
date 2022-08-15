import React from "react";


class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            educationData: [],
        };
    }
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => 
            {
                this.setState({
                    educationData: json.education
                });
            })
    }

    render() {

        const { educationData } = this.state;
        return (
            <div id="eduLink" className="educationDiv">
                <h2 className="educationTitle">Education</h2>
                <div className="educationList">
                    {educationData.map(e => (
                            <div key={e.id} className="educationTile">
                                <h3>{e.title}</h3>
                                <div className="einfo">{e.school}</div>
                                <div className="einfo">Graduated: {e.end_date}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

}

export default Education;