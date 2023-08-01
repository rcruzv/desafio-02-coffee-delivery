import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	padding: 2rem 10rem;
	justify-content: space-between;
	align-items: center;

	img {
		width: 5.3rem;
		height: 2.5rem;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 0.75rem;

		button {
			display: flex;
			padding: 0.5rem;
			justify-content: center;
			align-items: center;
			gap: 0.25rem;

			border-radius: 6px;
			background: ${(props) => props.theme['purple-light']};
			color: ${(props) => props.theme['purple']};
		}

		a {
			display: flex;
			padding: 0.5rem;
			justify-content: center;
			align-items: center;
			gap: 0.25rem;

			background: ${(props) => props.theme['yellow-light']};
			color: ${(props) => props.theme['yellow-dark']};
		}
	}
`;
