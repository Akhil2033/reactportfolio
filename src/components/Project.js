import React from "react";


class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: [],
        };
    }
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => 
            {
                this.setState({
                    projectData: json.projects
                });
            })
    }

    render() {

        const { projectData } = this.state;
        return (
            <div className="projectDiv">
                <h2 className="projectHeading">PROJECTS</h2>
                <div className="projectList">
                {projectData.map(p => (
                        <div key={p.id} className="ProjectTile">
                            <h3>{p.title}</h3>
                            <p>{p.content}</p>
                        </div>
                    ))
                }
                </div> 
            </div>
        );
    }

}

export default Project;