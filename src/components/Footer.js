import React from "react";

class Footer extends React.Component {
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

    render(){
        const { socialData } = this.state;
        let copy = String.fromCharCode(0x00a9);
        return (
            <footer id="footer">
                <div className="socialDiv">
                    <div className="socialList">
                        <ul>
                            {socialData.map(s => (
                                <li key={s.id}><a href={s.url}><img src={s.image} alt={s.title + "logo"} height="50" /></a></li>
                            ))
                            }
                        </ul>

                    </div>

                </div>
                <div>      
                    {copy} Akhilender Vallab,2022
                </div>
            </footer>
        );
    }
}

export default Footer;