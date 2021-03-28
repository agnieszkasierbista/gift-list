import {GiftListApp} from "./GiftListApp.layout";
import {connect} from "react-redux";
import {getInitialList} from "../../actions";


function mapDispatchToProps(dispatch) {
    return {
        dispatchGetInitialList: function () {
            dispatch(getInitialList())
        }
    }
}

export default connect(null, mapDispatchToProps)(GiftListApp)