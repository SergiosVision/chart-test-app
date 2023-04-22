import { SeriesOptionsType } from 'highcharts'
import { observer } from 'mobx-react-lite'
import { FC, useEffect, useMemo } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import { useParams } from 'react-router-dom'

import WeeklyCommitCountChartView from './view/WeeklyCommitCountChartView'
import { WeeklyCommitCountChartViewModel } from './viewModel'

interface Props {
	viewModel: WeeklyCommitCountChartViewModel
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const { showBoundary } = useErrorBoundary()
	const params = useParams<{ repo: string; owner: string }>()

	useEffect(() => {
		;(async () => {
			try {
				await viewModel.getWeeklyCommitCount({
					repo: params?.repo || '',
					owner: params?.owner || ''
				})
			} catch (error) {
				showBoundary(error)
			}
		})()
	}, [])

	const chartData = useMemo(
		() =>
			Object.keys(viewModel.data).map(key => ({
				name: key,
				data: viewModel.data[key as keyof typeof viewModel.data]
			})),
		[viewModel.data]
	) as SeriesOptionsType[]

	return (
		<WeeklyCommitCountChartView
			chartData={chartData}
			isLoading={viewModel.isLoading}
		/>
	)
}

export default observer(ViewController)
