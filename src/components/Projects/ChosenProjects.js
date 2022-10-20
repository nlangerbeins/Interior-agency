
function ChosenProjects({projectToChoose}) {
    return (
        <div className="project_container">
            {projectToChoose.map(element => {
                const {idProject, nameProject, searchItem, imageProject} = element;

                return (
                    <div data-aos="fade-up" data-aos-duration="1500"  key={idProject} className="project_block">
                        <div className="project_img">
                            <img src={imageProject}/>
                        </div>
                        <p className="project_heading">{nameProject}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ChosenProjects;

