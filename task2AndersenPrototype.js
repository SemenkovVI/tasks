function Grid(tableRow, tableColumn, tableName, background) {
  this.tableRow = tableRow;
  this.tableColumn = tableColumn;
  this.tableName = tableName;
  this.background = background;
  this.isDynamic = false;
}

Grid.prototype.getTableSumOfCell = function () {
  return this.tableRow * this.tableColumn;
}

Grid.prototype.setDynamic = function () {
  this.isDynamic = true;
}

Grid.prototype.setNonDynamic = function () {
  this.isDynamic = false;
}

Grid.prototype.getDynamic = function () {
  return `The table is ${this.isDynamic ? 'dynamic' : 'non dynamic'}`;
}

Grid.prototype.initTable = function () {
  const objectTable = {
    tableName: this.tableName,
    isScrolAvaliable: true,
    background: this.background,
    columsNumbers: this.tableColumn,
    rowsNumbers: this.tableRow,
    rows: []
  };

  for (let i = 1; i <= objectTable.rowsNumbers; i++) {
    objectTable.rows.push({
      id: Math.floor(Math.random() * 1000),
      value: `row №${i}`,
      isCheckbox: i == objectTable.rowsNumbers ? true : false,
    });
  }

  return objectTable;
}


function UserTable(tableRow, tableColumn, tableName, background, isDynamic, userLogin, userPassword, countOfBlockCell) {
  this.tableRow = tableRow;
  this.tableColumn = tableColumn;
  this.tableName = tableName;
  this.background = background;
  this.isDynamic = isDynamic;
  this.login = userLogin;
  this.password = userPassword;
  this.countOfBlockCell = countOfBlockCell;
}

UserTable.prototype = Object.create(Grid.prototype);

UserTable.prototype.getLogin = function () {
  return this.login;
}

UserTable.prototype.getPassword = function () {
  return this.password;
}

UserTable.prototype.addRow = function () {
  ++this.tableRow;
}

UserTable.prototype.deleteRow = function () {
  --this.tableRow;
}

UserTable.prototype.getDynamic = function () {
  return `The user with ${this.login} login have ${this.isDynamic ? 'dynamic' : 'non dynamic'} table`;
}

UserTable.prototype.getTableSumOfCell = function () {
  if (Grid.prototype.getTableSumOfCell.apply(this) && this.countOfBlockCell) {
    return Grid.prototype.getTableSumOfCell.call(this) - this.countOfBlockCell;
  } else return undefined;
}


function OrderTable(tableRow, tableColumn, tableName, background, isDynamic, userLogin, userPassword, countOfBlockCell, optionalCell) {
  this.tableRow = tableRow;
  this.tableColumn = tableColumn;
  this.tableName = tableName;
  this.background = background;
  this.isDynamic = isDynamic;
  this.login = userLogin;
  this.password = userPassword;
  this.countOfBlockCell = countOfBlockCell;
  this.optionalCell = optionalCell;
  this.borderColor = 'black';
  this.justify = 'center';
}

OrderTable.prototype = Object.create(Grid.prototype);

OrderTable.prototype.colorOfBorder = function () {
  return `The border color is ${this.borderColor}`;
}

OrderTable.prototype.getJustifyContent = function () {
  return `The justify content is ${this.justify}`;
}

OrderTable.prototype.setColorBlue = function () {
  this.background = 'blue';
}

OrderTable.prototype.setColorYellow = function () {
  this.background = 'yellow';
}

OrderTable.prototype.getTableSumOfCell = function () {
  return Grid.prototype.getTableSumOfCell() - this.countOfBlockCell + this.optionalCell;
}

OrderTable.prototype.getDynamic = function () {
  return this.isDynamic;
}