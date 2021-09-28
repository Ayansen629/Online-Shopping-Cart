import Home from '../pages/Home'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;