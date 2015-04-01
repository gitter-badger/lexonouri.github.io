//init

$("#intro").show()
$("#blog").hide()

$("#intro-btn").click(function(){
    $("#intro").show()
    $("#intro-btn").removeClass('active')
    $("#blog").hide()
    $("#blog-btn").removeClass('navbar-element-active').removeClass('active').addClass('navbar-element')
    $("#footer").show()
})

$("#blog-btn").click(function(){
    $("#blog").show()
    $("#blog-btn").removeClass('navbar-element').removeClass('active').addClass('navbar-element-active')
    $("#intro").hide()
    $("#footer").hide()
})