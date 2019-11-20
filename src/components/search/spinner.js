import React from 'react';
import PropTypes from 'prop-types';

const Spinner = (props) => {
    return props.showLoader ? <div className={'spinner'}>
        <div className='dotspace bounce1'/>
        <div className='dotspace bounce2'/>
        <div className='dotspace bounce3'/>
        <div className='dotspace bounce4'/>
    </div>
        : null;
};

Spinner.propTypes = {
    showLoader: PropTypes.bool
};

export default Spinner;
