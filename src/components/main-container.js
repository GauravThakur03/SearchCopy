import React, {Component} from 'react';

import BinningFilterConnector from './binning/binning-filter-connector';
import ResultContainer from './search/result-container';
import PinWrapper from './pin-wrapper';

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.toggleFilters = this.toggleFilters.bind(this);

        this.state = {
            toggleFilters: false
        };
    }

    toggleFilters() {
        this.setState({
            toggleFilters: !this.state.toggleFilters
        });
    }

    render() {
        return (
            <div className='plc-toc'>
                <div className={`${this.state.toggleFilters ? 'show-filters' : ''} search-results-listing-template background-1`}>
                    <PinWrapper toggleFilters={this.toggleFilters}/>
                    <div className='container'>
                        <div className='row relative'>
                            <BinningFilterConnector/>
                            <ResultContainer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;
