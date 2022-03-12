var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) 
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";  
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    mouseEvent="mousemove";
    current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y = e.clientY - canvas.offsetTop;

}

if (mouseEvent == "mouseDown");
color=document.getElementById("color").value;
width=document.getElementById("width").value;
ctx.stroke();
ctx.moveTo(lsr_position_of_x, last_position_of_y);

e.clientY - canvas.offsetTop;
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    mouseEvent="touchstart";
}
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    mouseEvent="touchmove";
}
last_position_of_x;
last_position_of_y;


