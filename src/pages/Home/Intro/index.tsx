import {
	CoffeeItem,
	ImageContainer,
	IntroContainer,
	ItemsContainer,
	PackageItem,
	ShoppingCartItem,
	TimerItem,
	TitleContainer,
} from './styles';
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react';

export function Intro() {
	return (
		<IntroContainer>
			<TitleContainer>
				<div>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<h2>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</h2>
				</div>
				<ItemsContainer>
					<ShoppingCartItem>
						<span>
							<ShoppingCart size={16} />
						</span>
						Compra simples e segura
					</ShoppingCartItem>
					<PackageItem>
						<span>
							<Package size={16} />
						</span>
						Entrega rápida e rastreada
					</PackageItem>
					<TimerItem>
						<span>
							<Timer size={16} />
						</span>
						Embalagem mantém o café intacto
					</TimerItem>
					<CoffeeItem>
						<span>
							<Coffee size={16} />
						</span>
						O café chega fresquinho até você
					</CoffeeItem>
				</ItemsContainer>
			</TitleContainer>
			<ImageContainer></ImageContainer>
		</IntroContainer>
	);
}
