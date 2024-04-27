import {menuList} from '../data/data.js';

export function addHeaderMarkup() {
    let markupContent= '';
    markupContent+= `
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
            <div class="container mb-3">
                <a class="navbar-brand" href="index.html">
                    <span class='page-logo'></span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse position-relative" id="navbarNav">
                    <ul class="navbar-nav ms-auto rounded-3 p-3">${renderMenuList()}</ul>
                </div>
            </div>
        </nav>
    `;

    $('#page-header').html(markupContent);

    function renderMenuList() {
        let menuMarkupContent= '';
        $.each(menuList, (index, item) => {
            let isSubMenuApplicable= item.subMenuList && item.subMenuList.length > 0 && item.subMenuList.filter(item => item.visible)?.length > 0;
            if(item.visible)
                menuMarkupContent+= `
                    <li class="nav-item ${ isSubMenuApplicable ? 'dropdown' : ''}">
                        <a target="${item.openInNewPage ? '_blank' : '_self'}" href="${item.url ? item.url : '#'}" class="nav-link ${isSubMenuApplicable ? 'dropdown-toggle' : (item.isButton ? 'nav-button' : '')}" role="${isSubMenuApplicable ? 'button' : ''}" data-bs-toggle="${isSubMenuApplicable ? 'dropdown' : ''}">
                            ${item.menuName}
                        </a>
                        ${ renderSubmenu(item.subMenuList) }
                    </li>
                `;
        });

        return menuMarkupContent;
    }

    function renderSubmenu(menus, isSSMenuApplicable) {
        if(menus == null || menus.length == 0) return '';
        let markupContent= `<ul class="dropdown-menu ${isSSMenuApplicable ? 'dropdown-submenu' : ''}">`;
        $.each(menus, (index, item) => {
            let isSubmenuApplicable= item.subMenuList && item.subMenuList.length > 0 && item.subMenuList.filter(item => item.visible)?.length > 0;
            if(item.visible)
                markupContent+= `
                    <li class="${isSubmenuApplicable ? 'dropend' : ''}">
                        <a href="${item.url ? item.url : '#'}" class="dropdown-item ${item.classList != null ? item.classList : ''} ${isSubmenuApplicable ? 'dropdown-toggle submenu-items' : ''}">${item.menuName}</a>
                        ${renderSubmenu(item.subMenuList, isSubmenuApplicable ? true : false)}
                    </li>
                `;
        });

        return markupContent+ '</ul>';
    }
}