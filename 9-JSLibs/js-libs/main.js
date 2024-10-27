import './style.css'
import './node_modules/waypoints/lib/noframework.waypoints'

const waypointDiv = document.getElementById("waypoint_div");
let button = document.getElementById("waypoint_button")
const testButton = new Waypoint({
  element : document.getElementById('waypoint_div'),
  handler : function (direction){
    if (direction === 'down'){
     waypointDiv.textContent="Down"
     button.classList.toggle("opacity-0")

      
    }
    else{
      console.log("up")
      waypointDiv.textContent="Up"
      button.classList.toggle("opacity-0")
      
    }
  },
  offset:'15%'
})