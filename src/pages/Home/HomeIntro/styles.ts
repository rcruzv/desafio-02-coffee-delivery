import styled from 'styled-components';

export const IntroContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 3.5rem;

	@media ${({ theme }) => theme.breakpoints.lg} {
		flex-direction: row;
		height: 544px;
	}
`;

export const IntroSection = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
`;

export const IntroTitle = styled.h1`
	font-family: ${({ theme }) => theme.fonts.secondary};
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.base.title};
	font-weight: 800;
	text-align: center;

	@media ${({ theme }) => theme.breakpoints.xs} {
		font-size: 2.25rem;
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		font-size: 2.5rem;
	}

	@media ${({ theme }) => theme.breakpoints.md} {
		font-size: 2.75rem;
	}

	@media ${({ theme }) => theme.breakpoints.lg} {
		font-size: 3rem;
		text-align: left;
	}
`;

export const IntroSubtitle = styled.p`
	margin-top: 1rem;
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.base.subtitle};
	text-align: center;

	@media ${({ theme }) => theme.breakpoints.sm} {
		font-size: 1.125rem;
	}

	@media ${({ theme }) => theme.breakpoints.lg} {
		font-size: 1.25rem;
		text-align: left;
	}
`;

export const IntroItems = styled.div`
	margin-top: 4.125rem;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1.25rem 2.5rem;

	@media ${({ theme }) => theme.breakpoints.xs} {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const IntroItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	@media ${({ theme }) => theme.breakpoints.xl} {
		white-space: nowrap;
	}
`;

interface IntroItemIconContainerProps {
	color: string;
}

export const IntroItemIconContainer = styled.div<IntroItemIconContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	flex-shrink: 0;
	aspect-ratio: 1 / 1;
	width: 2rem;
	border-radius: 50%;

	background-color: ${({ color }) => color};
`;

export const IntroImageContainer = styled.img`
	width: min(100%, 476px);
	object-fit: contain;
`;

