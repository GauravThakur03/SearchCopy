import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

const ResultAdditionalInfo = ({list}) => {
    return (
        <div className='new-search-result-additional-info'>
            <span>
                <b>
                    <FormattedMessage id={'MODEL_YEAR'}/>{':'}
                </b> {list.year}
            </span>&nbsp; &nbsp;
            {
                list.lastUpdated ? <span>
                    <b>
                        <FormattedMessage id={'LAST_UPDATED'}/>
                    </b> {list.lastUpdated}
                </span>
                    : null
            }
        </div>
    );
};

ResultAdditionalInfo.propTypes = {
    list: PropTypes.object
};

export default ResultAdditionalInfo;
