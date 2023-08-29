window.addEventListener('scroll',function(){
    if(window.pageYOffset > 100 ){
        document.querySelector('nav').classList.add('bg-dark','navbar-dark');
    }else{
        document.querySelector('nav').classList.remove('bg-dark','navbar-dark');
    }
})
function dark(){
    document.querySelector('nav').classList.add('bg-dark','navbar-dark');
}
function showlogModel(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginpage').classList.add('showloginpage');
}
function closelogModel(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginpage').classList.remove('showloginpage');
}
function showsignModel(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.signuppage').classList.add('showsignuppage');
}
function closesignModel(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.signuppage').classList.remove('showsignuppage');
}
function closesignupModel(){
    document.querySelector('.signuppage').classList.remove('showsignuppage');
}
function closeloginModel(){
    document.querySelector('.loginpage').classList.remove('showloginpage');
}