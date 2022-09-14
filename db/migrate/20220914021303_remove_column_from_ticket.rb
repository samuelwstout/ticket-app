class RemoveColumnFromTicket < ActiveRecord::Migration[6.1]
  def change
    change_table :tickets do |t|
      t.remove :price
    end
  end
end
