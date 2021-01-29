import {GiftList} from "./GiftList.layout";
import {connect} from "react-redux";


export function mapStateToProps(state) {
    return {
        ...state,
        giftList: state.list.giftList
    }

}

export function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftList);