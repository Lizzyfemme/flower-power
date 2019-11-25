class CreateUserPlants < ActiveRecord::Migration[5.2]
  def change
    create_table :user_plants do |t|
      t.string "name"
      t.references :user, foreign_key: true
      t.references :plant, foreign_key: true
      t.timestamps
    end
  end
end
