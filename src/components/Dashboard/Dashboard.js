import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import data from '../../data/data.json';

import './Dashboard.scss';

const Dashboard = () => {
	const [tableData, setTableData] = useState(null);

	const dimensions = {
		height: 500,
		width: 500,
		margin: {
			top: 10,
			right: 30,
			bottom: 20,
			left: 50,
		},
	};

	const groups = d3.map(data, (d) => d.group).keys();
	const subgroups = ['group', 'Carbs', 'Protein', 'Fiber'].slice(1);

	const stackedData = d3.stack().keys(subgroups)(data);

	const x = d3
		.scaleBand()
		.domain(groups)
		.range([0, dimensions.width])
		.padding([0.2]);

	const y = d3.scaleLinear().domain([0, 30]).range([dimensions.height, 0]);

	const color = d3
		.scaleOrdinal()
		.domain(subgroups)
		.range(['#9CADCE', '#7EC4CF', '#52B2CF']);

	const drawBars = () => {
		const svg = d3
			.select('#chart')
			.append('svg')
			.attr('viewBox', `0 0 1600 550`) // quick responsivity hack
			.append('g')
			.attr(
				'transform',
				'translate(' +
					dimensions.margin.left +
					',' +
					dimensions.margin.top +
					')',
			);

		const tooltip = d3.select('#tooltip');

		svg.append('g')
			.selectAll('g')
			// stacked data
			.data(stackedData)
			.enter()
			.append('g')
			.attr('fill', (d) => color(d.key))
			.selectAll('rect')

			// subgroup per subgroup to add rectangles
			.data((d) => d)
			.enter()
			.append('rect')
			.on('mouseover', function (event, d) {
				d3.select('#tooltip')
					.style('left', `${event.pageX}px`)
					.style('top', `${event.pageY}px`)
					.style('display', 'inline-block')
					.html(
						`Carbs: ${d.data.Carbs}g <br> Protein: ${d.data.Protein}g <br> Fiber: ${d.data.Fiber}g`,
					);
			})
			.on('mouseout', function (event, d) {
				tooltip.style('display', 'none');
			})
			.on('click', function (event, d) {
				setTableData(d.data);
			})
			.attr('x', (d, i) => x(i))
			.attr('y', (d) => y(d[1]))
			.attr('height', (d) => y(d[0]) - y(d[1]))
			.attr('width', x.bandwidth());

		svg.append('g')
			.attr('transform', 'translate(0,' + dimensions.height + ')')
			.call(d3.axisBottom(x).tickFormat((d) => data[d].group));

		svg.append('g').call(d3.axisLeft(y));
	};

	useEffect(() => {
		drawBars();
	}, []);

	const [subgroupIndex, setSubgroupIndex] = useState(1);

	const handleNav = (dir) => {
		if (dir === 'up') {
			subgroupIndex <= 2
				? setSubgroupIndex(subgroupIndex + 1)
				: setSubgroupIndex(1);
		} else {
			subgroupIndex > 1
				? setSubgroupIndex(subgroupIndex - 1)
				: setSubgroupIndex(3);
		}
	};

	return (
		<div className='Dashboard'>
			<div className='tooltip' id='tooltip'></div>
			<div className='Dashboard__card'>
				<h1>{`It's a dashboard 😎`}</h1>
			</div>

			<div className='Dashboard__card'>
				<h3>{'Nutritional content by fruit (g)'}</h3>
				<div id='chart'></div>
			</div>

			{tableData && (
				<div className='Dashboard__card'>
					<div className='Dashboard__table-nav'>
						<div
							className='Dashboard__table-nav-left'
							onClick={() => handleNav('down')}
						>
							<span className='material-icons md-36'>
								chevron_left
							</span>
						</div>
						<div
							className='Dashboard__table-nav-right'
							onClick={() => handleNav('up')}
						>
							<span className='material-icons md-36'>
								chevron_right
							</span>
						</div>
					</div>
					<table
						className='Dashboard__table'
						cellspacing='8'
						cellpadding='8'
					>
						<tr>
							<th colspan='2'>{tableData.group}</th>
						</tr>
						<tr>
							<td>{Object.keys(tableData)[subgroupIndex]}</td>
							<td>
								{
									tableData[
										Object.keys(tableData)[subgroupIndex]
									]
								}
							</td>
						</tr>
					</table>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
