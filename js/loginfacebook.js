
     // Defaults to sessionStorage for storing the Facebook token
       openFB.init({
           appId: '157543477652947',
           status : true, // check login status
           cookie : true, // enable cookies to allow the server to access the session
           xfbml  : true, // parse XFBML
           oauth  : true // enable OAuth 2.0
   });

      //  Uncomment the line below to store the Facebook token in localStorage instead of sessionStorage
      //  openFB.init({appId: 'YOUR_FB_APP_ID', tokenStore: window.localStorage});

      function login() {
          openFB.login(
                  function(response) {
                      if(response.status === 'connected') {
                         // window.location.href = 'home.html';
                          //alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
						  /*openFB.api({
							  path: '/me',
							  success: function(data) {
								  ConnectMember(1);
							  }
						  });*/
						  getInfo();
                      } else {
                          alert('Facebook login failed: ' + response.error);
                      }
                  },
				  { scope: 'email,publish_actions', return_scopes: true });
      }

      function getInfo() {
          openFB.api({
              path: '/me',
              success: function(data) {
                  //alert(JSON.stringify(data));
				  sessionStorage.setItem("FacebookID",data.id);
				  sessionStorage.setItem("name",data.first_name);
				  sessionStorage.setItem("last_name",data.last_name);
				  sessionStorage.setItem("ImgMember",'http://graph.facebook.com/' + data.id + '/picture?type=small');
				  sessionStorage.setItem("email",data.email);
				  sessionStorage.setItem("birthday",data.birthday);
				  sessionStorage.setItem("genre",data.gender);
				  window.location.href = 'register_fb_gplus.html';
				  
                  /*document.getElementById("FacebookID").value = data.id;
				  document.getElementById("name").value = data.first_name;
                  document.getElementById("last_name").value = data.last_name;
				  document.getElementById("ImgMember").src = 'http://graph.facebook.com/' + data.id + '/picture?type=small';
                  //document.getElementById("id").innerHTML = data.id;
                  document.getElementById("email").value = data.email;
                  document.getElementById("birthday").value = data.birthday;
                  document.getElementById("genre").value = data.gender;*/
				  
				  //alert("ID : "+data.id+"ID FB : "+document.getElementById("FacebookID").value);
				  ConnectMember(1);
				  
              },
              error: errorHandler});
      }
      function errorHandler(error) {
        alert(error.message);
    }
