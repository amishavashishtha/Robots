import React from 'react';


const Card = ({id,name,email})=>{
 // const {id,name,email} =props;
	return (
		<div className='bg-light-green tc dib br3 pa0.5 ma2 grow bw2 shadow-5'>
			<img alt = 'robots' src={`https://robohash.org/${id}?200*200`}/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
	     </div>

		);
}

export default Card;