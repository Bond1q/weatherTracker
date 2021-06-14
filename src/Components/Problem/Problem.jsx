import React from 'react';
import stls from './Problem.module.css'

export const Problem = () => {
	return (
		<div>
			<div className={stls.problem}>
				<div className={stls.incorrect}>The location is incorrect.</div>
				<div className={stls.recommendation}>Please use English and write only correct city name.</div>
			</div>
		</div>
	)
}