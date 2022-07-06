const Card = (props) => {    
   
        const {monster} = props;
        return (
            <div className='kity-posts'>
                <img src={`https://robohash.org/${monster.id}?set=set2`} alt={`kitty ${monster.name}`} className='max-img' />
                <h2 key={monster.id}>{monster.name}</h2>
                <p className='kity-email'>{monster.email}</p>  
            </div>
        )
}

export default Card;