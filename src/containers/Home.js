import { connect } from "react-redux";
import Home from "../components/Home/Home";

const mapStateToProps = (state) => ({
    date: state.home
});

export default connect(mapStateToProps)(Home);