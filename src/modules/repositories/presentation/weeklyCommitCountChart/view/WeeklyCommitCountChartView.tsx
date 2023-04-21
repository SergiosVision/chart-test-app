import {FC} from 'react'
import {SeriesOptionsType} from 'highcharts'

import Chart from './chart/Chart'
import Skeleton from './skeleton/Skeleton'
import styles from './WeeklyCommitCountChartView.module.scss'

interface Props {
	isLoading: boolean
	chartData: SeriesOptionsType[]
}

const WeeklyCommitCountChartView: FC<Props> = ({isLoading, chartData}) => {
	return (
		<section className={styles.wrapper}>
			{!isLoading ? (
				<Chart chartData={chartData} />
			) : (
				<Skeleton />
			)}
		</section>
	)
}

export default WeeklyCommitCountChartView
