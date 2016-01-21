Blockly.JavaScript['tourner_droite_i'] = function(block) {
  // Repeat n times.
  if (block.getField('degres')) {
    // Internal number.
    var degres = String(Number(block.getFieldValue('degres')));
  } else {
    // External number.
    var degres = Blockly.JavaScript.valueToCode(block, 'degres',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  var code = 'tournerDroiteVar('+degres+');';
  return code;
};

Blockly.JavaScript['tourner_gauche_i'] = function(block) {
  // Repeat n times.
  if (block.getField('degres')) {
    // Internal number.
    var degres = String(Number(block.getFieldValue('degres')));
  } else {
    // External number.
    var degres = Blockly.JavaScript.valueToCode(block, 'degres',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  var code = 'tournerGaucheVar(\''+degres+'\');';
  return code;
};


Blockly.JavaScript['dessiner_un_trait'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'dessinerTrait();';
  return code;
};

Blockly.JavaScript['dessiner_un_triangle'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'dessinerTrait();tournerGaucheVar(\'120\');dessinerTrait();tournerGaucheVar(\'120\');dessinerTrait();tournerGaucheVar(\'120\');';
  return code;
};


Blockly.JavaScript['avancer_d_une_case'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'AvancerUneCase();';
  return code;
};

Blockly.JavaScript['tirer_fleche'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'TirerFleche();';
  return code;
};

Blockly.JavaScript['tourner_gauche'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'TournerGauche();';
  return code;
};

Blockly.JavaScript['tourner_droite'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'TournerDroite();';
  return code;
};

Blockly.JavaScript['tourner_gauche_artist'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'tournerGaucheVar(\'90\');';
  return code;
};

Blockly.JavaScript['tourner_droite_artist'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'tournerDroiteVar(\'90\');';
  return code;
};


Blockly.JavaScript['tresor_atteint'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'tresorAtteint()';
  return [code,Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['next_is_bug'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'nextIsBug()';
  return [code,Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['sauter_une_case'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'SauterUneCase();';
  return code;
};

Blockly.JavaScript['demarrage'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.JavaScript['repeter_n_fois'] = function(block) {
  // Repeat n times.
  if (block.getField('fois')) {
    // Internal number.
    var repeats = String(Number(block.getFieldValue('fois')));
  } else {
    // External number.
    var repeats = Blockly.JavaScript.valueToCode(block, 'fois',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};
