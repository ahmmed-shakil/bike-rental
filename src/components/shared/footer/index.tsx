import { Col, Row } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="border-t border-primary">
      {/* Main Footer Section */}
      <Row className="max-w-7xl mx-auto py-4 w-full items-center">
        {/* Logo Section */}
        <Col
          xs={24}
          sm={8}
          className="text-center sm:text-left mb-4 sm:mb-0 ite"
        >
          <h2 className=" text-3xl md:text-4xl font-semibold">
            Throttle<span className="text-primary">X</span>
          </h2>
        </Col>

        {/* Social Media Icons */}
        <Col
          xs={24}
          sm={8}
          className="flex justify-center mb-4 sm:mb-0 space-x-4"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined style={{ fontSize: "20px", color: "#4267B2" }} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined style={{ fontSize: "20px", color: "#1DA1F2" }} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined style={{ fontSize: "20px", color: "#E1306C" }} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined style={{ fontSize: "20px", color: "#0077B5" }} />
          </a>
        </Col>

        {/* Website Links */}
        <Col
          xs={24}
          sm={8}
          className="flex justify-center sm:justify-end space-x-6"
        >
          <a href="/privacy-policy" className="text-muted">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-muted">
            Terms of Service
          </a>
          <a href="/contact-us" className="text-muted">
            Contact Us
          </a>
        </Col>
      </Row>

      {/* Footer Bottom Section */}
      <Row className=" pt-4">
        <Col span={24} className="text-center text-muted">
          &copy; {new Date().getFullYear()} ThrottleX. All rights reserved.
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
