import React from "react";
import "../../styles/Footer.scss";
import youtube from "../../asset/images/youtube.png";
import facebook from "../../asset/images/facebook.png";
import instagram from "../../asset/images/instagram.png";
import github from "../../asset/images/github.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__grid">
          <div className="footer__grid--item">
            <h4 style={{ fontSize: "23px" }}> Chăm sóc khách hàng</h4>

            <div className="footer__grid--item--title">
              <p>Đặt hàng từ 7:00 am - 10:00 pm</p>
            </div>
            <div className="footer__grid--item--title">
              <p>Gỉam 20% khi thanh toán qua thẻ</p>
            </div>
            <div className="footer__grid--item--title">
              <p>Khuyến mãi siêu rẻ với giá 0 đồng</p>
            </div>
          </div>
          <div className="footer__grid--item">
            <h4 style={{ fontSize: "23px" }}>Tổng đài hỗ trợ</h4>
            <div className="footer__grid--item--title">
              <p>Liên hệ đặt hàng</p>
              <span>0954453423232</span>
            </div>
            <div className="footer__grid--item--title">
              <p>Chăm sóc đặt hàng</p>
              <span>0954453423232</span>
            </div>
            <div className="footer__grid--item--title">
              <p>Thắc mắc đơn hàng</p>
              <span>0954453423232</span>
            </div>
            <div className="footer__grid--item--title">
              <p>Góp ý, khiếu nại</p>
              <span>0954453423232</span>
            </div>
          </div>
          <div className="footer__grid--item">
            <h4 style={{ fontSize: "23px" }}> Về LTA</h4>
            <div className="footer__grid--item--title">
              <p>Giới thiệu</p>
            </div>
            <div className="footer__grid--item--title">
              <p>Liên hệ</p>
            </div>
            <div className="footer__grid--item--title">
              <p>Tin tức</p>
            </div>
            <div className="footer__grid--item--title">
              <p>Hệ thống cửa hàng</p>
            </div>
          </div>
          <div className="footer__grid--item">
            <h4 style={{ fontSize: "23px" }}>Liên hệ</h4>
            <div className="footer__grid--item--title">
              <img src={youtube} alt="" />
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={github} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
