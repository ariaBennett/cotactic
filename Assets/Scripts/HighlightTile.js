#pragma strict

var enviroment : Transform;

function Start () {

}



function Update () {
 
    
    if (Input.GetMouseButtonDown(0)) {

      var fwd = Camera.main.transform.forward;
      var hit : RaycastHit;
      var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
      if (Physics.Raycast(ray, hit)) {
        var objectHit = hit.transform;
        if (objectHit.IsChildOf(enviroment)) {
        
          // Get currentUnit from camera
          var unit : Unit;
          unit = Camera.main.GetComponent("Unit");
          var currentUnit = unit.getCurrentUnit();
          
          // Get highlightTile1 from camera
          var effect : Effect;
          effect = Camera.main.GetComponent("Effect");
          
          // Destroy old highlight effects
          effect.destroy("highlightTile1");

          
          // Add highlight effect to target tile
          effect.create("highlightTile1", objectHit.transform.position, objectHit.transform.localScale);   
                  

          
          
          
         
          
          
          // Move unit to tile
          var topOfTile = objectHit.transform.position;
          
          topOfTile.y = objectHit.transform.position.y + objectHit.transform.localScale.y / 2;
          
          //var currentUnitFeet = (currentUnit.transform.localScale.y);
          //var newLocation = topOfTile;
          //newLocation.y = newLocation.y + currentUnitFeet;
          currentUnit.transform.position = topOfTile;
          
        }
      }
    }

  

}