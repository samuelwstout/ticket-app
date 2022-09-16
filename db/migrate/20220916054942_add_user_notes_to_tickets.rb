class AddUserNotesToTickets < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :user_notes, :text
  end
end
