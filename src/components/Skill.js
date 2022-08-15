import React from "react";


class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skillData: [],
        };
    }
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => 
            {
                this.setState({
                    skillData: json.skill
                });
            })
    }

    render() {
        const { skillData } = this.state;
        return (
            <div className="skillDiv">
                <h2 className="skillTitle">SKILLS</h2>
                <div className="skillList">
                    {skillData.map(s => (
                        <div key={s.id} className="skillTile">
                            <h3>{s.title}</h3>
                            <img src={s.image} alt={s.title + "logo"} height="150" />
                        </div>
                    ))
                    }
                </div>
            </div>
        );
    }

}

export default Skill;