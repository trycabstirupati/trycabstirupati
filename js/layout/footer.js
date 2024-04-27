import {menuList, copyRightInformation, footerEachSectionClass} from '../data/data.js';

export function addFooterMarkup() {
    let markupContent= '';
    markupContent+= `
            <div class="footer-menu-container">
                <div class="container justify-child-rows">
                    <div class="row sitemap-wrapper text-center text-sm-start" id="menu-list"></div>
                </div>
                <div class="copyright-container mt-5 text-center text-lg-start" id="footer-copyright"></div>
            </div>
            <div class="container scedhule-call-button__wrapper">
                <a href="tel:+917337277299" class="schedule-call-button" aria-current="page" target="_blank">
                    <img class="call-icon-class" src='./images/contactus/phone.png' alt="Make a Call"/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=917337277299" class="schedule-call-button" aria-current="page" target="_blank">
                    <img class="whatsapp-icon-class" src='./images/contactus/whatsapp.png' alt="Whatsapp Us"/>
                </a>
            </div>
    `;

    $('#page-footer').html(markupContent);

    renderFooterMenu();
    renderFooterCopyRightInformation();
}

function renderFooterMenu(){
    let htmlContent= "";
    menuList.forEach(item=>{
        if(!item.footerVisible){
            return true;
        }
        if(item.menuId != "m5"){
                htmlContent+= `
                    <div class="${footerEachSectionClass} sitemap-col-section">
                        <div class="menu-heading">${item.menuName}</div>
                `
                item.subMenuList.forEach(item=>{
                    if(item.footerVisible) {
                        htmlContent+= `
                            <div class="menu-items">
                                <div class="menu-item"><a href="${item.url}">${item.menuName}</a></div>
                            </div>
                        `;
                    }
                });
                htmlContent+= `</div>`;
        } else {
            htmlContent+= `
                <div class="${footerEachSectionClass} my-4 my-sm-auto text-xl-center sitemap-col-section">
                    <div class="contactus-button">
                        <a href="${item.footerurl ? item.footerurl : item.url}" class="footer-button">${item.menuName}</a>
                    </div>
            `;
            item.subMenuList.forEach(item=>{
                if(item.footerVisible && item.isLink){
                    htmlContent+= `
                        <div class="menu-items">
                            <div class="menu-item" style="margin-top: 12px;"><a href="${item.url}">${item.menuName}</a></div>
                        </div>
                    `;
                } else if(item.footerVisible) {
                    htmlContent+= `
                        <div class="social-icons-container mt-2 d-inline">
                            <a title="${item.title}" href="${item.url}" target="${item.target}" class="footer-social-icon">
                                <img src="${item.imagePath}" alt="${item.alt}" />
                            </a>
                        </div>
                    `;
                }
            });
            htmlContent+=`</div>`
        }
    });
    $('#menu-list').html(htmlContent);
}

function renderFooterCopyRightInformation(){
    let htmlContent= "";
        htmlContent+= `
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 my-auto">
                        <p class="copyright-content mb-0">${copyRightInformation.textName}</p>
                    </div>
                    <div class="col-lg-4 mt-4 mt-lg-0 text-center text-lg-end">
                        <img class="copyright-logo" src="${copyRightInformation.imagePath}" alt="${copyRightInformation.alt}" />
                    </div>
                </div>
            </div>
        `;
    $('#footer-copyright').html(htmlContent);
}