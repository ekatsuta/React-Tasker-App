class CardSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :lists, include_nested_associations: true
end
