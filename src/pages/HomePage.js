import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Alert from "react-bootstrap/Alert";
import MapSection from "../components/Map";

function HomePage() {
  const location = {
    address: "",
    lat: 35.994,
    lng: -78.8986,
  };
  return (
    <>
      <div id="home">
        <Carousel>
          <Carousel.Item className="eventD">
            <img
              className="d-block w-100 img-fluid"
              src={`${process.env.PUBLIC_URL}/img/holy_smokes_brisket.jpeg`}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Brisket</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="eventD">
            <img
              className="d-block w-100 img-fluid"
              src={`${process.env.PUBLIC_URL}/img/holy_smokes_pulled_chicken.jpeg`}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>BBQ Turkey</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="eventD">
            <img
              className="d-block w-100 img-fluid"
              src={`${process.env.PUBLIC_URL}/img/holy_smokes_brisket_philly.jpeg`}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Brisket Philly</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="eventD">
            <img
              className="d-block w-100 img-fluid"
              src={`${process.env.PUBLIC_URL}/img/holy_smokes_chicken_wings_bbq.jpeg`}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Wings - BBQ</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div id="business_logo_div">
          <img
            src={`${process.env.PUBLIC_URL}/img/holy_smokes_logo.png`}
            id="business_logo_div_img"
          ></img>
        </div>
        <div id="menu_div">
          <h2 id="menu_div_header" className="section-header">
            MENU
          </h2>
          <div id="menu_category_container">
            <div className="menu-category col-12">
              <h3 className="menu-category-header">SPECIALTY ITEMS</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">
                      CHICKEN QUESADILLA/+SAUCE
                    </h4>

                    <span className="badge menu-item-price">$ 7.50 / 8</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">
                      BRISKET QUESADILLA/+SAUCE
                    </h4>

                    <span className="badge menu-item-price">$ 11 / 11.50</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">
                      BRISKET PHILLY CHEESESTEAK
                    </h4>
                    <span className="badge menu-item-price">$ 11</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">BRISKET BBQ SANDWHICH</h4>
                    <span className="badge menu-item-price">$ 11</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">BRISKET</h4>
                    <span className="badge menu-item-price">$8</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">
                      TRKY BBQ SANDWHICH / COMBO
                    </h4>

                    <span className="badge menu-item-price">$ 4 / 6</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-category col-12">
              <h3 className="menu-category-header">HEALTHY CHOICES</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">GRILLED CHICKEN WRAP</h4>

                    <span className="badge menu-item-price">$5</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">GRILLED CAESAR WRAP</h4>

                    <span className="badge menu-item-price">$ 5.50</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">
                      GRILLED GREEK CHICKEN WRAP
                    </h4>
                    <span className="badge menu-item-price">$6</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">BUFFALO CHICKEN WRAP</h4>
                    <span className="badge menu-item-price">$6</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">BLT</h4>
                    <span className="badge menu-item-price">$5</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">TURKEY/BACON WRAP</h4>
                    <span className="badge menu-item-price">$7</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">CHICKEN SALAD WRAP</h4>
                    <span className="badge menu-item-price">$6.50</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">
                      SPICY SHRIMP/AVACADO WRAP
                    </h4>
                    <span className="badge menu-item-price">$8.50</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">
                      PINA TERIYAKI CHKN WRAP
                    </h4>
                    <span className="badge menu-item-price">$7.00</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">VEGGIE WRAP</h4>
                    <span className="badge menu-item-price">$4.50</span>
                  </div>
                  <Alert variant={"warning"}>
                    <p>Wrap types: tomato, spinach, regular, and wheat</p>
                  </Alert>
                </div>
              </div>
            </div>
            <div className="menu-category col-12">
              <h3 className="menu-category-header">SALADS</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">CAESAR 1/2 / FULL</h4>

                    <span className="badge menu-item-price">$ 3 / 5</span>
                  </div>

                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">GARDEN 1/2 / FULL</h4>
                    <span className="badge menu-item-price">$ 3 / 5</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">CHEF 1/2 / FULL</h4>
                    <span className="badge menu-item-price">$ 4 / 6</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">GREEK 1/2 / FULL</h4>
                    <span className="badge menu-item-price">$ 5 / 7</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">WEDGE</h4>
                    <span className="badge menu-item-price">$3.50</span>
                  </div>

                  <Alert variant={"warning"}>
                    <p>Add tenders: 1/2 + $1.50 FULL + $3</p>
                    <br></br>
                    <p>
                      Dressings: ranch , honey mustard, blue cheese, Italian,
                      strawberry vinaigrette
                    </p>
                  </Alert>
                </div>
              </div>
            </div>
            <div className="menu-category col-12">
              <h3 className="menu-category-header">BURGERS/SUBS/DOGS</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">VEGGIE BURGER</h4>

                    <span className="badge menu-item-price">$5</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">HAMBURGER</h4>

                    <span className="badge menu-item-price">$6</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">CHESSEBURGER / DBL</h4>
                    <span className="badge menu-item-price">$ 7 / 10</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">
                      BACON CHEESEBURGEER / DBL
                    </h4>
                    <span className="badge menu-item-price">$ 9 / 12</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">CHICKEN PHILLY / COMBO</h4>
                    <span className="badge menu-item-price">$ 8 / 10</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">STEAK PHILLY / COMBO</h4>
                    <span className="badge menu-item-price">$ 8.50 / 10</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">2 TURKEY DOGS</h4>
                    <span className="badge menu-item-price">$ 3.50</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">2 BEEF HOT DOGS</h4>
                    <span className="badge menu-item-price">$4</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">2 SAUSAGES</h4>
                    <span className="badge menu-item-price">$5</span>
                  </div>

                  <Alert variant={"warning"}>
                    <p>
                      Condiments: ketchup, mustard, onion, pickles,mayo,
                      lettuce, peppers, mushrooms , chili, coleslaw
                    </p>
                    <br></br>
                    <p>
                      Cheese: American, Swiss , provolone, pepper jack, and
                      cheese sauce.
                    </p>
                  </Alert>
                </div>
              </div>
            </div>
            <div className="menu-category col-12">
              <h3 className="menu-category-header">WINGS/TENDERS</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">5 WINGS / 10 WINGS</h4>

                    <span className="badge menu-item-price">$ 6 / 10</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">3 TENDERS / 6 TENDERS</h4>

                    <span className="badge menu-item-price">$ 4 / 9</span>
                  </div>

                  <Alert variant={"warning"}>
                    <p>Tossed: +.50 / 1.00</p>
                    <br></br>
                    <p>
                      Sauces: Mild Buffalo, BBQ, Jerk, Teriyaki, Lemon pepper,
                      Garlic Parmesan, Holy Smokes sauce.
                    </p>
                  </Alert>
                </div>
              </div>
            </div>
            <div className="menu-category col-12">
              <h3 className="menu-category-header">SIDES</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">FRIES</h4>

                    <span className="badge menu-item-price">$2.50</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">CHEESE FRIES</h4>

                    <span className="badge menu-item-price">$3</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">BACON CHEESE FRIES</h4>
                    <span className="badge menu-item-price">$4</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">BRISKET FRIES</h4>
                    <span className="badge menu-item-price">$6</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">CHIPS</h4>
                    <span className="badge menu-item-price">$1.25</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">MOZZARELLA STICKS</h4>
                    <span className="badge menu-item-price">$4</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-category col-12">
              <h3 className="menu-category-header">SLAW / HUSH PUPPIES</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12">
                    <h4 className="menu-item-header">SMALL / 1/2 PINT</h4>

                    <span className="badge menu-item-price">$ 2.50 / 5</span>
                  </div>
                  <div className="menu-item col-12">
                    <h4 className="menu-item-header">PINT / QUART</h4>

                    <span className="badge menu-item-price">$ 9 / 16</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-category col-12">
              <h3 className="menu-category-header">A LA CARTE</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12">
                    <h4 className="menu-item-header">BRISKET /LB</h4>

                    <span className="badge menu-item-price">$16</span>
                  </div>

                  <Alert variant={"warning"}>
                    <p>All meats cooked well done!!</p>
                    <br></br>
                    <p>Specials: Friday Fish - whiting & flounder Shrimp</p>
                  </Alert>
                </div>
              </div>
            </div>
            <div className="menu-category col-12">
              <h3 className="menu-category-header">DESERTS</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">GOLDEN OREO CHEESECAKE</h4>

                    <span className="badge menu-item-price">$3.50</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">BLONDIES / BROWNIES</h4>
                    <span className="badge menu-item-price">$2</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">
                      FUNNEL CAKES / + FLAVOR
                    </h4>
                    <span className="badge menu-item-price">$ 3 / 4</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">STRAWBERRY SHORTCAKE</h4>
                    <span className="badge menu-item-price">$2.50</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">APPLE COBBLER</h4>
                    <span className="badge menu-item-price">$4</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">PEACH COBBLER</h4>
                    <span className="badge menu-item-price">$4</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">DEEP FRIED OREOS</h4>
                    <span className="badge menu-item-price">$4</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">PECAN PIE</h4>
                    <span className="badge menu-item-price">$4</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-category col-12">
              <h3 className="menu-category-header">DRINKS</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">TEA, LEMONADE / LARGE</h4>

                    <span className="badge menu-item-price">$2 / 3</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">BOTTLED WATER</h4>
                    <span className="badge menu-item-price">$1.50</span>
                  </div>
                  <div className="menu-item col-12 col-sm-6">
                    <h4 className="menu-item-header">CAN SODA</h4>
                    <span className="badge menu-item-price">$1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mission_div">
          <div id="mission_div_container">
            <h2 id="#mission_div_header" className="section-header">
              HOLY SMOKES
            </h2>
          </div>
          <p id="holy_smokes_mission_text" className="container">
            We specialize in the original brisket philly cheese steaks ,brisket
            BBQ sandwiches and flavored chicken quesadillas. Our products are
            made with locally sourced ingredients and we offer large portion
            sizes at a reasonable price. We provide an unforgettable experience
            that will have you coming back for more.
          </p>
        </div>
        <div id="location_div">
          <h2 id="location_div_header" className="section-header">
            LOCATION
          </h2>
          <div id="map_container">
            <div className="row m-0 p-0">
              <div id="location_div" className="col-12 m-0 p-0">
                {/* <h3 id="location_div_header">LOCATION</h3> */}
                <MapSection location={location} zoomLevel={10} />
              </div>
            </div>
          </div>
        </div>

        <div id="footer" className="">
          <div id="aboutDiv" className="col-12 col-md-6 footer-section">
            <div id="aboutText" className="col-12">
              <img
                src={`${process.env.PUBLIC_URL}/img/holy_smokes_footer_image.png`}
                alt="'Holy Smokes, Now We're Cookin'"
                className="footer-image"
              />
            </div>
          </div>
          <div
            id="contact_div"
            className="col-12 col-md-6 mt-4 mt-md-0 footer-section"
          >
            <h2 className="footer-header mb-0">CONTACT</h2>
            <div id="aboutText">
              <p className="mb-0">984-364-7163</p>
              <p>
                <a
                  href="https://www.instagram.com/holysmokes919/"
                  className="footer-link"
                  target="_blank"
                >
                  <i className="fa fa-instagram mr-1"></i>holysmokes919
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
