class footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <!-- Start: Footer -->
        <footer class="footer">
            <div class="container wide ">
                <div class="row footer__widgets">
                    <div class="col l-4 m-6 c-12">
                        <img src="./assets/img/logo-white.png" class="mb-24" alt="">
                        <div class="footer__content mb-24">
                            <p><b>PHONE REPAIR </b> là dịch vụ sửa chữa di động linh hoạt hàng đầu dành cho điện thoại thông minh mới hoặc đã qua sử dụng tại Việt Nam. Chuyên tất cả các dòng thiết bị điện tử công nghệ trên toàn thế giới</p>
                        </div>
                    </div>
                    <div class="col l-4 m-6 c-12">
                        <div class="footer__mid-title mb-24">
                            <h3>Công Ty</h3>
                        </div>
                        <div class="footer__mid-link">
                            <div class="footer__link left mb-24">
                                <ul>
                                    <li>
                                        <a href=""></a>Trang chủ</li>
                                    <li>
                                        <a href=""></a>Giới thiệu</li>
                                    <li>
                                        <a href=""></a>Dịch vụ</li>
                                </ul>
                            </div>
                            <div class="footer__link right l-o-3 c-o-3 m-o-3 mb-24">
                                <ul>
                                    <li>
                                        <a href=""></a>Sản phẩm</li>
                                    <li>
                                        <a href=""></a>Liên hệ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col l-4 m-6 c-12">
                        <div class="footer__mid-title mb-24">
                            <h3>Liên hệ</h3>
                        </div>
                        <div class="footer__mid-address mb-24">
                            <p><i class="fas fa-phone"></i>+84-364303994</p>
                            <p><i class="fas fa-map-marker-alt"></i>FPT Polytechnic, Quận 12, TP.HCM</p>
                            <p><i class="fas fa-envelope"></i>phattran28052002@gmail.com</p>

                        </div>
                        <div class="footer__mid-title">
                            <h3>Theo dõi chúng tôi</h3>
                        </div>
                        <div class="footer__mid-social mt-24">
                            <a href="https://www.facebook.com/Accounts.Phat/"><i class="fab fa-facebook"></i></a>
                            <a href="https://github.com/ttphat2805"><i class="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/__tphattts.28/"><i class="fab fa-instagram-square"></i></a>
                            <a href="https://www.linkedin.com/in/trantanphat/"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="footer__bottom creator">
            <div class="col l-12 m-12 c-12 mt-24">
                <p>Copyright © 2021 PHONE REPAIR. All rights reserved.<br /> Design by: Trần Tấn Phát</p>
            </div>
        </div>


        <!-- END FT -->
        `
    }
}

customElements.define('app-footer', footer)
