#pragma strict

var focus : GameObject;

function orbit(newPosition : Vector3, speed : float, focus : Quaternion) {
  
  this.transform.position = newPosition;
  this.transform.rotation = focus;
}

function Start () {
  orbit(Vector3(-1.6,0.5,-.3), 0, focus.Quaternion);

}