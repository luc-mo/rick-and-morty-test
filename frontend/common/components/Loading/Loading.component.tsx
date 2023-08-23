import { Backdrop, CircularProgress, styled } from '@mui/material'

export interface LoadingProps {
	open: boolean
}

export default function Loading({ open }: LoadingProps) {
	return (
		<StyledBackdrop
			sx={{ color: '#0099ff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={open}
		>
			<CircularProgress color='inherit' />
		</StyledBackdrop>
	)
}

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
	color: '#0099ff',
	zIndex: theme.zIndex.drawer + 1,
}))
