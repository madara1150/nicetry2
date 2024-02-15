package models

import "gorm.io/gorm"

type Like struct {
	gorm.Model
	UserId string
	PostId string
	Status bool
}
