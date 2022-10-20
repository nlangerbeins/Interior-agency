function Team ({teamPersonal}) {

    return (
        <div className="team_container">
            
            {teamPersonal.map(element => {
                const {idTeam, name, titel, image} = element;
            
            return (
                <div data-aos="fade-up" data-aos-duration="1500"  key={idTeam} className="team_block">
                    <div className="team_img">
                        <img src={image} alt="person"/>
                    </div>
                    <div className="team_heading">
                        <p className="team_name">{name}</p>
                        <p className="team_titel">{titel}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Team;