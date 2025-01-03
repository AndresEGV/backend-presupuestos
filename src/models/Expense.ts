import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from "sequelize-typescript";
import Bugdget from "./Budget";

@Table({
  tableName: "expenses",
})
class Expense extends Model {
  @AllowNull(false)
  @Column({
    type: DataType.STRING(100),
  })
  declare name: string;
  @AllowNull(false)
  @Column({
    type: DataType.DECIMAL,
  })
  declare amount: number;

  @ForeignKey(() => Bugdget)
  declare bugdgetId: number;

  @BelongsTo(() => Bugdget)
  declare budget: Bugdget;
}

export default Expense;
