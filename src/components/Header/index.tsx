import { HeaderContainer } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from './../../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
	return (
		<HeaderContainer>
			<img
				src={logo}
				alt=''
			/>
			<nav>
				<button type='button'>
					<MapPin
						weight='fill'
						size={22}
					/>
					Porto Alegre, RS
				</button>
				<NavLink
					to='/checkout'
					title='Shopping Cart'
				>
					<ShoppingCart
						weight='fill'
						size={22}
					/>
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
