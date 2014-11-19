function Frame() {
  this.known = [];
}

Frame.prototype.declare = function(assertion) {
  this.known.push(assertion);
}

var root = new Frame();
var scope = root;

function le(description) {
  // What does a description entail?
}

var the = le;

function Bridi(selbri, sumtiArray) {
  this.selbri = selbri;
  this.sumtiArray = sumtiArray;
}

var that = Bridi;

// la djan. cu se risna zo’e
scope.declare(that(gismu.is-the-heart-of, [undefined, theOneCalled('djan')]));

// la djan. cu ckaji le ka se risna
scope.declare(that(gismu.has-the-property, [theOneCalled('djan'), the(property(that(gismu.is-the-heart-of, []))]));
