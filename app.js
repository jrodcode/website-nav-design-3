// ACTIVE NAV BTNS SECTION

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link-btn a');

// console.log(activePage);

navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active-nav-links");
    }
});


navMobileBtn();

// NAV SUB TRIGGERS SECTION

function subNavTrigger() {
    $(".mobile-nav-links-sub-trigger").click(function() {
        $(".mobile-nav-sub-links-1").slideToggle();
    })
}

subNavTrigger();

function subNavTrigger2() {
    $(".mobile-nav-links-sub-trigger-2").click(function() {
        $(".mobile-nav-sub-links-2").slideToggle();
    })
}

subNavTrigger2();


// OPEN MOBILE NAV SECTION

function navMobileBtn() {
    var navMobileBtn = $("#nav-icon");

    navMobileBtn.click(function() {
        navMobileBtn.addClass("open");
        $(".nav-mobile-links-container").css("top", "0");
        // $(".nav-mobile-links-bg").css("display", "block");
        $(".nav-mobile-links-bg").addClass("ease-in-bg");
        $(".nav-mobile-links-bg").removeClass("ease-out-bg");
    })
}

// CLOSE MOBILE NAV SECTION

var mobileNavContainer = $(".nav-mobile-links-container");

mobileNavContainer.click(function(event) {
    const navBtn2 = document.querySelector("#nav-icon");

    if (event.target.closest(".nav-mobile-links-content")) return;
    navBtn2.classList.remove("open");
    $(".nav-mobile-links-container").css("top", "-100%");
    // $(".nav-mobile-links-bg").css("display", "none");
    $(".nav-mobile-links-bg").addClass("ease-out-bg");
    $(".nav-mobile-links-bg").removeClass("ease-in-bg");
});