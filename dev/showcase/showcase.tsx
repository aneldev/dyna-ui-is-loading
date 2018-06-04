import * as React from 'react';
import {DynaIsLoading, IDynaIsLoadingProps} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";

export default {
	logo: <Logo/>,
	views: [
		{
			slug: 'intro',
			faIconName: 'circle-o-notch',
			title: 'Introduction',
			center: true,
			component: (
				<div>
					<h3>dyna ui is loading</h3>
				</div>
			),
		},
		{
			slug: 'sizes',
			faIconName: 'flask',
			title: 'rounded - white/black - sizes',
			center: true,
			component: (
				<DynaIsLoading
					show={null}
					onClick={() => console.log('spinner pressed')}
				>dyna button</DynaIsLoading>
			),
			wrapperStyle: {
				width: "50%",
				height: "50%",
				backgroundColor: "white",
				position: "relative",
			},
			props: [
				{
					slug: 'hide-container',
					title: 'in container, hide',
					props: {
						show: false,
						fullScreen: false,
					} as IDynaIsLoadingProps
				},
				{
					slug: 'show-container',
					title: 'in container, show',
					props: {
						show: true,
						fullScreen: false,
					} as IDynaIsLoadingProps
				},
				{
					slug: 'hide-full-screen',
					title: 'full screen, hide',
					props: {
						show: false,
						fullScreen: true,
					} as IDynaIsLoadingProps
				},
				{
					slug: 'show-full-screen',
					title: 'full screen, show',
					props: {
						show: true,
						fullScreen: true,
					} as IDynaIsLoadingProps
				},
			]
		},
		{
			slug: 'the-end',
			title: 'the end',
			description: 'Thank you',
			center: true,
			component: (
				<div style={{textAlign: 'center'}}>
					<h1>The end</h1>
					<div style={{fontSize: '20px'}}>
						<p><a href="https://github.com/aneldev/dyna-ui-button">{faIcon('github')} Github</a></p>
						<p><a href="https://www.npmjs.com/package/dyna-ui-button">{faIcon('square')} npm</a></p>
					</div>
				</div>
			),
		},
	]
}as IShowcase;
