import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import IntroImage from '../../../assets/Imagem.svg';
import {
	IntroContainer,
	IntroImageContainer,
	IntroItem,
	IntroItemIconContainer,
	IntroItems,
	IntroSection,
	IntroSubtitle,
	IntroTitle,
} from './styles';

export const HomeIntro: React.FC = () => {
	const theme = useTheme();

	return (
		<IntroContainer>
			<IntroSection>
				<IntroTitle>
					Encontre o café perfeito para qualquer hora do dia
				</IntroTitle>

				<IntroSubtitle>
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
					hora
				</IntroSubtitle>

				<IntroItems>
					<IntroItem>
						<IntroItemIconContainer color={theme.colors.yellow.dark}>
							<ShoppingCart
								size={16}
								color={theme.colors.white}
								weight='fill'
							/>
						</IntroItemIconContainer>
						Compra simples e segura
					</IntroItem>

					<IntroItem>
						<IntroItemIconContainer color={theme.colors.base.text}>
							<Package
								size={16}
								color={theme.colors.white}
								weight='fill'
							/>
						</IntroItemIconContainer>
						Embalagem mantém o café intacto
					</IntroItem>

					<IntroItem>
						<IntroItemIconContainer color={theme.colors.yellow.DEFAULT}>
							<Timer
								size={16}
								color={theme.colors.white}
								weight='fill'
							/>
						</IntroItemIconContainer>
						Entrega rápida e rastreada
					</IntroItem>

					<IntroItem>
						<IntroItemIconContainer color={theme.colors.purple.DEFAULT}>
							<Coffee
								size={16}
								color={theme.colors.white}
								weight='fill'
							/>
						</IntroItemIconContainer>
						O café chega fresquinho até você
					</IntroItem>
				</IntroItems>
			</IntroSection>

			<IntroImageContainer
				src={IntroImage}
				alt='Café e copo de café'
			/>
		</IntroContainer>
	);
};

