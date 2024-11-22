import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

@Table({
  tableName: "bugdgets",
})
class Bugdget extends Model {
  @Column({
    type: DataType.STRING(100),
  })
  name: string;
  @Column({
    type: DataType.DECIMAL,
  })
  amount: number;
}

export default Bugdget;
