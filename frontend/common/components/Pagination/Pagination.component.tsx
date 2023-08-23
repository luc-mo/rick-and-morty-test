import { Pagination as SourcePagination, Stack } from '@mui/material'
import { styled } from '@mui/material'

export interface PaginationProps {
	page: number
	pages: number
	changePage: (event: any, value: number) => void
}

export default function Pagination({ page, pages, changePage }: PaginationProps) {
	return (
		<Stack>
			<StyledPagination count={pages} color='primary' onChange={changePage} page={page} />
		</Stack>
	)
}

const StyledPagination = styled(SourcePagination)(() => ({
	'& .MuiPaginationItem-root': {
		color: '#fff',
	},
	'& ul': {
		justifyContent: 'flex-end',
		gap: '1rem',
	},
}))
