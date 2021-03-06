import Form from './Form/Form';
import Result from './Result/Result';

const Search = (props) => {
    return (
        <div className='search'>

            <Form autocompleteResult={props.autocompleteResult}
                searchText={props.searchText}
                setSearchResult={props.setSearchResult}
                setSearchText={props.setSearchText}
                setAutocompleteResult={props.setAutocompleteResult}/>

            <Result totalResultsCount={props.totalResultsCount}
                    recipes={props.results}
                    error={props.searchingError}
                    loadMoreResults={props.setSearchResult}
                    isLoadMoreDisable={props.isLoadMoreDisable}/>
        </div>
    );
}

export default Search;