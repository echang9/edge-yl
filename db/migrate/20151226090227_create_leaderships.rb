class CreateLeaderships < ActiveRecord::Migration

  def change
    create_table :leaderships do |t|
      t.integer :style, default: 0, null: false

      t.references :group, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
  end

end
