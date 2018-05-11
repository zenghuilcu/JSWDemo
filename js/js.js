window.onload=function () {
    getImg("container","box")
}

function getImg(parent,content) {
    var cparent= document.getElementById(parent);
    var ccontent =getchild(cparent,content);
    var imgwidth=ccontent[2].offsetWidth;
    var num=Math.floor(document.documentElement.clientWidth / imgwidth);
    cparent.style.cssText="width:"+imgwidth+"px;margin:0 auto ";
    console.log(document.documentElement.clientWidth);
    console.log(ccontent)


}

function getchild(parent,content) {
    var contentarr=[];
    var allcontent =parent.getElementsByTagName("*");
    for (var i=0;i<allcontent.length;i++){
        if (allcontent[i].className=content) {
            contentarr.push(allcontent[i])
        }
    }
    return contentarr;
}