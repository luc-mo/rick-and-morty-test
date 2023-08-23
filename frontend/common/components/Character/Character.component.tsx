import { CharacterEntity } from '@/common/types/character'
import './Character.styles.css'

export default function Character({ name, image, gender, status, species }: CharacterEntity) {
	return (
		<article className='character'>
			<img className='character__image' src={image} alt={name} />
			<div className='character__info-container'>
				<h3 className='character__name'>{name}</h3>
				<p className='character__info character__species'>
					<span>Species:</span>
					<span>{species}</span>
				</p>
				<p className='character__info character__status'>
					<span>Status:</span>
					<span>{status}</span>
				</p>
				<p className='character__info character__gender'>
					<span>Gender:</span>
					<span>{gender}</span>
				</p>
			</div>
		</article>
	)
}
