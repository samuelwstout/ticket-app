class AddPriceToConcerts < ActiveRecord::Migration[6.1]
  def change
    add_column :concerts, :price, :integer
  end
end
