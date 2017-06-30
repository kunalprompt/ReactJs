import React from 'react';


class UserComponent extends React.Component {
	render() {
		return (
			<div>
				<h2>Hi {this.props.name}</h2>
			</div>
		);
	}
}
export default UserComponent;
