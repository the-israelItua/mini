$(function(){

    /* Gallery: Displaying a subimage in the main image tab*/

   $('.sub-img img').click(function(){
       var source = this.src;
       $('.main-img img').attr('src',source);
       $('.sub-img img').removeClass('faded');
       $(this).addClass('faded');
   });

    
   /* Activating the menu button and swithching btw open and close in mobile view*/

   $('#btn1').click(function(){
        $('.navbar').css('left',0);
        $(this).css('display','none');
        $('#btn2').css('display','block')
   });
   $('#btn2').click(function(){
    $('.navbar').css('left','-100%');
    $(this).css('display','none');
    $('#btn1').css('display','block')
});

    /* Validating form*/

    $('#name').focus();
    $(':submit').click(function(){
        var nameField = $('#name').val();
        var mailField = $('#mail').val();

        if (nameField == ''){
            $('#name').after('<p>Please enter your name</p>');
        }
        if (validEmail(mailField)==false){
            $('#mail').after('<p> Please enter a valid E-mail</p>');   
        }

        function validEmail(address){
            var regexp = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regexp.test(address)){
                return false;
            }
            else{
                return true;
            }
        }
    });

    /* About Tabs*/
    $('a').click(function(){
        var $this = $(this);
        $('.panel').hide();
        $('a').removeClass('active');
        $this.addClass('active');
        var showPanel = $this.attr('href');
        $(showPanel).fadeIn(250);
        return false;
    });
    $('.tabs li:first a').click();
});