import React from 'react';
import PropTypes from 'prop-types';

import Result from './result';

const Results = (props) => {
    return (
        <div className='expand-collapse-component-container search-results-listings'>
            <div className='expand-collapse-component-section'>
                {
                    props.results && props.results.map((result, key) => {
                        return (
                            <Result
                                item={result}
                                key={key}
                                query={props.query}
                                shouldShowImage={props.displayImages}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

Results.propTypes = {
    displayImages: PropTypes.bool,
    query: PropTypes.string,
    results: PropTypes.array
};

export default Results;
