'use strict'

function Frame() {
  this._firstRoll = null
  this._secondRoll = null
  this._rollNumber = 0
}

Frame.prototype.bowl = function(roll = new Roll(score)) {
  this._rollNumber ++
  if(this._rollNumber === 1) { this._firstRoll = roll }
  if(this._rollNumber === 2) { this._secondRoll = roll }
}

Frame.prototype.firstRoll = function() {
  return this._firstRoll
}

Frame.prototype.secondRoll = function() {
  return this._secondRoll
}

Frame.prototype.rollNum = function() {
  return this._rollNumber
}

Frame.prototype.score = function() {
  return this._firstRoll.score + this._secondRoll.score
}