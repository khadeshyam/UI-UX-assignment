import React, { useState } from 'react';
import Event from './Event';

const Events = ({ initialEvents }) => {
	
	return (
		<div className="content">
			{initialEvents.map((event, index) => (
				<Event key={index} event={event} />
			))}
		</div>
	);
};

export default Events;