class CreateWallet < ActiveRecord::Migration[5.1]
  def change
    add_column :accounts, :eth_wallet, :string, null: true
    add_column :accounts, :eth_key, :string, null: true
  end
end
