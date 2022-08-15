import React from "react";


class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bioData: [],
        };
    }
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => 
            {
                this.setState({
                    bioData: json.bio
                });
            })
    }

    render() {
        const { bioData } = this.state;
        return (
            <div id="bioLink" className="bioDiv">
                <h2 className="bioTitle">ABOUT</h2>
                <div className="bioInfo">
                    <span>Hello!</span>
                    {bioData.map(b => (
                        <p key={b.id}> {b.info} </p>
                    ))
                    }
                </div>
            </div>
        );
    }

}
export default Bio;