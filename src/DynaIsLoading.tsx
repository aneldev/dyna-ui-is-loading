import * as React from "react";
import {DynaModalContainer} from "dyna-ui-modal-container";

import "./DynaIsLoading.less";

export interface IDynaIsLoadingProps {
	className?: string;
	show: boolean;
	fullScreen?: boolean;
	spinner?: JSX.Element;
	message?: JSX.Element;
	onClick?: () => void;
}

export interface IDynaIsLoadingState {
	show?: boolean;
	renderInternalContainer?: boolean;
}

export class DynaIsLoading extends React.Component<IDynaIsLoadingProps, IDynaIsLoadingState> {
	static defaultProps: IDynaIsLoadingProps = {
		className: '',
		show: false,
		fullScreen: false,
		spinner: <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" style={{fontSize: "62px"}}/>,
		message: null,
		onClick: () => undefined,
	};

	constructor(props: IDynaIsLoadingProps) {
		super(props);
		this.state = {
			show: props.show,
			renderInternalContainer: props.show,
		};
	}

	public componentWillReceiveProps(nextProps: IDynaIsLoadingProps): void {
		if (nextProps.show !== this.props.show) {
			if (nextProps.show) {
				this.setState({renderInternalContainer: true, show: false});
				setTimeout(() => this.setState({show: true}), 10)
			}
			else {
				this.setState({show: false});
				setTimeout(() => this.setState({renderInternalContainer: false}), 250);
			}
		}
	}

	private readonly baseClassName: string = "dyna-is-loading";
	private readonly className = (subClassName: string = "", active: boolean = true): string => active ? `${this.baseClassName}${subClassName}` : "";

	private renderIsLoadingContent(): JSX.Element {
		const {
			className: userClassName,
			spinner,
			message,
			onClick
		} = this.props;

		const className: string = [
			userClassName,
			this.className(),
		].join(' ').trim();

		return (
			<div
				className={className}
				onClick={onClick}
			>
				{spinner}
				{message}
			</div>
		);
	}

	public render(): JSX.Element {
		const {
			fullScreen,
		} = this.props;
		const {
			show,
			renderInternalContainer,
		} = this.state;
		console.debug('show', show);

		if (fullScreen) {
			return (
				<DynaModalContainer show={show}>
					{this.renderIsLoadingContent()}
				</DynaModalContainer>
			);
		}
		else {
			// not full screen, in the parent container
			if (renderInternalContainer) {
				const className: string = [
					this.className('__internal-container'),
					this.className(`__internal-container--${show ? "show" : "hide"}`),
				].join(' ').trim();
				return (
					<div className={className}>
						{this.renderIsLoadingContent()}
					</div>
				);
			}
			else {
				return null;
			}
		}
	}
}
