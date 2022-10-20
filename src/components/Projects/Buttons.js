function Buttons({filteredProjects}) {
    return (
        <div className="btn_cities">
            <button className='btn_project' onClick={() => filteredProjects('Madrid')}>Madrid</button>
            <button className='btn_project' onClick={() => filteredProjects('Munich')}>Munich</button>
            <button className='btn_project' onClick={() => filteredProjects('Vienna')}>Vienna</button>
            <button className='btn_project' onClick={() => filteredProjects('Amsterdam')}>Amsterdam</button>
            <button className='btn_project' onClick={() => filteredProjects('London')}>London</button>
        </div>
    )
}

export default Buttons;