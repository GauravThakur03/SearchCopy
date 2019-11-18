import React, {Component} from 'react';
import {injectIntl, intlShape, FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

const NUMBER_3 = 3;

class QueryBar extends Component {
    static propTypes = {
        changeQuery: PropTypes.func,
        intl: intlShape.isRequired,
        loadSuggestion: PropTypes.func,
        query: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.onDown = this.onDown.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onUp = this.onUp.bind(this);
        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            loading: false,
            showSuggestions: false,
            // What the user has entered
            userInput: this.props.query
        };

        this.keyStroke = {
            '13': this.onEnter,
            '38': this.onUp,
            '40': this.onDown
        };
    }

    onEnter(activeSuggestion, filteredSuggestions, e) {
        e.preventDefault();
        this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion] || this.state.userInput
        }, this.searchByQuery);
    }

    onUp(activeSuggestion) {
        if (activeSuggestion === 0) {
            return;
        }
        const list = document.getElementsByClassName('suggestions')[0];
        const SCROLL_OFFSET = 42.6665;

        list.scrollTop = list.scrollTop - SCROLL_OFFSET;
        this.setState({
            activeSuggestion: activeSuggestion - 1
        });
    }

    onDown(activeSuggestion, filteredSuggestions) {
        if (activeSuggestion === filteredSuggestions.length - 1) {
            return;
        }
        const list = document.getElementsByClassName('suggestions')[0];
        const targetLi = document.getElementsByClassName('suggestion-active')[0];
        const SCROLL_OFFSET = 43;

        list.scrollTop = targetLi.offsetTop - SCROLL_OFFSET;
        this.setState({
            activeSuggestion: activeSuggestion + 1
        });
    }

    onChange = (e) => {
        const userInput = e.currentTarget.value;

        this.setState({
            activeSuggestion: 0,
            loading: true,
            showSuggestions: userInput.length >= NUMBER_3,
            userInput: e.currentTarget.value
        });

        if (userInput.length >= NUMBER_3) {
            this.props.loadSuggestion(userInput).then((data) => {
                this.setState({
                    filteredSuggestions: data.suggestions ? data.suggestions.map((suggestion) => suggestion.term) : [],
                    loading: false
                });
            });
        } else {
            this.setState({
                filteredSuggestions: [],
                loading: false
            });
        }
    };

    onClick = (e) => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    onKeyDown = (e) => {
        const {
            activeSuggestion,
            filteredSuggestions
        } = this.state;
        const callback = this.keyStroke[e.keyCode];

        if (callback) {
            callback(activeSuggestion, filteredSuggestions, e);
        }
    };

    searchByQuery = () => {
        if (this.state.userInput.length) {
            this.props.changeQuery(this.state.userInput);
        }
    }

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            searchByQuery,
            state: {
                activeSuggestion,
                filteredSuggestions,
                loading,
                showSuggestions,
                userInput
            }
        } = this;

        const placeHolder = this.props.intl.formatMessage({
            id: 'SEARCH'
        });

        let suggestionsListComponent, noSuggestions;

        if (showSuggestions) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <div className='suggestions'>
                        {filteredSuggestions.map((suggestion, index) => {
                            const className = index === activeSuggestion ? 'suggestion-active' : '';

                            return (
                                <div
                                    className={className}
                                    key={index}
                                    onClick={onClick}
                                    tabIndex={index}
                                >
                                    {suggestion}
                                </div>
                            );
                        })}
                    </div>
                );
            } else {
                noSuggestions = (
                    <div className='no-suggestions'>
                        <em><FormattedMessage id={'NO_SUGGESTIONS'}/></em>
                    </div>
                );
            }
        }

        return (
            <div className='search-bar-component'>
                <form name='search-form'>
                    <span className='twitter-typeahead'>
                        <input
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            placeholder={placeHolder}
                            type='text'
                            value={userInput}
                        />
                        {!loading && suggestionsListComponent}
                    </span>
                    <div className='search-icon'>
                        <a
                            className='icon-jd_search'
                            onClick={searchByQuery}
                        />
                    </div>
                </form>
                {!loading && noSuggestions}
            </div>
        );
    }
}

export default injectIntl(QueryBar);
