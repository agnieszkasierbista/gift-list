import {GiftListForm} from "./GiftListForm.layout";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {saveNewGiftList} from "../../actions";

function mapStateToProps(state) {
    return {
        initialValues: {giftRecipient: "lol"}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmitHandler: function (newGiftList) {
            dispatch(saveNewGiftList(newGiftList))
        }
    }

}

const WrappedGiftListForm = reduxForm({form: "GIFT_LIST_FORM"})(GiftListForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedGiftListForm);