# frozen_string_literal: true

class Settings::ProfilesController < ApplicationController
  include ObfuscateFilename

  layout 'admin'

  before_action :authenticate_user!
  before_action :set_account

  obfuscate_filename [:account, :avatar]
  obfuscate_filename [:account, :header]

  def show
    @hasKeyFile = !findKeyFile.nil?
  end

  def update
    if UpdateAccountService.new.call(@account, account_params)
      ActivityPub::UpdateDistributionWorker.perform_async(@account.id)
      redirect_to settings_profile_path, notice: I18n.t('generic.changes_saved_msg')
    else
      render :show
    end
  end

  def downloadkey
    keyfile = findKeyFile
    if(!keyfile.nil?)
      send_file(keyfile, filename: 'etherhive_wallet.json', type: 'application/json')
    end
  end

  def findKeyFile
    wallet = @account.eth_wallet
    if(!wallet.nil?)
      wallet = wallet[2..-1]
      return findFile(ENV['ETH_KEYSTORE'], wallet)
    else
      return nil
    end
  end

  def findFile(loc, string)
    if File.directory?(loc)
      Dir.foreach(loc) do |name|
        if name!='.' and name!='..' and name.include?(string)
          return File.join(loc,name)
        end
      end
    end
  end

  private

  def account_params
    params.require(:account).permit(:display_name, :note, :avatar, :header, :locked)
  end

  def set_account
    @account = current_user.account
  end
end
