import React from 'react';

const ExtraInfo = ({city}) => {
	if( !city ) {
		return (<div>Ingen vald stad!</div>);
	}
	return (
		<div>Du har valt staden: <strong>{city}</strong></div>
	)
}

export default ExtraInfo;
