import React, { Component } from 'react';
import './Front.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Logo from '../images/logo.png';
import { Link, Route, Switch } from 'react-router-dom';
import Main from './Main';
class Front extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
        };
        // console.log(this.props.match);
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {

            const isTop = window.scrollY < 50;
            if (isTop == false) {
                this.setState({ scrolled: true });
                console.log(isTop);
            } else {
                this.setState({ scrolled: false });
            }
        });
    }

    // componentWillUnmount(){
    //     window.removeEventListener('scroll');
    // }
    render() {
        return (
            <div>
                <div className="parent">
                    {/* Top Head Start */}

                    <div className="row top-head">
                        <div className="container">
                            <ul className="social-icon">
                                <li><i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </li>
                                <li><i class="fa fa-instagram" aria-hidden="true"></i>
                                </li>
                            </ul>
                            <ul className="ct-hd-dtl">
                                <li><i class="fa fa-phone" aria-hidden="true"></i> 514 788-4000
</li>
                                <li><i class="fa fa-envelope" aria-hidden="true"></i> verses@hotelnelligan.com
</li>
                                <li>
                                    <span>Gift Card</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Top Head End */}
                    {/* Navbar Start */}

                    <div className={this.state.scrolled ? 'row navbar scrolled' : 'row navbar'}>
                        <div className="container">
                            <div className="logo">
                                <img src={Logo} alt="No Image" className="img-responsive" height="100px" />
                            </div>
                            <div className="navigation">
                                <ul>
                                    <li><Link to="/Main">Home</Link></li>
                                    <li>Menus</li>
                                    <li><Link to="/wine-bar">Wine bar</Link></li>
                                    <li><Link to="/groups">Groups</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/book-now">Book Now</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Navbar End */}
                    {/* Slider Start */}
                    <Main/>
                    {/* <Switch>
                        <Route path="/Main" component={Main} />
                    </Switch> */}




                </div>
            </div>
        );
    }
}
export default Front;