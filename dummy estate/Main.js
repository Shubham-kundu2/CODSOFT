$(document).ready(function(){
    $('.card').hover(function(){
      $(this).addClass('zoom', 300);
    }, function(){
      $(this).removeClass('zoom', 300);
    });
  });
  




  function openSignupPopup() {
   

    const popup2 = window.open("", "SignUp", "width=510,height=700,top=" + ((window.innerHeight - 500) / 2) + ",left=" + ((window.innerWidth - 400) / 2));
  
    // add HTML content to the popup
    popup2.document.write(`
    <html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">  
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <style>

        .c1{
            margin-top: 50px;
            width: 500px;
            border: 3px dashed salmon;
            height: 600px;
        }
        .c2{
            margin-top: 50px;
            width: 500px;
            border: 3px dashed salmon;
            height: 680px;
        }
        #i1{
            text-align: center;
        }
        a{
            color:rgb(255, 2, 204);
            font-size:110%;
        }

        </style>
        <title>Signup</title>
    </head>      
    <body>
        
        <div class="container c2">
            <div class="row">
                <p></p>
                <div id="i1">
                    <img src="https://cdn-icons-png.flaticon.com/512/2521/2521826.png" height="250px" width="250px">
                </div>
                <form id="signupform">
                    <div class="mb-3">
                      <label for="email" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                      <label for="Pass" class="form-label">Password</label>
                      <input type="password" class="form-control" id="Pass">
                    </div>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username">
                      </div>
                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="Check1">
                      <label class="form-check-label" for="Check1">I agree to the terms & conditions.</label>
                    </div>
                    <div id="i1">
                        <button type="button" class="btn btn-outline-success" id="submitsign" >SignUp</button>
                    </div>
                  </form>
                  <p></p>
                  <p style="font-size:18px">Already have an account? <a href="./login.html" ><b><i class="bi bi-arrow-left"></i></b></a> back to login page. </p>
                </div>
            </div>
        </div>
        
    </body>
</html>

    `);
  
    // add an event listener to the form submit button
    const form = popup2.document.getElementById("signupform");
    const submitButtonf = popup2.document.getElementById("submitsign");
submitButtonf.addEventListener("click", function(event) {
  // prevent the default form submission behavior
  event.preventDefault();
  // close the popup
  popup2.close();
});
  }
 
  
  



  $(function() {
    var INDEX = 0; 
    $("#chat-submit").click(function(e) {
      e.preventDefault();
      var msg = $("#chat-input").val(); 
      if(msg.trim() == ''){
        return false;
      }
      generate_message(msg, 'self');
      var buttons = [
          {
            name: 'Existing User',
            value: 'existing'
          },
          {
            name: 'New User',
            value: 'new'
          }
        ];
      setTimeout(function() {      
        generate_message(msg, 'user');  
      }, 1000)
      
    })
    
    function generate_message(msg, type) {
      INDEX++;
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
      str += "          <span class=\"msg-avatar\">";
      str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "        <\/div>";
      $(".chat-logs").append(str);
      $("#cm-msg-"+INDEX).hide().fadeIn(300);
      if(type == 'self'){
       $("#chat-input").val(''); 
      }    
      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
    }  
    
    function generate_button_message(msg, buttons){    
      /* Buttons should be object array 
        [
          {
            name: 'Existing User',
            value: 'existing'
          },
          {
            name: 'New User',
            value: 'new'
          }
        ]
      */
      INDEX++;
      var btn_obj = buttons.map(function(button) {
         return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
      }).join('');
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
      str += "          <span class=\"msg-avatar\">";
      str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "          <div class=\"cm-msg-button\">";
      str += "            <ul>";   
      str += btn_obj;
      str += "            <\/ul>";
      str += "          <\/div>";
      str += "        <\/div>";
      $(".chat-logs").append(str);
      $("#cm-msg-"+INDEX).hide().fadeIn(300);   
      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
      $("#chat-input").attr("disabled", true);
    }
    
    $(document).delegate(".chat-btn", "click", function() {
      var value = $(this).attr("chat-value");
      var name = $(this).html();
      $("#chat-input").attr("disabled", false);
      generate_message(name, 'self');
    })
    
    $("#chat-circle").click(function() {    
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
    $(".chat-box-toggle").click(function() {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
  })