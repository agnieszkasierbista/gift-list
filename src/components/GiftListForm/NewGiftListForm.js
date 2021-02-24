import {GiftListForm} from "./GiftListForm.layout";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {saveNewGiftList} from "../../actions";
import {withRouter} from "react-router-dom";
import {mapStateToProps} from "./GiftListForm";

function mapDispatchToProps(dispatch) {
    return {
        onSubmitHandler: function (newGiftList) {
            dispatch(saveNewGiftList(newGiftList))
        }
    }
}

const WrappedGiftListForm = reduxForm({form: "GIFT_LIST_FORM"})(GiftListForm);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedGiftListForm));