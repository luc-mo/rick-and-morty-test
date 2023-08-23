import './CharacterList.styles.css'
import { CharacterEntity } from '@/common/types/character'
import { Character } from '../Character'

export interface CharacterListProps {
	title: string
	characters: CharacterEntity[]
}

export default function CharacterList({ title, characters }: CharacterListProps) {
	return (
		<div>
			<h2 className='characters__title'>{title}</h2>
			<ul className='characters__list'>
				{characters.map((character) => (
					<li key={character.id}>
						<Character {...character} />
					</li>
				))}
			</ul>
		</div>
	)
}
