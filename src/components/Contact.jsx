import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Code,
  Terminal,
  Send,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const isValid =
    (form.email.includes("@") || form.phone.length >= 8) &&
    form.message.trim().length > 5;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1800);
  };

  return (
    <section id="contact" className="connect-stage">
      <h2 className="connect-title">Let’s Connect</h2>

      <div className="social-row">
        <a
          className="sbtn"
          href="https://github.com/giri-harsh"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={36} />
          <span>GitHub</span>
        </a>

        <a
          className="sbtn"
          href="https://linkedin.com/in/giri-harsh"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={36} />
          <span>LinkedIn</span>
        </a>

        <a
          className="sbtn"
          href="https://www.instagram.com/pseudo_harsh/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={36} />
          <span>Instagram</span>
        </a>

        <a
          className="sbtn"
          href="https://leetcode.com/u/Harsh-Giri/"
          target="_blank"
          rel="noreferrer"
        >
          <Code size={36} />
          <span>LeetCode</span>
        </a>

        <a
          className="sbtn"
          href="https://www.hackerrank.com/profile/giri_harsh"
          target="_blank"
          rel="noreferrer"
        >
          <Terminal size={36} />
          <span>HackerRank</span>
        </a>
      </div>

      <form className="connect-form" onSubmit={handleSubmit}>
        <div className="f-row">
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <input
          name="phone"
          placeholder="Phone number (optional)"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={`send-btn ${status}`}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
          <Send size={16} />
        </button>

        {status === "sent" && (
          <div className="form-msg success">
            Message received. I’ll get back to you shortly.
          </div>
        )}

        {status === "error" && (
          <div className="form-msg error">
            Enter a valid email or phone number.
          </div>
        )}
      </form>

      <div className="footer-mark">Made with ❤️ by Harsh</div>

      <style>{`
        .connect-stage {
          min-height: 100vh;
          padding: 120px 24px;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .connect-title {
          font-size: clamp(36px, 6vw, 72px);
          color: #ffffff;
          margin: 0 0 36px;
        }

        .social-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .sbtn {
          min-width: 120px;
          height: 96px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          cursor: pointer;
          transition: transform .15s ease, box-shadow .2s ease, background .2s ease;
          background: rgba(255,255,255,0.04);
          text-decoration: none;
        }

        .sbtn span {
          font-size: 12px;
          letter-spacing: 0.4px;
          color: rgba(255,255,255,0.8);
        }

        .sbtn:hover {
          transform: translateY(-4px) scale(1.05);
          background: linear-gradient(135deg, #6cf2c2, #7aa2ff);
          color: #05070d;
          box-shadow:
            0 0 18px rgba(108,242,194,0.45),
            0 0 32px rgba(122,162,255,0.35);
        }

        .sbtn:hover span {
          color: #05070d;
        }

        .sbtn:active {
          transform: translateY(0) scale(0.9);
          box-shadow: 0 0 0 rgba(0,0,0,0);
        }

        .connect-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }

        .f-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .connect-form input,
        .connect-form textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
          color: #ffffff;
          font-size: 14px;
          outline: none;
        }

        .send-btn {
          margin-top: 12px;
          padding: 16px 22px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #6cf2c2, #7aa2ff);
          color: #05070d;
          font-size: 14px;
          letter-spacing: .4px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: transform .15s ease;
        }

        .send-btn:active {
          transform: scale(.92);
        }

        .send-btn.sending {
          background: linear-gradient(135deg, #6cf2c2 0%, #6cf2c2 50%, #7aa2ff 100%);
        }

        .form-msg {
          margin-top: 14px;
          font-size: 13px;
        }

        .form-msg.success {
          color: #6cf2c2;
        }

        .form-msg.error {
          color: #ff6b6b;
        }

        .footer-mark {
          margin-top: 80px;
          font-size: 12px;
          letter-spacing: 0.4px;
          color: rgba(255,255,255,0.45);
          text-align: center;
        }
      `}</style>
    </section>
  );
}
