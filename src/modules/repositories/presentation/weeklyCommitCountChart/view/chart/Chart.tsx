import { Options, SeriesOptionsType } from 'highcharts';
import { FC, useMemo } from 'react';

import BaseChart from '@components/chart/baseChart/BaseChart';

const baseOptions: Options = {
	title: {
		text: 'Weekly Commit Counts'
	},
	chart: {
		height: '300px'
	}
};

interface Props {
	chartData?: SeriesOptionsType[];
}

const Chart: FC<Props> = ({ chartData }) => {
	const options = useMemo(
		() => ({
			...baseOptions,
			series: chartData
		}),
		[chartData]
	);

	return <BaseChart options={options} />;
};

export default Chart;
