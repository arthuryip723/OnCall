class CreateBabes < ActiveRecord::Migration
  def change
    create_table :babes do |t|
      t.string :name
      t.integer :age

      t.timestamps null: false
    end
  end
end
