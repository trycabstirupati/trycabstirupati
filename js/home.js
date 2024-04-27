import {createPageLayout} from './layout/index.js';
import {packagesInfo} from './data/data.js';

$(document).ready(() => {
    createPageLayout();
    $('.dropdown-menu').on("click.bs.dropdown", function (e) {
        if($(e.target).hasClass('submenu-items')) {
            e.stopPropagation();
            e.preventDefault();
        }
    });
    
    renderKeyHighlightsOptions();
    $('#landing-page').removeClass('d-none');
});

function renderKeyHighlightsOptions() {
    let htmlMarkup= '';
    $.each(packagesInfo.packages, (index, item) => {
        htmlMarkup+=
            `
                <div class="col-10 col-sm-6 col-md-3 mt-5">
                    <div class="polaroid">
                        <div id="${item.packageName}${index}" class="carousel slide" data-bs-ride="carousel">
                            <!-- The slideshow/carousel -->
                            <div class="carousel-inner">
                                ${renderPackageCarouselImages(item)}
                            </div>
                            <!-- Left and right controls/icons -->
                            <button class="carousel-control-prev" type="button" data-bs-target="#${item.packageName}${index}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${item.packageName}${index}" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        <div class="py-3 packages-places-section">
                            <ul>
                                ${renderPlaces(item.placeNames)}
                            </ul>
                        </div>
                    </div>
                </div>
            `
    });

    $('.package-options-wrapper div.row').html(htmlMarkup);
}

function renderPackageCarouselImages(item) {
    let htmlMarkup= '';
    $.each(item.placeImages, (index, item) => {
        htmlMarkup+= `
            <div class="carousel-item${index === 0 ? ' active' : ''}">
                <img src="${item.imagePath}" alt=${item.alt} class="d-block" style="width:100%">
            </div>
        `;
    });

    return htmlMarkup;
}

function renderPlaces(places) {
    let htmlMarkup= '';
    $.each(places, (index, place) => {
        htmlMarkup+= `<li>${place}</li>`;
    });

    return htmlMarkup;
}