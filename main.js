var last_position_of_touch_x, last_position_of_touch_y;

    canvas = document.getElementById('myCanvas');
   var ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
if(width < 992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        
        console.log("touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
     
        last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

 
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
console.log("touchmove");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_touch_x + "y = " + last_position_of_touch_y);
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_touch_x = current_position_of_touch_x; 
        last_position_of_touch_y = current_position_of_touch_y;
    }
    function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
    var mouseEvent = "empty";
    var oldX,oldY;
    canvas.addEventListener("mousedown",line);
    function line(e){
        color = document.getElementById("color").value;
        width = document.getElementById("width_of_line").value;
        mouseEvent="mousedown";
    }
    canvas.addEventListener("mousemove",line1);
    function line1(e){
        currentX = e.clientX - canvas.offsetLeft;
        currentY = e.clientY - canvas.offsetTop;
        if(mouseEvent == "mousedown"){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            console.log("Last position of X and Y = ");
            console.log("x = "+oldX+"Y = "+oldY);
            ctx.moveTo(oldX,oldY);
            console.log("Current position of X and Y = ");
            console.log("x = "+currentX+"Y = "+currentY);
            ctx.lineTo(currentX,currentY);
            ctx.stroke();
        }
        oldX = currentX;
        oldY = currentY;
    }
    canvas.addEventListener("mouseup", funmouseup);
    function funmouseup(e)
{ mouseEvent = "mouseup"; }
canvas.addEventListener("mouseleave", funmouseleave);
function funmouseleave(e)
{ mouseEvent = "mouseleave"; }