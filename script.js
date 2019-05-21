// var scriptAdd = document.createElement('script');
// scriptAdd.type = 'text/javascript';
// scriptAdd.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// scriptAdd.integrity = 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=';
// scriptAdd.crossOrigin = 'anonymous';
// document.getElementsByTagName('head')[0].appendChild(scriptAdd);
//
// window.addEventListener("load", function () {
//     $('.widgetRegForm').html('<form class="form_widget" id="form_widget" method="post" action="javascript:void(0)">\n' +
//         '<div class="name_wrapper">\n' +
//         '    <input class="input_field" name="firstName" required pattern="^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$" id="form_name" placeholder="Name" type="text">\n' +
//         '    <input class="input_field" name="lastName" required pattern="^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$" id="form_last_name" placeholder="Last Name" type="text">\n' +
//         '</div>\n' +
//         '    <input class="input_field" name="phone" required pattern="^\\d{10}$" minlength="10" id="form_phone" placeholder="Phone" type="tel">\n' +
//         '    <input class="input_field" name="country" required pattern="\\w*[A-Z]\\w*[A-Z]\\w*" maxlength="2" minlength="2" id="form_country" placeholder="Country" type="text">\n' +
//         '    <input class="input_field" name="email" required pattern="^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$" id="form_email" placeholder="Email" type="email">\n' +
//         '<div class="pass_wrapper">\n' +
//         '    <input class="input_field" name="password" required pattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$" onclick="checkPass(); return false;" id="form_pass" placeholder="Password" type="password">\n' +
//         '    <input class="input_field" required pattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$" onclick="checkPass(); return false;" id="form_pass-confirm" placeholder="Confirm password" type="password">\n' +
//         '</div> \n' +
//         '    <input class="input_field" required id="form_checkbox" type="checkbox">\n' +
//         '    <input class="submit_btn" id="submit" placeholder="SUBMIT" value="Submit" type="submit">\n' +
//         '<div id="error-nwl"></div>\n' +
//         '<div id="results"></div>' +
//         '</form>');
//
//     $('#form_widget input').on('click keyup', function () {
//             console.log($('#form_checkbox').is(':checked'));
//             if ($('#form_name').val() !== "" && $('#form_last_name').val() !== "" && $('#form_email').val() !== "" && $('#form_checkbox').is(':checked') === true
//                 && $('#form_pass').val().length >= 6 && $('#form_pass-confirm').val().length >= 6) {
//                 console.log($('#form_checkbox').is(':checked'));
//                 $('.submit_btn').addClass('active');
//                 // $('.form-checker').removeClass('active');
//                 $('#submit').click(function () {
//                     // $(this).location.reload(true);
//                     alert('Okay!')
//                 })
//             } else {
//                 $('.submit_btn').removeClass('active');
//                 // $('.form-checker').addClass('active');
//
//             }
//         }
//     );
//
//     // '<form class="reg_form" method="POST" id="form_widget" onclick="event.preventDefault()">\n' +
//     // '    <div class="name-wrapper">\n' +
//     // '        <!--        <label class="lang" key="lang_first-name" for="firstName">Name:</label>-->\n' +
//     // '        <input required\n' +
//     // '               pattern="^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$"\n' + // ADD pattern TODO:
//     // '               id="firstName"\n' +
//     // '               name="firstName"\n' +
//     // '               value=""\n' +
//     // '               type="text"\n' +
//     // '               placeholder="Name">\n' +
//     // '        <!--        <label class="lang" key="lang_last-name" for="lastName">Last Name:</label>-->\n' +
//     // '        <input required\n' +
//     // '               pattern="^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$"\n' + // ADD pattern TODO:
//     // '               id="lastName"\n' +
//     // '               name="lastName"\n' +
//     // '               value=""\n' +
//     // '               type="text"\n' +
//     // '               placeholder="Last Name">\n' +
//     // '    </div>\n' +
//     // '    <!--    <label class="lang" key="lang_phone" for="phone">Phone:</label>-->\n' +
//     // '    <input required\n' +
//     // // '           pattern="^d{10}$"\n' +
//     // '           pattern="^\\d{10}$"\n' +
//     // '           id="phone"\n' +
//     // '           name="phone"\n' +
//     // '           value=""\n' +
//     // '           type="tel"\n' +
//     // '           placeholder="Phone">\n' +
//     // '    <!--    <label class="lang" key="lang_country" for="country">Country:</label>-->\n' +
//     // '    <input required\n' +
//     // // '           pattern="^[a-zA-Z]+(([\\\',. -][a-zA-Z ])?[a-zA-Z]*)*$" ' +
//     // '           pattern="^[A-Z]+$"' +
//     // '           maxlength="2" ' +
//     // '           id="country" ' +
//     // '           name="country"\n' +
//     // '           value=""\n' +
//     // '           type="text"\n' +
//     // '           placeholder="Country">\n' +
//     // '    <!--    <label class="lang" key="lang_email" for="email">Email:</label>-->\n' +
//     // '    <input required\n' +
//     // '           pattern="[^@]+@[^@]+\\.[a-zA-Z]{2,6}"\n' +                  // ADD pattern TODO:
//     // '           id="email"\n' +
//     // '           name="email"\n' +
//     // '           value=""\n' +
//     // '           type="email"\n' +
//     // '           placeholder="Email">\n' +
//     // '    <!--    <label class="lang" key="lang_pass" for="password">Password:</label>-->\n' +
//     // '    <div class="pass-wrapper">\n' +
//     // '        <input required\n' +
//     // '               minlength="6"\n' +
//     // '               onkeyup="checkPass(); return false;"\n' +
//     // '               id="form_pass1"\n' +
//     // '               name="password"\n' +
//     // '               value=""\n' +
//     // '               type="password"\n' +
//     // '               placeholder="Password">\n' +
//     // '        <!--    <label class="lang" key="lang_confirm-pass" for="password_confirm">Confirm password:</label>-->\n' +
//     // '        <input required\n' +
//     // '               minlength="6"\n' +
//     // '               onkeyup="checkPass(); return false;"\n' +
//     // '               id="form_pass2"\n' +
//     // '               name="password_confirm"\n' +
//     // '               type="password"\n' +
//     // '               placeholder="Confirm password">\n' +
//     // '    </div>\n' +
//     // '<input required id="form_checkbox" type="checkbox" value="">\n' +
//     // '<button class="form_button lang"\n' +
//     // '        key="lang_register"\n' +
//     // '        id="submit"\n' +
//     // '        value=""\n' +
//     // '        type="submit">Submit\n' +
//     // '</button>' +
//     // '</form>\n' +
//     // '<p id="error-nwl"></p>\n' +
//     // '<div id="results"></div>'
//     // );
//
//     $('#submit').on('click', function () {
//         var msg = $('#form_widget').serialize();
//         console.log(msg);
//         $.ajax({
//             type: 'POST',
//             url: 'https://register.strattonmarkets.com/Lp/LpRegister/st',
//             data: msg,
//             success: function (data) {
//                 var res_data = JSON.parse(data);
//                 $('#results').html(JSON.stringify(res_data.error));
//                 if (res_data.error !== null) {
//                     alert('there is error')
//                 }
//                 console.log(res_data.error);
//             },
//             error: function (xhr, str) {
//                 alert('Возникла ошибка: ' + xhr.responseCode);
//             }
//         });
//     });
// });
//
// function checkPass() {
//     var pass1 = document.getElementById('form_pass');
//     var pass2 = document.getElementById('form_pass-confirm');
//     var message = document.getElementById('error-nwl');
//     var goodColor = "#66cc66";
//     var badColor = "#ff8082";
//
//     if (pass1.value.length >= 6) {
//         pass1.style.backgroundColor = goodColor;
//         message.style.color = goodColor;
//         message.innerHTML = "character number ok!"
//     } else {
//         pass1.style.backgroundColor = badColor;
//         message.style.color = badColor;
//         message.innerHTML = "You have to enter at least 6 digit!";
//         return;
//     }
//
//     if (pass1.value === pass2.value) {
//         pass2.style.backgroundColor = goodColor;
//         message.style.color = goodColor;
//         message.innerHTML = "Passwords are ok!";
//     } else {
//         pass2.style.backgroundColor = badColor;
//         message.style.color = badColor;
//         message.innerHTML = "These passwords don't match";
//     }
// }
