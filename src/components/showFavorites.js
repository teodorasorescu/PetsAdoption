import React from 'react';
import { connect } from 'react-redux';

const ShowFavorites = ({ favorites }) => {
	console.log(favorites);
	return <div>{favorites}</div>;
};

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(mapStateToProps, null)(ShowFavorites);
