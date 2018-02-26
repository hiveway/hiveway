# frozen_string_literal: true

class Ethereum
  include Singleton

  def createWallet(user, passphrase)
    client = Jeth::HttpClient.new(Setting.eth_rpc_node)
    wallet = client.personal_new_account(passphrase)
    act = Account.find(user.account.id)
    act.update(eth_wallet: wallet['result']);
  end
end
