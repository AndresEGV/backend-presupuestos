import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Expense from "./Expense";

@Table({
  tableName: "bugdgets",
})
class Bugdget extends Model {
  @Column({
    type: DataType.STRING(100),
  })
  declare name: string;
  @Column({
    type: DataType.DECIMAL,
  })
  declare amount: number;

  @HasMany(() => Expense, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  declare expenses: Expense[];
}

export default Bugdget;
