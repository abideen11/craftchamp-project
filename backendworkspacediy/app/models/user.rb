class User < ApplicationRecord
    has_secure_password
    has_many :guides

    validates :username, presence: true, uniqueness: true
end
