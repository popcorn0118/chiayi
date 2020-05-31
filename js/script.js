function horizontal() {
    wdth=$(window).width();
    height=$(window).height();
    /** 限制手機橫式 **/
    // if (wdth < height) {
    //     if(!$("body > div").hasClass("mask")) {
    //         $("body").prepend("<div class='mask'>請將手機橫轉為橫屏</div>");
    //     }
    // } else {
    //     $(".mask").remove();
    // }
    $('body').attr('style', `height:${height}px`);
}

$(document).ready(function(){
    horizontal()
    $(window).resize(function() {
        horizontal()
    });
});

/** 翻排動畫 (category_del) **/
// 答案選項按鈕(單選)
$(document).ready(function(){
    $(".only .orange .button").click(function(){
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
    });
});
// 答案選項按鈕(複選)
$(document).ready(function(){
    $(".multiple .orange .button").click(function(){
        $(this).toggleClass("active");
    });
});
// 解答,下一題按鈕
$('.error_border').hide();
var btnList = $(".category_right .orange").has(".active").prevObject
$(document).ready(function(){
    $(".ans_btn").click(function(){
        var arr = []
        Object.keys(btnList).forEach(name => {
            if (btnList[name].children) {
                if (btnList[name].children[0] !== undefined) {
                    var selBtn = btnList[name].children[0] && btnList[name].children[0].className.indexOf('active') > -1
                    arr.push(selBtn);
                    if (selBtn) {
                        // 加入答對,答錯印章
                        $(".category_right .orange .button.active + .seal").addClass("active");
                        // 點下解答按鈕後，所有選項按鈕不能按
                        $(".category_right .orange .button").attr('disabled', 'disabled');
                    }
                }
            }
         })
         // 有選答案才能翻牌
         if (arr.includes(true)) {
            $(".wrapper_3dImg .card").addClass("active");
            // "答案"按鈕隱藏，顯示"下一題"按紐
            $(this).hide();
            $('.error_border').show();
         } else {
            if ($(".category_right").hasClass('only')) {
                alert('請選擇一個答案');
            } else if($(".category_right").hasClass('multiple')) {
                alert('請至少選擇一個答案');
            }
            
         }
    });
});
