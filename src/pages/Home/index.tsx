import { HomeContainer } from './styles';
import { Intro } from './Intro';
import { List } from './List';

export function Home() {
	return (
		<HomeContainer>
			<Intro />
			<List />
		</HomeContainer>
	);
}
