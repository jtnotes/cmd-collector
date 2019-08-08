import { connect } from 'react-redux'

import List from '../components/List'
// import { loginSuccess, changeView, loadPage } from '../actions/index'
import Constants from '../Constants'

const mapStateToProps = (state) => ({
    notes: state.notes,
    currentPage: state.currentPage,
    totalPages: state.totalPages
    // active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // loginSuccess: (token) => dispatch(loginSuccess(token)),
    // changeView: (view) => dispatch(changeView(view)),
    // loadPage: (notes, currentPage, totalPages) => dispatch(loadPage(notes, currentPage, totalPages))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(List);