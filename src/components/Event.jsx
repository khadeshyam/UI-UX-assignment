import React, { useState } from 'react';
import axios from 'axios';

const Event = ({ event }) => {
	const [box3Color, setBox3Color] = useState('yellow');
	const [box3Text, setBox3Text] = useState('U');

	const handleBox3Click = async () => {
		// Change color and text of Box 3
		setBox3Color('green');
		setBox3Text('A');
	    //Mock API call 
		try {
			const response = await axios.post('http://your-api-endpoint.com/events', {
			  text: 'A'
			});
			console.log(response.data);
		  } catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="event">
			<div className="box-container">
				<div className="box1">{event.ID}</div>
				<div className={`box2 ${event.MessageType}`}>{event.MessageType}</div>
				<div className="box3" style={{ backgroundColor: box3Color }} onClick={handleBox3Click}>
					{box3Text}
				</div>
			</div>
			<div>
				<div className={`text1 category-${event.MessageCategory}`}>{event.Text1}</div>
				<div className={`text2 category-${event.MessageCategory}`}>{event.Text2}</div>
			</div>
		</div>
	);
};

export default Event;