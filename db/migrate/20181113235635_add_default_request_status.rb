class AddDefaultRequestStatus < ActiveRecord::Migration[5.2]
  def change
    change_column_default :requests, :status, 'pending'
  end
end
