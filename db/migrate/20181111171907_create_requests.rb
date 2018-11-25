class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.decimal :amount
      t.text :description
      t.string :status

      t.timestamps
    end
  end
end
