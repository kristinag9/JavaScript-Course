let password = "helloKitty";

if(password.length >= 6) {
   if(password.indexOf(' ') === -1) {
      console.log("Valid password!");
   } else {
      console.log("Password is long enought but cannot contain spaces!");
   }
} else {
   console.log("Password must be longer!");
}