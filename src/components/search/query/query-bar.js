import React, {Component} from 'react';
import {injectIntl, intlShape, FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

const NUMBER_3 = 3;

class QueryBar extends Component {
    static propTypes = {
        changeQuery: PropTypes.func,
        intl: intlShape.isRequired,
        loadSuggestion: PropTypes.func,
        page: PropTypes.oneOfType([PropTypes.string, PropTypes.boolean]),
        query: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.queryForm = React.createRef();
        this.onDown = this.onDown.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.onEnter = this.onEnter.bind(this);
        this.onUp = this.onUp.bind(this);
        this.state = {
            // The active selection's index
            activeSuggestion: -1,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            loading: false,
            showSuggestions: false,
            // What the user has entered
            userInput: decodeURIComponent(this.props.query.trim())
        };

        this.keyStroke = {
            '13': this.onEnter,
            '38': this.onUp,
            '40': this.onDown
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.updateQuery();
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.userInput !== this.props.query) {
            this.setState({
                activeSuggestion: -1,
                filteredSuggestions: [],
                showSuggestions: false,
                userInput: this.props.query
            });
        }
    }

    updateQuery() {
        this.setState({
            userInput: decodeURIComponent(this.props.query.trim())
        });
    }

    onEnter(activeSuggestion, filteredSuggestions, e) {
        e.preventDefault();
        this.setState({
            activeSuggestion: -1,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion] || this.state.userInput
        }, this.searchByQuery);
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
        if (activeSuggestion === filteredSuggestions.length - 1) {
            return;
        }

        this.setState({
            activeSuggestion: activeSuggestion + 1
        });
    }

    onChange = (e) => {
        const userInput = e.currentTarget.value;

        this.setState({
            activeSuggestion: -1,
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
            activeSuggestion: -1,
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
            this.setState({
                activeSuggestion: -1,
                filteredSuggestions: [],
                showSuggestions: false
            });
            const page = this.props.page ? this.props.page : 'siteSearch';

            callDTMSearch(this.queryForm.current, page);
            this.props.changeQuery(encodeURIComponent(this.state.userInput));
        }
    }

    displaySuggestion(showSuggestions, filteredSuggestions, activeSuggestion) {
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
                                    onClick={this.onClick}
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
        return {
            noSuggestions,
            suggestionsListComponent
        };
    }

    render() {
        const {
            onChange,
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

        const {
            noSuggestions,
            suggestionsListComponent
        } = this.displaySuggestion(showSuggestions, filteredSuggestions, activeSuggestion);

        return (
            <div
                className='search-bar-component'
                ref={this.setWrapperRef}
            >
                <form
                    name='search-form'
                    ref={this.queryForm}
                >
                    <span className='twitter-typeahead'>
                        <input
                            name={'query'}
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
