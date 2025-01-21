import './header.scss';

export default function Header() {
  return (
    <header>
      {/*  HEADER-TOP */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-inner">
            <div className="header-top-left">
              <div className="header-top__link-box">
                <a href="#">About Us</a>
              </div>
              <div className="header-top__link-box">
                <a href="#">My Account</a>
              </div>
              <div className="header-top__link-box">
                <a href="#">Wishlist</a>
              </div>
              <div className="header-top__link-box">
                <a href="#">Order Tracking</a>
              </div>
            </div>
            <div className="header-top-right">
              <div>
                Need help? Call Us:
                <a href="tel:+1800900" className="phone-link">
                  + 1800 900
                </a>
              </div>
              <div className="select-box">
                <select name="language" id="language">
                  <option value="eng">English</option>
                  <option value="rus">Russian</option>
                </select>
              </div>
              <div className="select-box">
                <select name="language" id="language">
                  <option value="eng">USD</option>
                  <option value="rus">UZS</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container"></div>
      </div>
    </header>
  );
}
