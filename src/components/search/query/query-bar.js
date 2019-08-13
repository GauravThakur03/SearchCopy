import React, {Component} from 'react';
import {injectIntl, intlShape} from 'react-intl';
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
        if (this.state.showSuggestions) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion] || this.state.userInput
            });
        } else {
            this.searchByQuery();
        }
    }

    onUp(activeSuggestion) {
        if (activeSuggestion === 0) {
            return;
        }

        this.setState({
            activeSuggestion: activeSuggestion - 1
        });
    }

    onDown(activeSuggestion, filteredSuggestions) {
        if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
        }

        this.setState({
            activeSuggestion: activeSuggestion + 1
        });
    }

    onChange = (e) => {
        const userInput = e.currentTarget.value;

        this.setState({
            activeSuggestion: 0,
            showSuggestions: userInput.length >= NUMBER_3,
            userInput: e.currentTarget.value
        });

        if (userInput.length >= NUMBER_3) {
            this.props.loadSuggestion(userInput).then((data) => {
                this.setState({
                    filteredSuggestions: data.suggestions ? data.suggestions.map((suggestion) => suggestion.term) : []
                });
            });
        } else {
            this.setState({
                filteredSuggestions: []
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
                showSuggestions,
                userInput
            }
        } = this;

        const placeHolder = this.props.intl.formatMessage({
            id: 'SEARCH'
        });

        let suggestionsListComponent;

        if (showSuggestions) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className='suggestions'>
                        {filteredSuggestions.map((suggestion, index) => {
                            const className = index === activeSuggestion ? 'suggestion-active' : '';

                            return (
                                <li
                                    className={className}
                                    key={index}
                                    onClick={onClick}
                                >
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className='no-suggestions'>
                        <em>{'No suggestions, for search query!'}</em>
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
                    </span>
                    <div className='search-icon'>
                        <a
                            className='icon-jd_search'
                            onClick={searchByQuery}
                        />
                    </div>
                </form>
                {suggestionsListComponent}
            </div>
        );
    }
}

export default injectIntl(QueryBar);
