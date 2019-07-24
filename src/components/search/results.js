import React from 'react';
import PropTypes from 'prop-types';

import Result from './result';
import {showImage} from '../../utils/util';

const IS_IMAGE = 0.7;

const Results = (props) => {
    return (
        <div className='expand-collapse-component-container search-results-listings'>
            <div className='expand-collapse-component-section'>
                {
                    props.results && props.results.map((result, key) => {
                        const isImage = Math.random() < IS_IMAGE && showImage;

                        return (
                            <Result
                                item={result}
                                key={key}
                                shouldShowImage={isImage}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

Results.propTypes = {
    results: PropTypes.array
};

export default Results;
