$("p.error").hide().show("slow");
$("li").hide().parent().before("<a href='#'>Show Tech Giants</a>");
$("a").click(function(){
    $("li").show("slow");
});
