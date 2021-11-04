import { connect } from "react-redux";
import Home from "../components/Home/Home";
import { setHomeData } from "../store/Home/actions";

const mapStateToProps = (state) => ({
    data: state.home
});

export default connect(mapStateToProps, {setHomeData})(Home);
