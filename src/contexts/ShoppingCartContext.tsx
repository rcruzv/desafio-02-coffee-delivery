import { ReactNode } from 'react';

interface CyclesContextProviderProps {
	children: ReactNode;
}

export function ShoppingCartContextProvider({
	children,
}: CyclesContextProviderProps) {
	return <div>{children}</div>;
}
