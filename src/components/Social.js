import React from "react";



class Social extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socialData: [],
        };
    }
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => 
            {
                this.setState({
                    socialData: json.social
                });
            })
    }

    render() {
        const { socialData } = this.state;
        return (
            <div className="socialDiv">
                <div className="socialList">
                    <ul>
                        {socialData.map(s => (
                            <li key={s.id}><img src={s.image} alt={s.title + "logo"} height="50" /></li>
                        ))
                        }
                    </ul>

                </div>

            </div>
        );
    }

}

export default Social;