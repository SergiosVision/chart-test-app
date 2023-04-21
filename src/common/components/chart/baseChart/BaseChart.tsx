import {FC, useMemo} from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import baseChartOptions from './helpers/baseChartSettings'

interface Props extends HighchartsReact.Props {}

const BaseChart: FC<Props> = ({ options, ...rest }) => {
	const mergedOptions = useMemo(() => ({
		...baseChartOptions,
		...options,
		chart: {...(baseChartOptions?.chart || {}), ...(options?.chart || {})},
		title: {...(baseChartOptions?.title || {}), ...(options?.title || {})},
		subtitle: {...(baseChartOptions?.subtitle || {}), ...(options?.subtitle || {})},
		legend: {...(baseChartOptions?.legend || {}), ...(options?.legend || {})},
		colors: [...(baseChartOptions?.colors || []), (options?.colors || [])],
		xAxis: {...(baseChartOptions?.xAxis || {}), ...(options?.xAxis || {})},
		yAxis: {...(baseChartOptions?.yAxis || {}), ...(options?.yAxis || {})},
	}), [options])

	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={mergedOptions}
			{...rest}
		/>
	)
}

export default BaseChart
