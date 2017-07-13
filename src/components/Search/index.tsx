import * as React from 'react';
import List from './../List/';

interface SearchProps {}

interface SearchState {
    filter: string;
}

class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);
        this.state = { filter: '' };
    }
    render() {
        return (
            <div>
                <input
                    type="search"
                    placeholder="Search..."
                    value={this.state.filter}
                    onChange={(e) => this.setState({ filter: e.target.value })}
                />
                <List children={this.state.filter} />
            </div>

        );
    }
}

export default Search;