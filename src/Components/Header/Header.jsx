import React from 'react';
import stls from './Header.module.css'
import { NavLink } from 'react-router-dom';
import FindCityHook from './FindCity/FindCityHook';
import cn from 'classnames'

export const makeChecked = () => {
	const input = document.getElementById('rowToggle')
	input.checked = false
}


const Header = ({ pathName }) => {
	return (
		<div className={stls.header}>

			{document.documentElement.clientWidth <= 479 && <input type="checkbox" id='rowToggle' className={stls.rowToggle} />}
			{document.documentElement.clientWidth <= 479 && <label className={stls.labelToggle} htmlFor='rowToggle'>Menu</label>}
			<div className={stls.row}>
				<div onClick={makeChecked} className={cn(stls.element, { [stls.activeElement]: pathName === '/current' })}><NavLink to='/current'><div> Current</div></NavLink></div>
				<div onClick={makeChecked} className={cn(stls.element, { [stls.activeElement]: pathName === '/today' })}><NavLink to='/today'><div> Today</div></NavLink></div>
				<div onClick={makeChecked} className={cn(stls.element, { [stls.activeElement]: pathName === '/tomorrow' })}><NavLink to='/tomorrow'><div> Tomorrow</div></NavLink></div>
				<div onClick={makeChecked} className={cn(stls.element, { [stls.activeElement]: pathName === '/dayAfterTomorrow' })}><NavLink to='/dayAfterTomorrow'><div> Day after tomorrow</div></NavLink></div>
				<div className={stls.element}><FindCityHook /></div>
			</div>





		</div>
	)
}

export default Header