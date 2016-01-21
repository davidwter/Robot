Blockly.Blocks['move_forward'] = {
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

Blockly.Blocks['turn_left'] = {
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

Blockly.Blocks['turn_right'] = {
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

Blockly.Blocks['report'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Report position");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['place_at'] = {
  init: function() {
    this.jsonInit({
      "message0": "Place robot at column %1 and row %2,\n facing %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "col",
          "options": [
            ["0","0"],
            ["1","1"],
            ["2","2"],
            ["3","3"],
            ["4","4"],
            ["5","5"],
            ["6","6"],
            ["7","7"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "row",
          "options": [
            ["0","0"],
            ["1","1"],
            ["2","2"],
            ["3","3"],
            ["4","4"],
            ["5","5"],
            ["6","6"],
            ["7","7"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "facing",
          "options": [
            ["North","North"],
            ["West","West"],
            ["South","South"],
            ["East","East"]
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


Blockly.Blocks['start'] = {
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

