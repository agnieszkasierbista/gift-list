import {GiftListForm} from "./GiftListForm.layout";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {saveEditedGiftList} from "../../actions";
import {withRouter} from "react-router-dom";

export function mapStateToProps(state, ownProps) {

    const giftList = state.list.listOfGiftLists.find(
        (giftList) => giftList.creationDate.toString() === ownProps.match.params.id);

    return {
        initialValues: giftList || {}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmitHandler: function (editedGiftList) {
            dispatch(saveEditedGiftList(editedGiftList))
        }

    }
}

const WrappedGiftListForm = reduxForm({form: "GIFT_LIST_FORM"})(GiftListForm);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedGiftListForm));