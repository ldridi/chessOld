function AddFriends() {
    
    var password = document.getElementById("password").value;
    
// Returns successful data submission message when the entered information is stored in database.
    var dataString = 'password1=' + password;
    if (password == '')
    {
        alert("Please Fill All Fields");
    }
    else
    {
//AJAX code to submit form.
        $.ajax({
            type: "POST",
            url: "member_add.php",
            data: dataString,
            cache: false,
            success: function(html) {
                $('.testlogin').html('ok');
            }
        });
        
    }
    return false;
}

