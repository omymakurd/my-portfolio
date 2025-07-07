function onMouseOver(element) {

    element.style.backgroundColor = "#261d0c";
    element.style.color="#f9a825";

}
function onMouseOut(element) {
    element.style.backgroundColor = "";
     element.style.color="";
}
function Overbtn(element) {
    element.style.backgroundColor="#e79701";
    element.style.transform="scale(1.1)"; 
    element.style.transition="transform 0.3s ease ";

}
function Outbtn(element) {
    element.style.backgroundColor="";
    element.style.transform="scale(1)"; 
    
}
function Overbtnget(element) {
    element.style.backgroundColor="#261d0c";
    element.style.transform="scale(1.1)"; 
    element.style.transition="transform 0.3s ease ";

}
function Outbtnget(element) {
    element.style.backgroundColor="";
    element.style.transform="scale(1)"; 
    
}
function Overicon(element) {
    element.style.backgroundColor="#3d2b0a";
    element.style.transform="scale(1.1)"; 
    element.style.transition="transform 0.3s ease ";

}
function Outicon(element) {
    element.style.backgroundColor="";
    element.style.transform="scale(1)"; 
    
}
function downloadCV() {
   window.open('files/cv.pdf', '_blank');                 
}