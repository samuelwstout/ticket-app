class AddTitleToTickets < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :title, :string
  end
end
