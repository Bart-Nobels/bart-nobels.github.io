//Navbar toggler
document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
    item.addEventListener('click', event => {
        // Sluit de collapse wanneer er op een link wordt geklikt
        var collapse = document.querySelector('.navbar-collapse');
        var bsCollapse = new bootstrap.Collapse(collapse);
        bsCollapse.hide();
    });
});



// Toggle dark mode
document.getElementById('darkmode-toggle').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
})

// Progress bar animation:
const skillsSection = document.getElementById('skills');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

//Hover animatie:
const aboutIconsSecondSet = document.querySelectorAll('.row-cols-1 > .col, .row-cols-sm-2 > .col, .row-cols-md-3 > .col, .row-cols-lg-4 > .col');

aboutIconsSecondSet.forEach(function (aboutIcon) {
    aboutIcon.addEventListener('mouseover', function () {
        const svgIcon = this.querySelector('svg');
        svgIcon.style.backgroundColor = 'skyblue';
    });

    aboutIcon.addEventListener('mouseout', function () {
        const svgIcon = this.querySelector('svg');
        svgIcon.style.backgroundColor = '#031633';
    });
});

const aboutIcons = document.querySelectorAll('.icons-text > div');

aboutIcons.forEach(function (aboutIcon) {
    aboutIcon.addEventListener('mouseover', function () {
        const svgIcon = this.querySelector('svg');
        svgIcon.style.backgroundColor = 'skyblue';
    });

    aboutIcon.addEventListener('mouseout', function () {
        const svgIcon = this.querySelector('svg');
        svgIcon.style.backgroundColor = '#031633';
    });
});

