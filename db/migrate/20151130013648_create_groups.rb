class CreateGroups < ActiveRecord::Migration

  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.string :primary_leader, null: false
      t.string :secondary_leader, null: false

      t.references :conference, index: true

      t.timestamps null: false
    end
  end

end
