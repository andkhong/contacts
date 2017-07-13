import * as React from 'react';

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
            <input
                type="search"
                placeholder="Search..."
                value={this.state.filter}
                onChange={(e) => this.setState({ filter: e.target.value })}
            />
        );
    }
}

export default Search;