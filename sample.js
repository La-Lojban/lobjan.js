function Sumti() {
}

function Frame() {
  this.known = [];
  this.variables = {};
}

Frame.prototype.declare = function(assertion) {
  this.known.push(assertion);
}

Frame.prototype.match = function(article, description) {
  if (this.variables[description] === undefined) {
    this.variables[description] = new Sumti();
  }
  return this.variables[description];
}

var root = new Frame();
var scope = root;

function le(description) {
  return scope.match('le', description);
}

var the = le;

function la(description) {
  return scope.match('la', description);
}


var theOneCalled = la;

function Gismu(rafsi) {
  this.rafsi = rafsi;
}

var gismu = {
  is_the_heart_of: new Gismu(['risna']),
  has_the_property: new Gismu(['ckaji'])
};

function Bridi(selbri, sumtiArray) {
  this.selbri = selbri;
  this.sumtiArray = sumtiArray;
}

var that = Bridi;

// la djan. cu se risna zo’e
scope.declare(that(gismu.is_the_heart_of, [undefined, theOneCalled('djan')]));

// la djan. cu ckaji le ka se risna
scope.declare(that(gismu.has_the_property, [theOneCalled('djan'), the(property(that(gismu.is_the_heart_of, []))]));
