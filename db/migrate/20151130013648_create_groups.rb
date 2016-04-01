class CreateGroups < ActiveRecord::Migration

  def change
    create_table :groups do |t|
      t.string :letter, null: false

      t.references :conference, index: true, null: false

      t.timestamps null: false
    end
  end

end
