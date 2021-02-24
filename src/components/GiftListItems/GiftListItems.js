import {connect} from "react-redux";
import {GiftList} from "./GiftListItems.layout";


export function mapStateToProps(state) {
    return {
        ...state,
    }

}

export function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftList);