import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Bugdget from "./Budget";

@Table({
  tableName: "expenses",
})
class Expense extends Model {
  @Column({
    type: DataType.STRING(100),
  })
  declare name: string;
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
