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
  const ObjectTable = {
    tableName: this.tableName,
    isScrolAvaliable: true,
    background: this.background,
    columsNumbers: this.tableColumn,
    rowsNumbers: this.tableRow,
    rows: []
  };

  for (let i = 1; i <= ObjectTable.rowsNumbers; i++) {
    ObjectTable.rows.push({
      id: Math.floor(Math.random() * 1000),
      value: `row №${i}`,
      isCheckbox: i == ObjectTable.rowsNumbers ? true : false,
    });
  }

  return ObjectTable;
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

Grid.prototype.getLogin = function () {
  return this.login;
}

Grid.prototype.getPassword = function () {
  return this.password;
}

Grid.prototype.addRow = function () {
  this.tableRow = this.tableRow + 1;
}

Grid.prototype.deleteRow = function () {
  this.tableRow = this.tableRow - 1;
}

Grid.prototype.getDynamic = function () {
  return `The user with ${this.login} login have ${this.isDynamic ? 'dynamic' : 'non dynamic'} table`;
}

Grid.prototype.getTableSumOfCell = function () {
  return Grid.prototype.getTableSumOfCell.call(this);
}

const user = new UserTable(5, 4, 'UserTable', 'green', true, 'login123', 'passwordqwe', 3);
const user1 = new UserTable(5, 4, 'UserTable', 'green', false, 'login123', 'passwordqwe', 3);
console.log(user);
let z = user1.setDynamic();
console.log(user);
console.log(z);


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

Grid.prototype.colorOfBorder = function () {
  return `The border color is ${this.borderColor}`
}

Grid.prototype.getJustifyContent = function () {
  return `The justify content is ${this.justify}`;
}

Grid.prototype.setColorBlue = function () {
  this.background = 'blue';
}

Grid.prototype.setColorYellow = function () {
  this.background = 'yellow';
}

Grid.prototype.getTableSumOfCell = function () {
  return Grid.prototype.getTableSumOfCell() - this.countOfBlockCell + this.optionalCell;
}

Grid.prototype.getDynamic = function () {
  return this.isDynamic;
}