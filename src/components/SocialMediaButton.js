import { FaLinkedin } from "react-icons/fa";

export default function SocialMediaButton() {
  return (
    <a
      href="https://www.linkedin.com/in/ericxie02"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <FaLinkedin size={40} className="social-media-button" />
    </a>
  );
}
