import { styled } from 'styled-components';
import Image from './../../../assets/Imagem.svg';

export const IntroContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	width: 100%;
	height: 34rem;
	flex-shrink: 0;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	height: 360px;
	gap: 16px;

	h1 {
		width: 36.75rem;

		color: ${(props) => props.theme['base-title']};
		align-self: stretch;

		font-family: Baloo 2;
		font-size: 48px;
		font-style: normal;
		font-weight: 800;
		line-height: 130%;
		text-align: justify;
	}

	h2 {
		width: 36.75rem;
		color: ${(props) => props.theme['base-subtitle']};

		/* Text/Regular L */
		font-family: Roboto;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%; /* 26px */
	}
`;

export const ItemsContainer = styled.div`
	width: 600px;
	height: 84px;
	flex-shrink: 0;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
`;

const BaseItem = styled.div`
	display: flex;
	justify-content: flex-start;

	width: 290px;
	align-items: center;
	gap: 12px;

	font-size: 0.875rem;

	span {
		display: flex;
		padding: 8px;
		justify-content: center;
		align-items: center;
		gap: 8px;

		border-radius: 50%;

		color: ${(props) => props.theme.white};
	}
`;

export const ShoppingCartItem = styled(BaseItem)`
	span {
		background: ${(props) => props.theme['yellow-dark']};
	}
`;

export const PackageItem = styled(BaseItem)`
	span {
		background: ${(props) => props.theme['base-text']};
	}
`;

export const TimerItem = styled(BaseItem)`
	span {
		background: ${(props) => props.theme.yellow};
	}
`;

export const CoffeeItem = styled(BaseItem)`
	span {
		background: ${(props) => props.theme.purple};
	}
`;

export const ImageContainer = styled.div`
	width: 29.75rem;
	height: 22.5rem;
	flex-shrink: 0;

	background: url(${Image}),
		${(props) => props.theme.background} 50% / contain no-repeat;
`;
