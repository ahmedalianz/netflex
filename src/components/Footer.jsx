import { ArrowDropDown, Language } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="title">Questions? Contact us.</div>
        <div className="footer-list">
          <div className="col">
            <span className="item">FAQ</span>
            <span className="item">Investor Relations</span>
            <span className="item">Privacy</span>
            <span className="item">Speed Test</span>
          </div>
          <div className="col">
            <span className="item">Help Center</span>
            <span className="item">Jobs</span>
            <span className="item">Cookie Preferences</span>
            <span className="item">Legal Notices</span>
          </div>
          <div className="col">
            <span className="item">Account</span>
            <span className="item">Ways to Watch</span>
            <span className="item">Corporate Information</span>
            <span className="item">Only on Netflix</span>
          </div>
          <div className="col">
            <span className="item">Media Center</span>
            <span className="item">Terms of Use</span>
            <span className="item">Contact Us</span>
          </div>
        </div>
        <div className="select">
          <Language className="icon lang" />
          <ArrowDropDown className="icon arrow" />
          <select name="language" id="">
            <option value="en">English</option>
            <option value="ar">العربيه</option>
          </select>

          <div style={{ marginTop: "1rem" }}>Netflix Egypt</div>
        </div>
      </div>
    </div>
  );
}
