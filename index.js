$(document).ready(function() {
    var count = 0; 
    $(".submit_btn").click(function(event) {
    var radio_check = $('.rad'); 
    var input_field = $('.text_field'); 
    var text_area = $('textarea');
    
    if (radio_check[0].checked == false && radio_check[1].checked == false) {
    var y = 0;
    } else {
    var y = 1;
    }
    
    for (var i = input_field.length; i > count; i--) {
    if (input_field[i - 1].value == '' || text_area.value == '') {
    count = count + 1;
    } else {
    count = 0;
    }
    }

    if (count != 0 || y == 0) {
    alert("*All Fields are mandatory*");
    event.preventDefault();
    } else {
    return true;
    }
    });

    $(".next_btn").click(function() { 
    $(this).parent().next().fadeIn('slow');
    $(this).parent().css({
    'display': 'none'
    });
    
    $('.active').next().addClass('active');
    });
    $(".pre_btn").click(function() { 
    $(this).parent().prev().fadeIn('slow');
    $(this).parent().css({
    'display': 'none'
    });
    
    $('.active:last').removeClass('active');
    });
   
    $(".submit_btn").click(function(e) {
    if ($('input').val() == "" || $('textarea').val() == "") {
    alert("*All Fields are mandatory*");
    return false;
    } else {
    return true;
    }
    });
    $('#contact_email').on('input', function() {
        var input=$(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email=re.test(input.val());
        if(is_email){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    $('#contact_name').on('input', function() {
        var input=$(this);
        var is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid");}
        else
        {input.removeClass("valid").addClass("invalid");
        alert("Fill Input")
    }
    });
    });