class User < ApplicationRecord
    has_many :tickets
    has_many :concerts, through: :tickets

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
