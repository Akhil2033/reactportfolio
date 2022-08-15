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
            <div className="educationDiv">
                    <h2 className="EducationTitle">Education</h2>
                    <div className="educationTile">
                        {educationData.map(e => (
                                <div key={e.id}>
                                    <h3>{e.title}</h3>
                                    <div>{e.school}</div>
                                    <div>Graduated: {e.end_date}</div>
                                </div>
                            ))
                        }
                    </div>
            </div>
        );
    }

}

export default Education;