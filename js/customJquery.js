$(document).ready(function(){
	var navHeight=$('nav').height();
	$('body').css({'padding-top':navHeight+35+'px'});

        $('[data-toggle="popover"]').popover({ trigger: "hover" });
                    $('#datetimepicker1, #datetimepicker2, #datetimepicker3').datetimepicker({
                        minDate:new Date(),
                        format: 'MM/DD/YYYY'
        });

	 $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
    });

     $('#u-l-submit').click(function() {
        validateLoginForm();
     });

     function validateLoginForm(){
        var emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        var passRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        var uEmail = $("#user-email").val();
        var uPassword = $("#user-password").val();

        if (uEmail == " ") {
            $("#user-email").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(emailRegex.test(uEmail))){
             $("#user-email").removeClass('greenborder').addClass('redborder');
        }
        else {
            $("#user-email").removeClass('redborder').addClass('greenborder');
            alert('email data valid');
        }

        if (uPassword == " ") {
            $("#user-password").removeClass('greenborder').addClass('redborder');
        } 
         else if(!(passRegex.test(uPassword))){
             $("#user-password").removeClass('greenborder').addClass('redborder');
        }
        else {
            $("#user-password").removeClass('redborder').addClass('greenborder');
            alert('password data valid');
        }

     }

       $('#user-reg-submit').click(function() {
        validateRegForm();
     });
      
    function validateRegForm(){
        var usernameRegex = /[A-Za-z]{3,}/;
        var useremailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        var userphonenum = /[0-9]{10}/;
        var passRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        var allowAlpha = /[A-Za-z]{3,}/;

        var urName = $("#userreg-name").val();
        var urEmail = $("#userreg-email").val();
        var urPhNum = $("#userreg-ph").val();
        var urOrg = $("#userreg-org").val();
        var urDeg = $("#userreg-deg").val();
        var urCity = $("#userreg-city").val();
        var urState = $("#userreg-state").val();
        var urPassword = $("#userreg-pass").val();
        var urConPass = $("#userreg-confim-pass").val();
        
        /*user name*/
         if (urName == " "){
            $("#userreg-name").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(usernameRegex.test(urName))){
             $("#userreg-name").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#userreg-name").removeClass('redborder').addClass('greenborder');
            alert('user name data valid');
        }

        /*user email*/
        if (urEmail == " "){
            $("#userreg-email").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(useremailRegex.test(urEmail))){
             $("#userreg-email").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#user-email").removeClass('redborder').addClass('greenborder');
            alert('user email data valid');
        }

        /*user phone number*/
        if (urPhNum == " "){
            $("#userreg-ph").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(userphonenum.test(urPhNum))){
             $("#userreg-ph").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#userreg-ph").removeClass('redborder').addClass('greenborder');
            alert('phone number data valid');
        }

        /*Organization*/
         if (urOrg == " "){
            $("#userreg-org").removeClass('greenborder').addClass('redborder');
        } 
           else if(!(allowAlpha.test(urOrg))){
             $("#userreg-org").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#userreg-org").removeClass('redborder').addClass('greenborder');
            alert('Organization data valid');
        }

           /*Designation*/
         if (urDeg == " "){
            $("#userreg-deg").removeClass('greenborder').addClass('redborder');
        } 
           else if(!(allowAlpha.test(urDeg))){
             $("#userreg-deg").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#userreg-deg").removeClass('redborder').addClass('greenborder');
            alert('Designation data valid');
        }

         /*city*/
         if (urCity == " "){
            $("#userreg-city").removeClass('greenborder').addClass('redborder');
        } 
           else if(!(allowAlpha.test(urCity))){
             $("#userreg-city").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#userreg-city").removeClass('redborder').addClass('greenborder');
            alert('city data valid');
        }


     /*State*/
         if (urState == " "){
            $("#userreg-state").removeClass('greenborder').addClass('redborder');
        } 
           else if(!(allowAlpha.test(urState))){
             $("#userreg-state").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#userreg-state").removeClass('redborder').addClass('greenborder');
            alert('State data valid');
        }

        /*password*/
        if (urPassword == " "){
            $("#userreg-pass").removeClass('greenborder').addClass('redborder');
        } 
         else if(!(passRegex.test(urPassword))){
             $("#userreg-pass").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#userreg-pass").removeClass('redborder').addClass('greenborder');
            alert('password data valid');
        }

         /*Confirm password*/
        if (urConPass == " "){
            $("#userreg-confim-pass").removeClass('greenborder').addClass('redborder');
        } 
         else if(!(passRegex.test(urConPass))){
             $("#userreg-confim-pass").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#userreg-confim-pass").removeClass('redborder').addClass('greenborder');
            alert('Confirm password data valid');
        }

     }

         $('#post-event-1').click(function(){
                validatePostEvent1Form();
            });

             function validatePostEvent1Form(){
        var con_per_nameRegex = /[A-Za-z]{3,}/;
        var con_per_emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        var con_per_phonenum = /[0-9]{10}/;
        var allowAlpha = /[A-Za-z]{3,}/;
        var fullAddReg =/[ A-Za-z0-9_@./#&+-]$/;
        var dateValidationReg = /^(0[1-9]|1\d|2\d|3[01]).(0[1-9]|1[0-2]).(19|20)\d{2}$/;
        var con_per_name =  $("#p-contactPerson").val();
        var con_per_email = $("#p-organizerEmail").val();
        var con_per_phone = $("#p-contactNumber").val();
        var con_per_altr_email = $("#p-organizerAlternativeEmail").val();
        var con_per_altr_ph_num = $("#p-contactAlternativeNumber").val();

        var event_title = $("#event-title").val();
        var event_start_date = $("#datetimepicker1").val();
        var event_end_date = $("#datetimepicker2").val();
        var event_last_date_reg = $("#datetimepicker3").val();
        var event_venue_location = $("#venue-location").val();
        var event_venue_city = $("#venue-city").val();
        var event_venue_state = $("#venue-state").val();
        var event_full_address = $("#venue-full-address").val();
        var event_website = $("#event-website").val();

           /*c p user name*/
         if (con_per_name == " "){
            $("#p-contactPerson").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(con_per_nameRegex.test(con_per_name))){
             $("#p-contactPerson").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#p-contactPerson").removeClass('redborder').addClass('greenborder');
            alert('contact person name data valid');
        }

        /*c p user email*/
        if (con_per_email == " "){
            $("#p-organizerEmail").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(con_per_emailRegex.test(con_per_email))){
             $("#p-organizerEmail").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#p-organizerEmail").removeClass('redborder').addClass('greenborder');
            alert('contact person email data valid');
        }

             /*c p a user email*/
        if (con_per_altr_email == " "){
            $("#p-organizerAlternativeEmail").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(con_per_emailRegex.test(con_per_altr_email))){
             $("#p-organizerAlternativeEmail").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#p-organizerAlternativeEmail").removeClass('redborder').addClass('greenborder');
            alert('contact person alternative user email data valid');
        }
        
        /*c p user phone number*/
        if (con_per_phone == " "){
            $("#p-contactNumber").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(con_per_phonenum.test(con_per_phone))){
             $("#p-contactNumber").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#p-contactNumber").removeClass('redborder').addClass('greenborder');
            alert('contact person phone number data valid');
        }
      

        /* c p a user phone number*/
        if (con_per_altr_ph_num == " "){
            $("#p-contactAlternativeNumber").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(con_per_phonenum.test(con_per_altr_ph_num))){
             $("#p-contactAlternativeNumber").removeClass('greenborder').addClass('redborder');
        }
        else{
            $("#p-contactAlternativeNumber").removeClass('redborder').addClass('greenborder');
            alert('contact person alternative phone number data valid');
        }


        /*event name*/

         if (event_title == " "){
            $("#event-title").removeClass('greenborder').addClass('redborder');
        } 
           else if(!(allowAlpha.test(event_title))){
             $("#event-title").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#event-title").removeClass('redborder').addClass('greenborder');
            alert('Event Name data valid');
        }

        /*event start date*/

     /*    if (event_start_date == " "){
            $("#datetimepicker1").removeClass('greenborder').addClass('redborder');
        } 
          else if(!(dateValidationReg.test(event_start_date))){
             $("#datetimepicker1").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#datetimepicker1").removeClass('redborder').addClass('greenborder');
            alert('Event start date valid');
        }*/

         /*event end date*/
/*
         if (event_end_date == " "){
            $("#datetimepicker2").removeClass('greenborder').addClass('redborder');
        } 
          else if(!(dateValidationReg.test(event_end_date))){
             $("#datetimepicker2").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#datetimepicker2").removeClass('redborder').addClass('greenborder');
            alert('Event end date valid');
        }*/

         /*event last date for registration*/
         
      /*   if (event_last_date_reg == " "){
            $("#datetimepicker3").removeClass('greenborder').addClass('redborder');
        } 
          else if(!(dateValidationReg.test(event_last_date_reg))){
             $("#datetimepicker3").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#datetimepicker3").removeClass('redborder').addClass('greenborder');
            alert('Event last date registration valid');
        }*/

        /*event venue location*/

         if (event_venue_location == " "){
            $("#venue-location").removeClass('greenborder').addClass('redborder');
        } 
           else if(!(allowAlpha.test(event_venue_location))){
             $("#venue-location").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#venue-location").removeClass('redborder').addClass('greenborder');
            alert('Event location data valid');
        }

         /*event venue city*/

         if (event_venue_city == " "){
            $("#venue-city").removeClass('greenborder').addClass('redborder');
        } 
           else if(!(allowAlpha.test(event_venue_city))){
             $("#venue-city").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#venue-city").removeClass('redborder').addClass('greenborder');
            alert('Event city data valid');
        }

          /*event venue state*/

         if (event_venue_state == " "){
            $("#venue-state").removeClass('greenborder').addClass('redborder');
        } 
           else if(!(allowAlpha.test(event_venue_state))){
             $("#venue-state").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#venue-state").removeClass('redborder').addClass('greenborder');
            alert('Event state data valid');
        }

        /*event venue Full Address*/

         if (event_full_address == " "){
            $("#venue-full-address").removeClass('greenborder').addClass('redborder');
        } 
        else if(!(fullAddReg.test(event_full_address))){
             $("#venue-full-address").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#venue-full-address").removeClass('redborder').addClass('greenborder');
            alert('Event full address data valid');
        }

        /*event venue website*/

         if (event_website == " "){
            $("#event-website").removeClass('greenborder').addClass('redborder');
        } else if(!(fullAddReg.test(event_website))){
             $("#event-website").removeClass('greenborder').addClass('redborder');
        }
         else{
            $("#event-website").removeClass('redborder').addClass('greenborder');
            alert('Event web site data valid');
        }



    }


});

/*  Ripple-effect animation */
