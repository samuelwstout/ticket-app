class AddDateToTickets < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :date, :date
  end
end
