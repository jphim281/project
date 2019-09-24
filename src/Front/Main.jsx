import React, { Component } from 'react';
import Slider from '../images/slider1.jpg';
import Pla1 from '../images/pl1.jpg';
import Pla2 from '../images/pl2.jpg';
import Pla3 from '../images/pl3.jpg';
class Main extends Component{
    render(){
        return(
            <>
                <div className="slider">
                    <img src={Slider} alt="No Main Image" />
                </div>
            {/* Slider End */}

            {/* Menus Start */}
            <div className="second-as">
                <div className="container as-mar">
                    <div className="row">
                <div className="col-sm-4">
                    <img src={Pla1} alt="First" />
                    <span className="as-dtl">See our menus</span>
                </div>
                
                <div className="col-sm-4">
                <img src={Pla2} alt="First" />
                    <span className="as-dtl">See our menu</span>
                </div>
                <div className="col-sm-4">
                <img src={Pla3} alt="First" />
                    <span className="as-dtl">Learn more</span>
                </div>
                </div>
                </div>
            </div>
            {/* Menus End */}
            {/* About Start */}
            <div className="third-as">
                <div className="third-cont">
                    <h4>Elegant. Contemporary. Simple.</h4>
                    <p>Verses Bistro offers a sophisticated and accessible contemporary cuisine.<br/>
Inspired by Montreal's eclectic gastronomic scene, the menu offers comforting dishes showcasing local products.<br/>
No matter the season, Verses Bistro showcases what local merchants have to offer. Hence, freshness is the essential ingredient in each plate.<br/>
As for the wine selection, the sommelier introduces us to a rich variety of notes and flavors, with a diverse and carefully selected wine list.<br/><br/>
 
Recognized as one of Montreal's best restaurants, Verses Bistro is a nod to poetry, not only in its name, but mainly because it offers creativity, inspiration and precision to all its guests.</p>
                </div>
            </div>
            {/* About End */}
            {/* Main Meal Menu Start */}
            <div className="forth-as">
<p className="mnus">MENUS</p>
<div className="row">
    <div className="col-sm-4 ffr fr1"><p>BRUNCH MENU</p></div>
    <div className="col-sm-4 ffr fr2"><p>LUNCH MENU</p></div>
    <div className="col-sm-4 ffr fr3"><p>DINNER MENU</p></div>
</div>
<div className="fr-cnt container">
            <p>Just a few paces from our restaurant, Verses Bar—an atrium that serves as Hôtel Nelligan’s stunning centerpiece—rises four stories amid fountains, vegetation and beautiful brickwork.<br/><br/>

Savour a fantastic brunch, afternoon bite or pre-dinner cocktail in these elegant surroundings.
<br/><br/>
Contact Verses Bistro for our opening hours and menu.</p>
</div>
            </div>
            {/* Main Meak Menu End */}
            {/* Second bakground start */}
            <div className="fifth-as">

            </div>
            {/* Second bakground end */}
            {/* Private Dining Start */}
            <div className="six-as">
                <div className="container">
                    <div className="row">
            <div className="col-sm-6">
                <div className="prv-logo"></div>
                <p>
                Verses Bistro is also available for your private events. Book our stunning atrium bar for a private cocktail, or our dining room, in part or in its entirety, for a group breakfast, lunch or dinner. A variety of menus is available to meet your needs, along with the possibility of customized wine pairings for your event. <br/> <br/>
                Capacity:<br/>
                <ul>
                    <li>Verses Bar-Atrium – cocktail up to 120 persons</li>
                    <li>Verses dining room – up to 130 persons</li>
                    <li>Verses semi-private back dining room – up to 88 persons</li>
                </ul> <br/>
                It will be our pleasure to accompany you in the planning of your event, to help create a unique and customized experience.<br/><br/>
                For more information, please contact us at sales@hotelnelligan.com or 514 788-4023.<br/><br/>

For more information on the available event spaces at Hôtel Nelligan, click here.
                </p>
            </div>
            <div className="col-sm-6">
                <div className="pvt-book"></div>
            </div>
                    </div>
                </div>
            </div>
            {/* Private Dining End */}
            {/* Footer Start */}
                <div className="seven-as">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                            <p className="fnus">Opening Hours</p>
                            <p className="svn-hd">Breakfast</p>
                            <p className="svn-dtl">Sunday to Saturday: 6:30am to 10:30am</p>
                            <p className="svn-hd">Lunch</p>
                            <p className="svn-dtl">Monday to Friday: 11:30pm to 5:00pm<br/>
*<i> Express Table d'hôte menu available unitl 3:00pm</i></p>
                            <p className="svn-hd">Dinner</p>
                            <p className="svn-dtl">Sunday to Wednesday: 5:00pm to 10:00pm<br/>
Thursday to Saturday: 5:00pm to 10:30pm</p>
                            <p className="svn-hd">Brunch</p>
                            <p className="svn-dtl">Saturday and Sunday: 10:30am to 3:00pm</p>
                            </div>
                            <div className="col-sm-6">
                            <p className="fnus fnus1">Contact</p>
                            <span className="svn-cnt-ml">verses@hotelnelligan.com</span><br/>
                            <p className="svn-cnt-dtl"><br/>
                            100, rue St-Paul O<br/>
Montreal, QC H2Y 1Z3<br/><br/>

Toll free: 1 877 788-2040<br/>
Local: 514 788-4000<br/>
Fax: 514 788-4001<br/><br/>
<h4>Valet Parking</h4>
<b>Monday to Friday:</b> Free parking at lunch and $12 for dinner.<br/>
<b>Saturday and Sunday:</b> Parking available at $12.<br/><br/>
<i>
Service available by Hotel Nelligan. Some conditions may apply. Contact us for all the details.
</i><br/><br/>
<h4>Careers</h4>
<u>Click here to go to our career page.</u>
                            </p>
                            </div>

                        </div>

                    </div>
                </div>
            {/* Footer End */}
            {/* Last start */}
            <div className="last">

            </div>
            {/* Last End */}
            </>
        );
    }
}
export default Main;