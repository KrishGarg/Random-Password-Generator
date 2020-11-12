var digits;
var heading;
var inputBox, inputBoxButton;
var errorMsg;
var nums;
var passwordHtml;
var characters;
var password;

function setup() {
    createCanvas(650,500);

    heading = createElement("h3");
    heading.html("Enter the number of digits you want in your password. (Min: 4, Max: 30)");
    heading.position(50,100);

    inputBox = createInput("");
    inputBox.position(50,145);
    inputBox.style("height","50px");
    inputBox.style("width","50px");
    inputBox.style("font-size","30px");

    inputBoxButton = createButton("Press");
    inputBoxButton.position(50,200);
    inputBoxButton.style("height","50px");
    inputBoxButton.style("width","75px");

    errorMsg = createElement("h1");
    errorMsg.html("ERROR! Invalid Digits");
    errorMsg.position(50,250);
    errorMsg.hide();

    nums = /^[0-9]+$/;

    passwordHtml = createElement("h2");
    passwordHtml.position(50,300);
    passwordHtml.hide();

}

function draw() {
    background("#FEF8DD");

    inputBoxButton.mousePressed(()=>{
        digits = inputBox.value();
        
        if(digits.match(nums) && (digits>=4 && digits<=30)) {
            errorMsg.hide();

            password = "";

            characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

            for(var i=0; i<digits;i++) {
                password += characters.charAt(Math.floor(Math.random()*characters.length));
            }

            passwordHtml.html("PASSWORD: "+password);
            passwordHtml.show();
            
        }

        else{
            errorMsg.show();
            passwordHtml.hide();
        }


    })
}