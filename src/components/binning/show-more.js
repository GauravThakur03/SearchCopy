import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

const ShowMore = (props) => (
    <li className={props.more ? 'show-more-label' : 'show-less-label'}>
        <label>
            <a onClick={props.onClick}>
                <FormattedMessage id={props.more ? 'SHOW_MORE' : 'SHOW_LESS'}/>
            </a>
        </label>
    </li>
);

ShowMore.propTypes = {
    more: PropTypes.bool,
    onClick: PropTypes.func
};

export default ShowMore;
