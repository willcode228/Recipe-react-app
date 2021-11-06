import Form from './Form/Form';
import Result from './Result/Result';

const Search = (props) => {
    return (
        <div className='search'>

            <Form setSearchResult={props.setSearchResult}
                searchText={props.searchText}
                setSearchText={props.setSearchText}/>

            <Result totalResultsCount={props.totalResultsCount}
                    recipes={props.results}
                    error={props.searchingError}
                    loadMoreResults={props.setSearchResult}/>
        </div>
    );
}

export default Search;