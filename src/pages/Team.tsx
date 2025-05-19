import personIcon from '../assets/personIcon.png'
import PersonCard from '../components/PersonCard'
import '../css/Team.css'

const Team = () => {
  const teamMembers = [
    {id: 1, name: "Alan Simpson", title: "CEO", background: personIcon},
    {id: 2, name: "Hannah Simpson", title: "MiniSlam", background: personIcon},
    {id: 3, name: "Jared Simpson", title: "CTO", background: personIcon},
    {id: 4, name: "Auston Matthews", title: "Jared's Assistant", background: personIcon},
    {id: 5, name: "William Nylander", title: "Jared's Second Assistant", background: personIcon}
  ]

  return (
    <>
      <div className='our-team-content'>
        <h1 className='our-team-page-title'>Our Team</h1>
        <p className='our-team-context'>
        With decades of combined experience, the Grandslam team brings deep expertise across a wide range of asset classes—including private equity, real estate, private credit, hedge strategies, and public markets. Our collaborative approach blends rigorous analysis with long-term vision to uncover exceptional opportunities.
        </p>
      </div>
      
      <div className='team-grid'>
        {teamMembers.map((person)=> (
          <PersonCard 
            key = {person.id}
            person={person}
          />
        ))}
      </div>
    </>
  )
}

export default Team