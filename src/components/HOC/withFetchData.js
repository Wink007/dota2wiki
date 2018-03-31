import React, { Component } from 'react';

function withFetchData(WrappedComponent) {
    return class extends Component {
        state = {
            data: {},
        };

        componentDidMount() {
            this.fetchData();
        }

        fetchData = async () => {
            if (!WrappedComponent.url) return null;
            const response = await fetch(WrappedComponent.url);
            const data = await response.json();
            this.setState({
                data
            })
        }
    
        render() {
            const { data } = this.state;
            
            return (
                <WrappedComponent {...this.props} data={data} />
            )
        }
    }
}

export default withFetchData;
