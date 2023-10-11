import { useState } from 'react';

function App() {
	const [value, setValue] = useState<number>(0);

	return (
		<div>
			<div className='App' style={{ display: 'flex', gap: '15px' }}>
				<div onClick={() => setValue(0)}>Accueil</div>
				<div onClick={() => setValue(1)}>Hangeuls</div>
				<div>
					<div onClick={() => setValue(2)}>Chiffres</div>
					<div onClick={() => setValue(3)}>Coréens</div>
					<div onClick={() => setValue(4)}>Sino-coréens</div>
				</div>
				<div onClick={() => setValue(5)}>Vocabulaire</div>
			</div>

			<div>
				{value === 0 && <div>Page d'accueil</div>}
				{value === 1 && <div>Hangeuls</div>}
				{value === 2 && <div>Chiffres</div>}
				{value === 3 && <div>Chiffres coréens</div>}
				{value === 4 && <div>Chiffres sino-coréens</div>}
				{value === 5 && <div>Vocabulaire</div>}
			</div>
		</div>
	);
}

const SinoKorean = () => {
	return <>Nombres sino-coréens</>;
};

export default App;
