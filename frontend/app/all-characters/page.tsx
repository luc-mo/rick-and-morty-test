'use client'
import { useEffect, useState } from 'react'
import { GraphQLClient } from '@/common/services/graphQLClient'
import { Characters } from '@/common/types/graphQLClient'
import { Navbar } from '@/common/components/Navbar'
import { CharacterList } from '@/common/components/CharacterList'
import { Pagination } from '@/common/components/Pagination'
import { Loading } from '@/common/components/Loading'
import { ErrorMessage } from '@/common/components/ErrorMessage'

export default function Home() {
	const { page, characters, pagination, loading, error, changePage } = useCharacters()

	const handleRender = () => {
		if (error) return <ErrorMessage />
		return (
			<>
				{characters && <CharacterList title="All characters" characters={characters} />}
				{pagination && <Pagination page={page} pages={pagination.pages} changePage={changePage} />}
			</>
		)
	}

	return (
		<main>
			<Navbar />
			<section className="characters">
				<Loading open={loading} />
				{handleRender()}
			</section>
		</main>
	)
}

const useCharacters = () => {
	const [page, setPage] = useState<number>(1)
	const [characters, setCharacters] = useState<Characters | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const getCharacters = async (page: number) => {
		try {
			setLoading(true)
			const response = await GraphQLClient.getAllSpecies(page)
			setCharacters(response.characters)
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	const changePage = (_: any, value: number) => {
		setPage(value)
		getCharacters(value)
	}

	useEffect(() => {
		getCharacters(page)
	}, [page])

	return {
		changePage,
		characters: characters?.results,
		pagination: characters?.pagination,
		page,
		loading,
		error,
	}
}
