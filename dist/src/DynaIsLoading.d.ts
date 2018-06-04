import * as React from "react";
import "./DynaIsLoading.less";
export interface IDynaIsLoadingProps {
    className?: string;
    show: boolean;
    fullScreen?: boolean;
    spinner?: JSX.Element;
    message?: JSX.Element | string;
    onClick?: () => void;
}
export interface IDynaIsLoadingState {
    show?: boolean;
    renderInternalContainer?: boolean;
}
export declare class DynaIsLoading extends React.Component<IDynaIsLoadingProps, IDynaIsLoadingState> {
    static defaultProps: IDynaIsLoadingProps;
    constructor(props: IDynaIsLoadingProps);
    componentWillReceiveProps(nextProps: IDynaIsLoadingProps): void;
    private readonly baseClassName;
    private readonly className;
    private renderIsLoadingContent;
    private renderFullScreenIsLoading;
    private renderInnerIsLoading;
    render(): JSX.Element;
}
