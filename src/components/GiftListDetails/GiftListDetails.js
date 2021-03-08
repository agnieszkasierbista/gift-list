import {connect} from "react-redux";
import {GiftListDetails} from "./GiftListDetails.layout";
import {withRouter} from "react-router-dom";



export function mapStateToProps(state) {
    return {
        ...state,
    }

}

export function mapDispatchToProps(dispatch) {
    return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GiftListDetails));