import {GiftListForm} from "./GiftListForm.layout";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {saveNewGiftList} from "../../actions";

function mapDispatchToProps(dispatch) {
    return {
        onSubmitHandler: function (newGiftList) {
            dispatch(saveNewGiftList(newGiftList))
        }
    }

}

export default connect(() => {
    return {
        initialValues: {giftRecipient: "lol"}
    }
}, mapDispatchToProps)(reduxForm({form: "GIFT_LIST_FORM"})(GiftListForm));