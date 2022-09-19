class RemoveColumnsFromTickets < ActiveRecord::Migration[6.1]
  def change
    remove_column :tickets, :title
    remove_column :tickets, :description
    remove_column :tickets, :date
    remove_column :tickets, :price
  end
end
