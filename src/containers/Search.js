import { connect } from "react-redux";
import Search from "../components/Search/Search";
import { setSearchResult, setSearchText, setAutocompleteResult } from "../store/Search/actions";

const mapStateToProps = (state) => ({
    results: state.search.results,
    totalResultsCount: state.search.totalResults,
    searchText: state.search.searchText,
    searchingError: state.search.searchingError,
    autocompleteResult: state.search.autocompleteResult
});

export default connect(mapStateToProps, {setSearchResult, setSearchText, setAutocompleteResult})(Search);