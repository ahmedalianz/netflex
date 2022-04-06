import { ArrowForwardIos } from "@mui/icons-material";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div className="title">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <div className="sub-field">
        <div className="floating-input">
          <input id="email" type="email" />
          <label htmlFor="email">Email Adress</label>
        </div>
        <button>
          Get Started <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
