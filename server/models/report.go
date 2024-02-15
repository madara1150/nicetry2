package models

import (
	"gorm.io/gorm"
)

type Report struct {
	gorm.Model
	PostId string
	UserId string
	Reson  string
	Status bool
}
