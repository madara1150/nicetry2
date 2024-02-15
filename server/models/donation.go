package models

import "gorm.io/gorm"

type Donation struct {
	gorm.Model
	UserId string
	PostId string
	Amount float64
	Status bool
}
