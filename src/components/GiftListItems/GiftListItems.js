import {connect} from "react-redux";
import {GiftListItems} from "./GiftListItems.layout";


export function mapStateToProps(state) {
    return {
        ...state,
    }

}

export function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftListItems);