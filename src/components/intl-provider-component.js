import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';
import nl from 'react-intl/locale-data/nl';
import pl from 'react-intl/locale-data/pl';
import pt from 'react-intl/locale-data/pt';
import sv from 'react-intl/locale-data/sv';
import tr from 'react-intl/locale-data/tr';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...fr, ...ru, ...de, ...es, ...it, ...nl, ...pl, ...pt, ...sv, ...tr, ...zh]);

const IntlProviderComponent = (props) => {
    return (
        <IntlProvider
            key={props.locale}
            locale={props.locale}
            messages={props.messages}
        >
            <Fragment>
                {props.children}
            </Fragment>
        </IntlProvider>
    );
};

IntlProviderComponent.propTypes = {
    children: PropTypes.element,
    locale: PropTypes.string,
    messages: PropTypes.object
};

export default IntlProviderComponent;
