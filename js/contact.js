var googleForm = $(window).jqGoogleForms({"formKey": "1k_IvQSonsbi9BYup-XtIuZxHdbnMBcmWveG43UXP3xs"});

$('#contact_form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
    //alert( "bad");
  } else {

    //alert( "good");
    googleForm.sendFormData({
        "entry.2010262799": $("#name").val(),

        "entry.2112643108": $("#email").val(),

        "entry.1968100051": $("#number").val(),

        "entry.1905370755": $("#message").val(),
        });
    //stop the form submitting
    e.preventDefault();

    //window.location.replace("./too-many-orders");
  }
});
