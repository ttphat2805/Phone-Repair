class header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <!-- BTN SCROLL TO TOP -->
        <button onclick="autoTop();" class="btnScrollTop">
            <i class="far fa-arrow-up"></i>
        </button>
        <!-- Start: Header - top -->
        <div class="header__top">
            <div class="container wide">
                <div class="row header__wrapper">
                    <div class="col l-2">
                        <div class="header-icon">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div class="col l-6 l-o-1">
                        <div class="open__time">
                            <span>Mở cửa: T2-T6 08:00‑18:00 Thứ 7 Chủ Nhật 10:00‑17:00</span>
                        </div>
                    </div>
                    <div class="col 1-4">
                        <div class="header__topbar-right">
                            <span>
                                Call now: +84-364303994
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End: Header - top -->
        <!-- Start: Header  -->
        <header>
            <div class="container wide">
                <div class="row header nav-mobile-tablet">
                    <div class="col l-3">
                        <div class="header__logo">
                            <a href="">
                                <img src="./assets/img/logo-repair.png" alt="">
                            </a>
                        </div>
                    </div>
                    <!-- Nav PC-->
                    <div class="col l-6 l-o-1 hide-mobile-tablet">
                        <nav class="nav">
                            <ul class="nav__list">
                                <li class="nav__item">
                                    <a class="nav__link" href="./index.html">Trang Chủ</a>
                                </li>
                                <li class="nav__item">
                                    <a class="nav__link" href="./about.html">Giới thiệu</a>
                                </li>
                                <li class="nav__item">
                                    <a class="nav__link" href="./services.html">Dịch vụ</a>
                                </li>
                                <li class="nav__item">
                                    <a class="nav__link" href="./shop.html">Sản phẩm</a>
                                </li>
                                <li class="nav__item">
                                    <a class="nav__link" href="./contact.html">Liên hệ</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <!-- Nav Mobile-->
                    <nav class="nav__mobile">
                        <label for="nav__mobile" id="btn" class="nav__mobile m-o-10 mr-24">
                            <i class="fas fa-bars" id="icon"></i>
                        </label>
                        <input type="checkbox" id="nav__mobile">
                        <label for="nav__mobile" class="overlay__nav"></label>
                        <ul class="nav__mobile-list">
                            <li><a href="./index.html">Trang chủ</a></li>
                            <li><a href="./about.html">Giới thiệu</a></li>
                            <li><a href="./services.html">Dịch vụ</a></li>
                            <li><a href="./shop.html">Sản phẩm</a></li>
                            <li><a href="./contact.html">Liên hệ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <!-- End: Header-->
        `
    }
}

customElements.define('app-header', header)