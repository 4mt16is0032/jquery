$(function () {
    $(".submit").click(function () {
        var isValid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                },

                name: {
                    required: true,
                    minlength: 4,
                },

                email: {
                    required: true,
                    email: true,
                },

                mobile: {
                    required: true,
                    minlength: 10,
                },

                course: {
                    required: true,
                },

                percentage: {
                    required: true,
                    min: 55,
                    max: 100
                   


                }
            },

            messages: {
                usn: {
                    required: "USN cannot be empty",
                    minlength: "USN atleast have 10 characters",
                    maxlength: "USN have 10 characters"
                },

                name: {
                    required: "name cannot be empty",
                    minlength: "name atleast have 4 characters"
                },

                email: {
                    required: "Email cannot be empty",
                },

                mobile: {
                    required: "Mobile number cannot be empty",
                    minlegth: "mobile number atleast have 10 characters"
                },

                course: {
                    required: "course cannot be empty",
                },

                percentage: {
                    required: "percentage cannot be empty",
                    min: "student is not eligible",
                    max: "eligible",
                  
                }
            }
        }).form();
        
        
        if (isValid) {
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var branch = $("#branch").val();
            var percentage = $("#percentage").val();
            $(".reset").click();

            student = {
                "usn": usn,
                "name": name,
                "email": email,
                "mobile": mobile,
                "branch": branch,
                "percentage": percentage,
            }
            
            console.log(student);
            
            return false;

        }
    });

});
