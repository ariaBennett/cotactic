#pragma strict

var empty : Component;
var highlightTile1 : Component;

function create(name : String, position : Vector3, scale : Vector3) {
  if (name == "highlightTile1") {
    var effect = Instantiate(highlightTile1, position, Quaternion.identity);
    effect.transform.localScale = scale;
  }
  else {
    Debug.Log("ERROR: Effect asked for from getEffect not found.");
    return empty;
  }
}

function destroy(name : String) {
/*
  var highlightTileEffects = GameObject.FindGameObjectsWithTag("HighlightEffect");
  for (var i = 0; i < highlightTileEffects.length; i++) {
    Destroy(highlightTileEffects[i]);
  }
  */
}