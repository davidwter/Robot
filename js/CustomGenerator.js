Blockly.JavaScript['move_forward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'moveForward();';
  return code;
};

Blockly.JavaScript['turn_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnLeft();';
  return code;
};

Blockly.JavaScript['turn_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnRight();';
  return code;
};



Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.JavaScript['place_at'] = function(block) {
  // Repeat n times.
  if (block.getField('col')) {
    // Internal number.
    var col = String(Number(block.getFieldValue('col')));
  } else {
    // External number.
    var col = Blockly.JavaScript.valueToCode(block, 'col',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  if (block.getField('row')) {
    // Internal number.
    var row = String(Number(block.getFieldValue('row')));
  } else {
    // External number.
    var row = Blockly.JavaScript.valueToCode(block, 'row',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  if (block.getField('facing')) {
    // Internal number.
    var facing = String(block.getFieldValue('facing'));
  } else {
    // External number.
    var facing = Blockly.JavaScript.valueToCode(block, 'facing',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  var code = "placeRobotAt("+col+","+row+",\""+facing+"\");"
  return code;
};
