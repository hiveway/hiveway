# frozen_string_literal: true

class Ethereum
  include Singleton

  def createWallet(passphrase)
    client = Jeth::HttpClient.new(Setting.eth_rpc_node)
    return client.personal_new_account(passphrase)
  end
end
