export function mapStateToProps(state, ownProps) {

    const giftList = state.list.listOfGiftLists.find(
        (giftList) => giftList.creationDate.toString() === ownProps.match.params.id);

    return {
        initialValues: giftList || {}
    }
}