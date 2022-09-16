class AddUsernameToTickets < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :user, :string
  end
end
