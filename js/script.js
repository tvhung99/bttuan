//gọi jQuery khi tải tráng
$(document).ready(() =>{
    //lấy một phần tử : 
    // lấy phần tử có id là header
        let header = $('#header')
        let banner = $(".banner__desc")
        console.log(header)
    //lấy phần tử con của header :
        let childrenHeader = $('#header').children()
        console.log(childrenHeader)
    //lấy giá trị thuộc tính của thẻ con thẻ header
        let attrHeader = $('#header').children().attr('class')
        console.log(attrHeader)
    //thay đổi thuộc tính
        header.attr("data-collapse" , "collapse");
        console.log(header.attr("data-collapse"))
    //thay đổi nội dung trong thẻ
        banner.text("Đoạn Văn Bản Này Đã Bị Thay Thế")
    //Lựa chọn phần tử :
        //theo id #header
            console.log($("#header"))
        //theo class .banner_desc
            console.log($(".banner_desc"))
        //theo kiểu phần tử div
           console.log( $("div"))
        //các phần tử form input
            console.log($(":input"))
        //theo thuộc tính hiển thị visible
            console.log($("p:visible"))
        //theo phần tử cha và con
            console.log($(".banner__buttons > a"))
        //•	Chọn phần tử đầu tiên 
            console.log($(".banner__buttons > a:first-child"))
        //•	Chọn phần tử cuối cùng
            console.log($(".banner__buttons > a:last-child"))
        //chọn phần tử lẻ :
            console.log($(".banner__buttons > a:odd")) 
        //chọn phần tử chẵn :
            console.log($(".banner__buttons > a:even"))    
        //click :
            $("#login_button").click((e) =>{
                e.preventDefault();
                alert("Nhấn nút đăng nhập")
            })
        //dblclick 
            $("#purchase").dblclick((e)=>{
                e.preventDefault();
                alert("double click")
            })
        //mouse over
            $("#explore").on("mouseover" , () =>{
                alert("mouse over")
            })
        //focus :
            $(":input").focus(() =>{
                console.log("calling focus function");
        
            })
        //keypress , keydown , keyup
            $(":input").keypress((e) => {
                console.log("calling keypress function");
            })
            $(":input").keydown((e) => {
                console.log("calling keydown function");
            })
            $(":input").keydown((e) => {
                console.log("calling keyup function");
            })
            //ẩn hiện phần tử
            let click = true;
            $("#logo").click(function(){
                if(click) {
                    $(":input").show();
                    click = false;
                }
                else {
                    $(":input").hide();
                    click = true;
                }
                $(".header__nav").toggle()
            })
            //trượt
           $("#slideUp").click((e)=>{
               e.preventDefault();
               $("#text").slideUp("slow");
           })
           $("#slideDown").click((e)=>{
                e.preventDefault();
                $("#text").slideDown("fast");
            })
            $("#slideToggle").click((e)=>{
                e.preventDefault();
                $("#text").slideToggle(1000);
            })
            //fading in/out
            $("#fadeIn").click((e)=>{
                e.preventDefault();
                $("#text").fadeIn('fast');
            })
            $("#fadeOut").click((e)=>{
                e.preventDefault();
                $("#text").fadeOut('slow');
            })
            //animate
            $("#sizeEffect").click((e)=>{
                e.preventDefault();
                $("#text").animate({
                    width : '300px',
                    height : '100px',
                    padding : '0'
                
                } , 1000)
            })
            $("#fontEffect").click((e)=>{
                e.preventDefault();
                $("#text").animate({
                    fontSize : '2rem',
                    wordSpacing : '50px'
                })
            })

            //text() , html() , val()
            $("#textbtn").click((e)=>{
                e.preventDefault();
                $("#text").text("Thay Thế Văn Bản Bởi .text()")
            })
            $("#html").click((e)=>{
                e.preventDefault();
               
                $("#text").html('<a href="#">innerHTML using .html() </a>')
            })
            $("#val").click((e)=>{
                e.preventDefault();
                $("#input").val("fill value using .val")
            })
            //append , prepend
            $("#prepend").click((e)=>{
                e.preventDefault();
                $(".root").prepend("Welcome")
                $(".root").append("jQuery")
            })
            //after , before
            $("#before").click((e)=>{
                e.preventDefault();
                $(".root").before("<span>welcome</span>")
                $(".root").after("<span>jQuery</span>")
            })
            //wrapping
            $("#wrapping").click((e)=>{
                e.preventDefault();
                $(".root").wrapAll('<div id="wrapped"></div>')
                console.log($(".root").parent())
                
            })
            //replace
            $("#rep").click((e)=>{
                e.preventDefault();
                $(".root").replaceWith('<img src="./image/bn1.png" />')
            })
            //remove
            $("#rem").click((e)=>{
                e.preventDefault();
                $(".root").remove()
            })
            //clone
            $("#clone").click((e)=>{
                e.preventDefault();
                $(".root").clone().insertAfter(".root")
            })


            
})