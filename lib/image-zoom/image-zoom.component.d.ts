import * as React from 'react';
import * as typings from './image-zoom.type';
export default class ImageViewer extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    private lastPositionX;
    private positionX;
    private animatedPositionX;
    private lastPositionY;
    private positionY;
    private animatedPositionY;
    private scale;
    private animatedScale;
    private zoomLastDistance;
    private zoomCurrentDistance;
    private imagePanResponder;
    private outerPanResponder;
    private centerX;
    private centerY;
    private lastTouchStartTime;
    private horizontalWholeOuterCounter;
    private centerDiffX;
    private centerDiffY;
    private longPressTimeout;
    componentWillMount(): void;
    handleLayout(event: React.LayoutChangeEvent): void;
    reset(): void;
    render(): JSX.Element;
}