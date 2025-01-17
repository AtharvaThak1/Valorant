var overlay = document.getElementById("overlay")
var userAccount = document.getElementById("userAccount")
var playNowBtn = document.getElementById("play-now-btn")
var closeD = document.getElementById("close")
var riotGames = document.getElementById("riot-games")
var riotLogoNavbar = document.getElementById("riot-logo-navbar")
var riotLogoNavbarMq = document.getElementById("riot-logo-navbar-mq")
var riotLogoNavbarOverlay = document.getElementById("riot-logo-navbar-overlay")
var riotGamesNavbar = document.getElementById("riot-games-navbar")
var navbarClose = document.getElementById("navbar-close")
var btn = document.getElementById("btn")

window.addEventListener('DOMContentLoaded', ()=>{
    riotGames.addEventListener('click', ()=>{
        riotLogoNavbar.style.visibility = 'initial'
        riotLogoNavbarMq.classList.add("show")
        riotLogoNavbar.style.width = '100%'
        riotLogoNavbar.style.height = '496px'
        riotLogoNavbar.style.borderRadius = '0'
        riotLogoNavbarOverlay.style.display = 'flex'
        window.document.body.style.overflow = 'hidden'
        riotLogoNavbar.style.transition = 'all ease 0.2s'
    })
    
    function hideNavbar(){
        riotLogoNavbarMq.classList.remove("show")
        riotLogoNavbar.style.transition = 'all ease 0s'
        riotLogoNavbar.style.visibility = 'hidden'
        riotLogoNavbar.style.borderBottomLeftRadius = '50%'
        riotLogoNavbar.style.borderBottomRightRadius = '50%'
        riotLogoNavbarOverlay.style.display = 'none'
        riotLogoNavbar.style.display = 'initial'
        window.document.body.style.overflow = 'initial'
    }
    
    riotLogoNavbarOverlay.addEventListener('click', hideNavbar)
    riotGamesNavbar.addEventListener('click', hideNavbar)
    navbarClose.addEventListener('click', hideNavbar)
    
    function hide(){
        overlay.style.display = 'none'
        userAccount.style.display = 'none'
    }
    
    function show(){
        overlay.style.display = 'initial'
        userAccount.style.display = 'initial'
    }
    
    playNowBtn.addEventListener("click", show)
    overlay.addEventListener("click", hide)
    closeD.addEventListener("click", hide)

    btn.addEventListener('click', ()=>{
        window.location.href = 'valorantPlatformSelection.html'
    })

})