window.onload=function () {
    imgLocation("container","box");
    var imgdata={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"}]}
    window.onscroll=function () {
        if(checkflag())
        {
            var cparent=document.getElementById("container");
            for(var i=0;i<imgdata.data.length;i++)
            {
                var ccontent=document.createElement("div");
                ccontent.className="box";
                cparent.appendChild(ccontent);
                var boximg=document.createElement("div");
                boximg.className="box_img";
                ccontent.appendChild(boximg);
                var img =document.createElement("img");
                img.src="img/"+imgdata.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("container","box");
        }
    }
}
function imgLocation(parent,content) {
    var cparent=document.getElementById(parent);
    var ccontet=getChildElement(cparent,content);
    var imgWidth=ccontet[0].offsetWidth;
    var num=Math.floor(document.documentElement.clientWidth/imgWidth);
    cparent.style.cssText="width:"+imgWidth*num+"px;margin:0 auto;";

    var BoxHeightArr=[];
     for(var i=0;i<ccontet.length;i++)
     {
         if(i<num)
         {
             BoxHeightArr[i]=ccontet[i].offsetHeight;
         }
         else {
             var minHeight= Math.min.apply(null,BoxHeightArr);
             var minindex=getminheightlocation(BoxHeightArr,minHeight);
             ccontet[i].style.position="absolute";
             ccontet[i].style.top=minHeight+"px";
             ccontet[i].style.left=ccontet[minindex].offsetLeft+"px";
             BoxHeightArr[minindex]=BoxHeightArr[minindex]+ccontet[i].offsetHeight;

         }
     }
}
function checkflag() {
    var cparent=document.getElementById("container");
    var ccontent=getChildElement(cparent,"box");
    var lastcontentheight=ccontent[ccontent.length-1].offsetTop;
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    var pageheight=document.documentElement.clientHeight||document.body.clientTop;
    if(lastcontentheight<scrolltop+pageheight)
    {
        return true;
    }
}
function getminheightlocation(BoxHeightArr,minHeight) {
    for(var i in BoxHeightArr)
    {
        if(BoxHeightArr[i]==minHeight)
            return i;
    }
}
function getChildElement(parent,content) {
    var contentArr=[];
    var allcontent=parent.getElementsByTagName("*");
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content)
        {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}