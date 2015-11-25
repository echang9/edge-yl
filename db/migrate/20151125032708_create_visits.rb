class CreateVisits < ActiveRecord::Migration
  def change
    create_table :visits do |t|

      t.references :visitable, polymorphic: true, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
