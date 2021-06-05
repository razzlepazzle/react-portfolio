import React, { Component } from 'react';
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor(){
        super();

        this.state = {
            portfolioItems: []
        };

    this.handleSuccessfulFormSubmission=this.handleSuccessfulFormSubmission.bind(this);
    this.handleFormSubmissionError=this.handleFormSubmissionError.bind(this);
    }

handleSuccessfulFormSubmission(portfolioItem) {
        // update the portfolio items state
        // add the portfolio item to the list
    }

handleFormSubmissionError(error) {
    console.log("hanfleFormSubmissionError error", error)
}

    getPortfolioItems(){
        axios.get("https://randeejohnson.devcamp.space/portfolio/portfolio_items", {withCredentials: true
    }).then(response => {
this.setState({
    portfolioItems:
        [...response.data.portfolio_items]
    })
    }).catch(error => {
        console.log("error in getPortfolioItems")
    })
}

componentDidMount() {
    this.getPortfolioItems();
}

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-side">
                    <PortfolioForm 
                    handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                    handleFormSubmissionError={this.handleFormSubmissionError}/>

                </div>

                <div className="right-side">
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        );
    }
}