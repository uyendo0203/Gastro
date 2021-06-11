
// form 
function isValidForm(form) {
    isValid = true;
    var REX_IS_NUMBER = new RegExp('^[0-9]*$');
    var REX_LOWERCASE = new RegExp('(?=.*[a-z])');
    var REX_UPPERCASE = new RegExp('(?=.*[A-Z])');
    var REX_NUMBER = new RegExp('(?=.*[0-9])');
    var REX_SPECIAL = new RegExp('(?=.[!@#\$%\^&])');
    var REX_INTERGER = new RegExp('^[0-9]*$');
    var REX_PHONE = new RegExp('^(0|84)[0-9]*$');
    var REX_EMAIL = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var REX_URL = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i);


    form.forEach(function (input) {
        var value = $(input.name).val();
        input.validators.forEach(function (validator) {
            switch (validator) {
                case 'required':
                    if (value === '') {
                        isValid = false;
                    }
                    break;
                case 'isNumber':
                    if (REX_IS_NUMBER.test(value) === false) {
                        isValid = false;
                    }
                    break;
                case 'min':
                    if (+value < input.min) {
                        isValid = false;
                    }
                    break;
                case 'max':
                    if (+value > input.max) {
                        isValid = false;
                    }
                    break;
                case 'minLength':
                    if (value.length < input.minLength) {
                        isValid = false;
                    }
                    break;
                case 'maxLength':
                    if (value.length > input.maxLength) {
                        isValid = false;
                    }
                    break;
                case 'email':
                    if (REX_EMAIL.test(value) === false) {
                        isValid = false;
                    }
                    break;
            }
        });
    });

    return isValid;
}
function validateForm($submit, form) {

    function updateView() {
        $($submit).attr("disabled", !isValidForm(form));
    }

    var arrElement = [];
    form.forEach(function (element) {
        arrElement.push(element.name);
    });

    $(arrElement.join(",")).on("change keyup", function () {
        updateView();
    });
    updateView();
}

function goToByScroll(echo) {
    let space = 70
    switch (echo) {
        case 'gioithieu':
            space = -30
            break;
        case 'dangky':
            space = -100
            break;
        case 'benhlydaday':
            space = -20
            break;
        default:
            space = -70
            break;
    }

    $('html,body').animate({
        scrollTop: $("#" + echo).offset().top + space,
    }, 'slow');
}

let MenuToggleMB = function () {
    $('.header-menu__mb').click(function () {
        $(this).toggleClass('active')
        $('.header-menu__nav').toggleClass('active')
    })
}

let Menu = function () {
    $('.header-menu__nav a').click(function (e) {
        e.preventDefault();

        let link = $(this).attr('link')

        $('.header-menu__nav a').removeClass('active');
        $('.header-menu__nav a[link="' + link + '"]').addClass('active');


        if (link != '' && link != undefined) {
            goToByScroll(link);
        }
    })
}


let PopupValidateForm = function () {
    var form = [{
        name: '.PopupName',
        validators: ['required']
    }, {
        name: '.PopupPhone',
        validators: ['required', 'isNumber', 'minLength', 'maxLength'],
        minLength: 10,
        maxLength: 10,
    }, {
        name: '.PopupEmail',
        validators: []
    }, {
        name: '.PopupNote',
        validators: []
    }]
    var $submit = ".popup__button button";
    validateForm($submit, form);
}

let sliderHome1 = function () {
    if ($(".home1__slider").length === 0) {
        return false
    }

    $(".home1__slider").slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    });

}
let sliderHome2 = function () {
    if ($(".home2__slider").length === 0) {
        return false
    }

    $(".home2__slider").slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    });
}
let sliderHome3 = function () {
    if ($(".home3__slider").length === 0) {
        return false
    }

    $(".home3__slider").slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
    });
}
let sliderHome4 = function () {
    if ($(".home4__bottom--slider").length === 0) {
        return false
    }

    $(".home4__bottom--slider").slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            },

        ]
    }).on('afterChange', function (event, slick) {
        $('.home4__bottom--img .img').removeClass('active')
        $('.home4__bottom--img .img[data-slide=' + slick.currentSlide + ']').addClass('active')
    });;
}
let sliderHome6 = function () {
    if ($(".home6__slider").length === 0) {
        return false
    }

    $(".home6__slider").slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '.home6__arrow .slick-prev',
        nextArrow: '.home6__arrow .slick-next',
    }).on('afterChange', function (event, slick) {
        $('.home6__content-item').removeClass('active')
        $('.home6__content-item[data-slide=' + slick.currentSlide + ']').addClass('active')
    });;
}



let GotoForm = function () {
    $('#home2_to_form').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $(".home5").offset().top - 150
        }, 1000);
    });
}

let MenuScrollFixed = function () {
    let headerHeight = $('.header').height()
    let windowHeight = $(window).scrollTop()
    if (windowHeight > (headerHeight + 10)) {
        $('.header').addClass('fixed')
    } else {
        $('.header').removeClass('fixed')
    }
}

$(window).on("load", function () {
    $('.loading').removeClass('active')
    new WOW().init();


    sliderHome1()
    sliderHome2()
    sliderHome3()
    sliderHome4()
    sliderHome6()

    MenuToggleMB()
    GotoForm()
    Menu()
});



var sections = $('section')
    , nav_text = $('.header-menu__nav')
    , nav_height = nav_text.outerHeight();

$(window).on("scroll", function () {

    // fixed menu 
    MenuScrollFixed()


    // active menu 
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav_text.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav_text.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});

$(window).on("resize", function () {

});