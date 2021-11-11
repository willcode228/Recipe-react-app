import { connect } from "react-redux";
import Loader from "../common/Loader/Loader";

const mapStateToProps = (state) => ({
    isFetching: state.loader.isFetching
});

export default connect(mapStateToProps, {})(Loader);
