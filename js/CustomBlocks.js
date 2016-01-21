Blockly.Blocks['avancer_d_une_case'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move one step forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['tourner_gauche'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn left \u21BA");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['tourner_droite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn right \u21BB");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['placer'] = {
  init: function() {
    this.jsonInit({
      "message0": "Place robot at column %1 and row %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "col",
          "options": [
            ["1","1"],
            ["2","2"],
            ["3","3"],
            ["4","4"],
            ["5","5"],
            ["6","6"],
            ["7","7"],
            ["8","8"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "row",
          "options": [
            ["1","1"],
            ["2","2"],
            ["3","3"],
            ["4","4"],
            ["5","5"],
            ["6","6"],
            ["7","7"],
            ["8","8"]
          ]
        }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};


Blockly.Blocks['demarrage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start");
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setMovable(false);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

