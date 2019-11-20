import React, {Component} from 'react';

import BinningFilterConnector from './binning/binning-filter-connector';
import ResultContainer from './search/result-container';
import PinWrapper from './pin-wrapper-connector';

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.toggleFilters = this.toggleFilters.bind(this);
        this.handleWindowresize = this.handleWindowresize.bind(this);
        this.adjustHeightOfAside = this.adjustHeightOfAside.bind(this);
        this.state = {
            toggleFilters: false
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowresize);
    }

    toggleFilters() {
        this.adjustHeightOfAside();
        this.setState((state) => ({
            toggleFilters: !state.toggleFilters
        }));
        document.getElementsByTagName('html')[0].classList.toggle('lock-scroll-small');
    }

    handleWindowresize() {
        this.adjustHeightOfAside();
    }

    adjustHeightOfAside() {
        if (!this.state.toggleFilters) {
            const d = document.getElementById('headerSection').offsetHeight;
            const p = document.getElementById('pin-wrapper').offsetHeight;

            document.getElementById('filter-aside').style.height = `calc(100vh - ${d + p}px)`;
            document.getElementById('aside-container-mobile').style.minHeight = `calc(100vh - ${d + p}px)`;

        }
    }
    render() {
        return (
            <div className='plc-toc'>
                <div className={`${this.state.toggleFilters ? 'show-filters' : ''} search-results-listing-template background-1`}>
                    <PinWrapper toggleFilters={this.toggleFilters}/>
                    <div className='container'>
                        <div className='row relative' id='aside-container-mobile'>
                            <BinningFilterConnector/>
                            <ResultContainer {...this.props}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;
