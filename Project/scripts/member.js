
function validate(){

		if( document.myForm.pass1.value == "" || document.myForm.pass1.value.length<8 )
	{
		alert( "Invalid Password! Please enter your password correctly." );
		document.myForm.pass1.focus() ;
		return false;
	}
	alert("Logging In, Please Wait For Authorization");
	alert("You are Logged In. Welcome to the society! ");
location.href="index.html";
  return true;
}

function validate1()
{
	if( document.form.fname.value == "" )
	{
    document.form.fname.focus() ;
		alert( "Please provide your FirstName!" );
    return false;

	}
	if( document.form.lname.value == "" )
	{
    document.form.lname.focus() ;
		alert( "Please provide your Lastname!" );
		return false;
	}
	if( document.form.email.value == "" )

	{
    document.form.email.focus() ;
		alert("Please provide your Email!");
		return false;

	}
		if( document.form.pass.value == "" )
	{
    document.form.pass.focus() ;
		alert( "Please provide your password!" );
		return false;

	}
	if( (document.form.pass.value).length<8 )
	{
    document.form.pass.focus() ;
		alert( "Password Should Be In Minimum 8 characters.");
		return false;

	}
		if( document.form.repass.value == "" )
	{
		document.form.repass.focus() ;
		alert( "Please re-enter your password!" );
		return false;
}
	if(form.pass.value != form.repass.value)
	{
    document.form.repass.focus() ;
	alert("Password Doesn't Match, Please Re-Enter Cautiouly");
	return false;
	}
	if( document.form.Month.selectedIndex == 0)
	{
    document.form.Month.focus() ;
		alert( "Please select birth month!" );
		return false;
	}
	if( document.form.Days.selectedIndex == 0)
	{
		document.form.Days.focus() ;
		alert( "Please select birth day!" );
		return false;
	}
	if( document.form.Years.selectedIndex == 0)
	{
document.form.Years.focus() ;
    alert( "Please select birth year also!!" );
		return false;
	}
	var one = document.getElementById('male').checked;
	var two = document.getElementById('female').checked;
		if((one=="")&&(two==""))
		{
		alert("Select either male or female");
		return false;
		}
		alert("Your Account Has Been Submitted For Approval. Thank You For Joining Us");
		return true ;
}

document.getElementById("btn").addEventListener("click", signup);

function signup() {
  var a = document.querySelectorAll(".feel")[0];
  var b = document.querySelectorAll(".feels")[0];
  a.style.visibility = "hidden"
  b.style.visibility = "visible";
}
function forgot(){
  alert("Feature not available yet.");
  return false;
}
