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
	const { page, humans, pagination, loading, error, changePage } = useHumans()

	const handleRender = () => {
		if (error) return <ErrorMessage />
		return (
			<>
				{humans && <CharacterList title="Humans" characters={humans} />}
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

const useHumans = () => {
	const [page, setPage] = useState<number>(1)
	const [characters, setCharacters] = useState<Characters | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const getHumans = async (page: number) => {
		try {
			setLoading(true)
			const response = await GraphQLClient.getHumans(page)
			setCharacters(response.characters)
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	const changePage = (_: any, value: number) => {
		setPage(value)
		getHumans(value)
	}

	useEffect(() => {
		getHumans(page)
	}, [page])

	return {
		changePage,
		humans: characters?.results,
		pagination: characters?.pagination,
		page,
		loading,
		error,
	}
}
