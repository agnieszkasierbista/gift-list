import {connect} from "react-redux";
import {GiftListItem} from "./GiftListItem.layout";


export function mapStateToProps(state) {
    return {
        ...state,
    }

}

export function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftListItem);