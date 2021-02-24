import {GiftListForm} from "./GiftListForm.layout";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {saveEditedGiftList} from "../../actions";
import {withRouter} from "react-router-dom";
import {mapStateToProps} from "./GiftListForm";

function mapDispatchToProps(dispatch) {
    return {
        onSubmitHandler: function (editedGiftList) {
            dispatch(saveEditedGiftList(editedGiftList))
        }

    }
}

const WrappedGiftListForm = reduxForm({form: "GIFT_LIST_FORM"})(GiftListForm);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedGiftListForm));