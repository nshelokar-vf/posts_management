class CreateTitles < ActiveRecord::Migration[7.1]
  def change
    create_table :titles do |t|
      t.text :body

      t.timestamps
    end
  end
end
