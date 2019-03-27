import * as React from 'react';

export interface IContainer {
	justify?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch';
	alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch';
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	spacing?: string | number;
	style?: any;
	className?: string;
	flex?: number;
	wrap?: boolean;
	reference?: React.RefObject<HTMLDivElement>;
	onClick?: (e: React.SyntheticEvent) => void;
}

export class Container extends React.PureComponent<IContainer> {

	static defaultProps = {
		justify: 'flex-start',
		alignItems: 'flex-start',
		direction: 'row',
		spacing: 0,
		wrap: true
	};

	render() {
		const { justify, alignItems, direction, spacing, style, className, flex, wrap, reference, onClick } = this.props;

		return (
			<div
				onClick={onClick}
				ref={reference} style={{
				...style,
				flexWrap: wrap ? 'wrap' : 'nowrap',
				display: 'flex',
				justifyContent: justify,
				alignItems,
				flex,
				flexDirection: direction
			}} className={className}>
				{React.Children.map(this.props.children, (child: any) => {
					return child && React.cloneElement(child, {
						style: {
							margin: spacing,
							...child.props.style
						}
					});
				})}
			</div>
		);
	}
}

export interface IItem {
	grow?: number;
	style?: any;
	className?: string;
	onClick?: (e: React.SyntheticEvent) => void;
}

export class Item extends React.PureComponent<IItem> {

	render() {
		const { grow, style, className, onClick } = this.props;

		return <div onClick={onClick} style={{ ...style, flexGrow: grow }} className={className}>
			{this.props.children}
		</div>;
	}
}