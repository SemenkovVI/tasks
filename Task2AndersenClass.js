class Grid {
  constructor(tableRow, tableColumn, tableName, background) {
    this.tableRow = tableRow;
    this.tableColumn = tableColumn;
    this.tableName = tableName;
    this.background = background;
    this.isDynamic = false;
  }

  getTableSumOfCell() {
    return this.tableRow * this.tableColumn;
  }

  setDynamic() {
    this.isDynamic = true;
  }

  setNonDynamic() {
    this.isDynamic = false;
  }

  getDynamic() {
    return `The table is ${this.isDynamic ? 'dynamic' : 'non dynamic'}`;
  }

  initTable() {
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
}


class UserTable extends Grid {
  constructor(tableRow, tableColumn, tableName, background, isDynamic, userLogin, userPassword, countOfBlockCell) {
    super(tableRow, tableColumn, tableName, background, isDynamic);
    this.login = userLogin;
    this.password = userPassword;
    this.countOfBlockCell = countOfBlockCell;
  }

  getLogin() {
    return this.login;
  }

  getPassword() {
    return this.password;
  }

  addRow() {
    this.tableRow = this.tableRow + 1;
  }

  deleteRow() {
    this.tableRow = this.tableRow - 1;
  }

  getDynamic() {
    return `The user with ${this.login} login have ${this.isDynamic ? 'dynamic' : 'non dynamic'} table`;
  }

  getTableSumOfCell() {
    return super.getTableSumOfCell() - this.countOfBlockCell;

  }
}


class OrderTable extends Grid {
  constructor(tableRow, tableColumn, tableName, background, isDynamic, userLogin, userPassword, countOfBlockCell, optionalCell) {
    super(tableRow, tableColumn, tableName, background, isDynamic);
    this.login = userLogin;
    this.password = userPassword;
    this.countOfBlockCell = countOfBlockCell;
    this.optionalCell = optionalCell;
    this.borderColor = 'black';
    this.justify = 'center';
  }

  colorOfBorder() {
    return `The border color is ${this.borderColor}`;
  }

  getJustifyContent() {
    return `The justify content is ${this.justify}`;
  }

  setColorBlue() {
    this.background = 'blue';
  }

  setColorYellow() {
    this.background = 'yellow';
  }

  getTableSumOfCell() {
    return super.getTableSumOfCell() - this.countOfBlockCell + this.optionalCell;
  }

  getDynamic() {
    return this.isDynamic;
  }
}
