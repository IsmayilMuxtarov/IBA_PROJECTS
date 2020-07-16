// ----------------------------Our services section------------------
const list = document.querySelector('.tabs'),
    tabs = [...list.children],
    texts = [...document.querySelector('.tabs-content').children];


Hide();
texts[0].hidden = false;

//Clicking
list.addEventListener('click', event => {

    const pressed = event.target,
        pressedIndex = tabs.indexOf(pressed);

    removeActive();
    addActive(pressedIndex);
    removeHide(pressedIndex);

    if (pressed) {
        document.querySelector('.tabs-title::after').style.display = 'none';
    }
});

function addActive(index) {
    for (let tab of tabs) {
        tabs[index].classList.add('active');
    }
}

function removeActive() {
    for (let tab in tabs) {
        tabs[tab].classList.remove('active');

    }
}

function removeHide(index) {
    for (let tab of texts) {
        Hide();
        texts[index].hidden = false;
    }
}

function Hide() {
    for (let text in texts) {
        texts[text].hidden = true;
    }
}

//---------------------------------------- Our Work---------------------------------

const _CATEGORIES = Object.freeze([
    'Graphic Design',
    'Web Design',
    'Landing Pages',
    'Wordpress'
]);

const _TABS_CONTENT = Object.freeze([
    {
        imgSrc: 'img/our-work/img-2.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[0]
    },
    {
        imgSrc: 'img/our-work/img-3.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[0]
    },
    {
        imgSrc: 'img/our-work/img-4.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[0]
    },
    {
        imgSrc: 'img/our-work/img-5.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[1]
    },
    {
        imgSrc: 'img/our-work/img-6.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[1]
    },
    {
        imgSrc: 'img/our-work/img-7.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[1]
    },
    {
        imgSrc: 'img/our-work/img7.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[2]
    },
    {
        imgSrc: 'img/our-work/img-1.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[2]
    },
    {
        imgSrc: 'img/our-work/img-2.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[2]
    },
    {
        imgSrc: 'img/our-work/img-3.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[3]
    },
    {
        imgSrc: 'img/our-work/img-4.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[3]
    },
    {
        imgSrc: 'img/our-work/img5.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[3]
    },
    {
        imgSrc: 'img/our-work/img-2.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[0]
    },
    {
        imgSrc: 'img/our-work/img-3.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[0]
    },
    {
        imgSrc: 'img/our-work/img-4.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[0]
    },
    {
        imgSrc: 'img/our-work/img-5.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[1]
    },
    {
        imgSrc: 'img/our-work/img-6.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[1]
    },
    {
        imgSrc: 'img/our-work/img-7.png',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[1]
    },
    {
        imgSrc: 'img/our-work/img7.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[2]
    },
    {
        imgSrc: 'img/our-work/img-1.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[2]
    },
    {
        imgSrc: 'img/our-work/img-2.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[2]
    },
    {
        imgSrc: 'img/our-work/img-3.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[3]
    },
    {
        imgSrc: 'img/our-work/img-4.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[3]
    },
    {
        imgSrc: 'img/our-work/img5.jpg',
        title: 'CREATIVE DESIGN',
        category: _CATEGORIES[3]
    }
]);

let galleryWrapper = document.querySelector('.gallery-wrapper'),
    galleryItems = galleryWrapper.children;

//----------------------Creation of Gallery items

function showGalleryItems(start, end) {
    _TABS_CONTENT.slice(start, end).forEach(tabsItem => {
        const {imgSrc, title, category} = tabsItem,
            imgContainer = document.createElement('div'),
            img = document.createElement('img');

        imgContainer.classList.add('gallery-item');
        img.classList.add('gallery-item-img');

        img.src = imgSrc;
        imgContainer.dataset.category = category;

// ------------------  Hovering effect
        imgContainer.addEventListener('mouseenter', event => {
            const hoverContainer = document.createElement('div'),
                hoverShareIcon = document.createElement('img'),
                hoverSearchIcon = document.createElement('img'),
                hoverTitleText = document.createElement('h4'),
                hoverCategoryText = document.createElement('p');

            hoverContainer.classList.add('hover-container');
            hoverShareIcon.classList.add('hover-share-icon');
            hoverSearchIcon.classList.add('hover-search-icon');
            hoverTitleText.classList.add('hover-title-text');
            hoverCategoryText.classList.add('hover-category-text');

            hoverShareIcon.src = 'img/our-work/share-icon.png';
            hoverSearchIcon.src = 'img/our-work/search-icon.png';
            hoverCategoryText.innerText = category;
            hoverTitleText.innerText = title;

            hoverContainer.append(
                hoverShareIcon,
                hoverSearchIcon,
                hoverTitleText,
                hoverCategoryText
            );

            imgContainer.append(hoverContainer);
        });

        imgContainer.addEventListener('mouseleave', event => {
            imgContainer.querySelector('.hover-container').remove();
        });


        imgContainer.append(img);
        let galleryWrapper = document.querySelector('.gallery-wrapper');
        galleryWrapper.append(imgContainer);
    });
}

showGalleryItems(0, 12);

//----------------------------------  Sorting the gallery items (images)
ourWorkList = document.querySelector('.our-work-tabs');
ourWorkTabs = [...ourWorkList.children];

ourWorkList.addEventListener('click', event => {
    const pressed = event.target,
        pressedIndex = ourWorkTabs.indexOf(pressed);

    // ------adding and removing active class to the buttons
    ourWorkRemoveActive();
    ourWorkAddActive(pressedIndex);

    // -------------Sorting of image
    sorting(pressed);
});

//function (sorting images)
function sorting(pressed) {
    for (let content of _TABS_CONTENT) {
        for (let i in _TABS_CONTENT) {
            galleryItems[i].style.display = 'none';
            if (pressed.dataset.category === galleryItems[i].dataset.category) {
                galleryItems[i].style.display = 'inline-block';
            } else if (pressed.dataset.category === 'All') {
                galleryItems[i].style.display = 'inline-block';
            }
        }
    }
}

// -------------- function (removing active class to the buttons)
function ourWorkRemoveActive() {
    for (let tab in ourWorkTabs) {
        ourWorkTabs[tab].classList.remove('active');
    }
}

// -------------- function (adding active class to the buttons)
function ourWorkAddActive(index) {
    for (let tab of ourWorkTabs) {
        ourWorkTabs[index].classList.add('active');
    }
}


// Load more button
let loadButton = document.querySelector('.our-work-load-more');
let activeElement = document.querySelectorAll('.our-work-tab.active');
console.log(activeElement);

loadButton.addEventListener("click", () => {
    setTimeout(function () {
        showGalleryItems(12, 24);
        sorting(activeElement);
    }, 1000);
    loadButton.remove();
});