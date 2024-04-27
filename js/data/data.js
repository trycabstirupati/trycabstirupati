export const menuList= [
    {
        menuId: 'm1',
        menuName: 'Home',
        url: '#',
        visible: true,
        footerVisible: false,
        subMenuList: []
    }, {
        menuId: 'm2',
        menuName: 'Our Services',
        url: '#',
        visible: true,
        footerVisible: false,
        subMenuList: []
    }, {
        menuId: 'm3',
        menuName: 'Packages',
        url: '#packages',
        visible: true,
        footerVisible: false,
        subMenuList: []
    }, {
        menuId: 'm4',
        menuName: 'About Us',
        url: '#',
        visible: false,
        footerVisible: false,
        subMenuList: []
    }, {
        menuId: 'm5',
        menuName: 'Contact Us',
        url: '#page-footer',
        footerurl: "tel:+917337277299",
        visible: true,
        footerVisible: true,
        isFooterButton: true,
        subMenuList: [
            {
                menuId: 'm5_s1',
                menuName: '',
                url: '',
                target: '_blank',
                title: 'facebook',
                imagePath: './images/contactus/facebook.svg',
                alt: 'connect facebook',
                visible: false,
                footerVisible: true,
                isLink: false
            },{
                menuId: 'm5_s2',
                menuName: '',
                url: '',
                target: '_blank',
                title: 'twitter',
                imagePath: './images/contactus/twitter.svg',
                alt: 'connect twitter',
                visible: false,
                footerVisible: true,
                isLink: false
            },{
                menuId: 'm5_s3',
                menuName: '',
                url: '',
                target: '_blank',
                title: 'linkedIn',
                imagePath: './images/contactus/linkedin.svg',
                alt: 'connect linkedIn',
                visible: false,
                footerVisible: true,
                isLink: false

            },{
                menuId: 'm5_s4',
                menuName: '',
                url: '',
                target: '_blank',
                title: 'youtube',
                imagePath: './images/contactus/youtube.svg',
                alt: 'connect youtube',
                visible: false,
                footerVisible: true,
                isLink: false
            }
        ]
    }
];

export const copyRightInformation = {
    textName: '© 2024 Try Cabs Tirupati. All Rights Reserved.',
    imagePath: './images/logo.png',
    alt: 'copyright logo'
};

export const footerEachSectionClass= 'col-sm-6 col-xl-3';

export const packagesInfo= {
    description: `<p>
        Discover the Wonders of Destination with Our Exclusive Travel Packages.
        With our travel packages, you'll enjoy luxurious travel, immersive experiences, and personalized service, all at an unbeatable value
    </p>
    <p>
        Don't wait any longer to experience the magic of yout Destination. 
        Browse our selection of travel packages and start planning your dream vacation today. 
        Contact us to book or inquire about customizing your itinerary.
    </p>`,
    packages: [
        {
            packageName: "Package-1",
            placeImages: [
                {
                    imagePath: "../images/packages/Tiruchanur_Padmavathi.jpg",
                    alt: "Tiruchanur Padmavathi"
                }, {
                    imagePath: "../images/packages/Govindaraja_Temple.jpg",
                    alt: "Govindaraja Temple"
                }, {
                    imagePath: "../images/packages/Ramalayam.jpg",
                    alt: "Ramalayam"
                }, {
                    imagePath: "../images/packages/Iskcon.jpg",
                    alt: "Iskcon"
                }, {
                    imagePath: "../images/packages/Kapila_Teertham.jpg",
                    alt: "Kapila Teertham"
                }, {
                    imagePath: "../images/packages/Srinivasa_Mangapuram.jpg",
                    alt: "Srinivasa Mangapuram"
                }, {
                    imagePath: "../images/packages/Vakulamatha_Temple.jpg",
                    alt: "Vakulamatha Temple"
                }
            ],
            placeNames: ["Tiruchanur Padmavathi", "Govindaraja Temple", "Ramalayam", "Iskcon", "Kapila Teertham", "Srinivasa Mangapuram", "Vakulamatha Temple"]
        }, {
            packageName: "Package-2",
            placeImages: [
                {
                    imagePath: "../images/packages/Srinivasa_Mangapuram.jpg",
                    alt: "Srinivasa Mangapuram"
                }, {
                    imagePath: "../images/packages/Kanipakam_Temple.jpg",
                    alt: "Kanipakam Temple"
                }, {
                    imagePath: "../images/packages/Tiruchanur_Padmavathi.jpg",
                    alt: "Tiruchanur Padmavathi"
                }, {
                    imagePath: "../images/packages/Sri_Kalakasthi.jpg",
                    alt: "Sri Kalakasthi"
                }
            ],
            placeNames: ["Srinivasa Mangapuram", "Kanipakam Temple", "Tiruchanur Padmavathi", "Sri Kalakasthi"]
        }, {
            packageName: "Package-3",
            placeImages: [
                {
                    imagePath: "../images/packages/Kanipakam_Temple.jpg",
                    alt: "Kanipakam Temple"
                }, {
                    imagePath: "../images/packages/Golden_Temple_Vellore.jpg",
                    alt: "Golden Temple Vellore"
                }, {
                    imagePath: "../images/packages/Arunachalam.jpg",
                    alt: "Arunachalam"
                }
            ],
            placeNames: ["Kanipakam Temple", "Golden Temple (Vellore)", "Arunachalam"]
        }, {
            packageName: "Package-4",
            placeImages: [
                {
                    imagePath: "../images/packages/Tiruthani.jpg",
                    alt: "Tiruthani"
                }, {
                    imagePath: "../images/packages/Kanchipuram.jpg",
                    alt: "Kanchipuram"
                }, {
                    imagePath: "../images/packages/Arunachalam.jpg",
                    alt: "Arunachalam"
                }
            ],
            placeNames: ["Tiruthani", "Kanchi", "Arunachalam"]
        }, {
            packageName: "Package-5",
            placeImages: [
                {
                    imagePath: "../images/packages/Srinivasa_Mangapuram.jpg",
                    alt: "Srinivasa Mangapuram"
                }, {
                    imagePath: "../images/packages/Kanipakam_Temple.jpg",
                    alt: "Kanipakam Temple"
                }, {
                    imagePath: "../images/packages/Golden_Temple_Vellore.jpg",
                    alt: "Golden Temple Vellore"
                }
            ],
            placeNames: ["Srinivasa Mangapuram", "Kanipakam", "Golden Temple (Vellore)"]
        }, {
            packageName: "Package-6",
            placeImages: [
                {
                    imagePath: "../images/packages/Tiruthani.jpg",
                    alt: "Tiruthani"
                }, {
                    imagePath: "../images/packages/Kanchipuram.jpg",
                    alt: "Kanchipuram"
                }, {
                    imagePath: "../images/packages/Sri_Kalakasthi.jpg",
                    alt: "Sri Kalakasthi"
                }
            ],
            placeNames: ["Tiruthani", "Kanchi", "Sri Kalahasti"]
        }, {
            packageName: "Package-7",
            placeImages: [
                {
                    imagePath: "../images/packages/Appalayagunta.png",
                    alt: "Appalayagunta"
                }, {
                    imagePath: "../images/packages/Gudimallam.png",
                    alt: "Gudimallam"
                }, {
                    imagePath: "../images/packages/Narayana_vanam.png",
                    alt: "Narayana vanam"
                }, {
                    imagePath: "../images/packages/Nagalapuram.png",
                    alt: "Nagalapuram"
                }, {
                    imagePath: "../images/packages/Suruttapalli.png",
                    alt: "Suruttapalli"
                }
            ],
            placeNames: ["Appalayagunta", "Gudimallam", "Narayana vanam", "Nagalapuram", "Surutta palli"]
        }, {
            packageName: "Package-8",
            placeImages: [
                {
                    imagePath: "../images/packages/Tirumala.png",
                    alt: "Tirumala"
                }, {
                    imagePath: "../images/packages/Srivari_padalu.png",
                    alt: "Srivari padalu"
                }, {
                    imagePath: "../images/packages/Silathoranam.png",
                    alt: "Silathoranam"
                }, {
                    imagePath: "../images/packages/Venugopala_swamy.png",
                    alt: "Venugopala swamy"
                }, {
                    imagePath: "../images/packages/Japali.png",
                    alt: "Japali"
                }, {
                    imagePath: "../images/packages/Papavinasanam.png",
                    alt: "Papavinasanam"
                }
            ],
            placeNames: ["Tirumala", "Srivari padalu", "Silathoranam", "Venugopala swamy", "Japali", "Papavinasanam"]
        }
    ]
}